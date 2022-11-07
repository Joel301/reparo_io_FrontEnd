import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postlClient, postProfessionals } from "../../../state/ducks/professionals/actions";
import { validateFormProfessional, validateFormClient } from "./validation.js";
import './estilos.css'
import { useAuth } from "../../../Context/AuthContext"
import { useEffect } from "react";



export default function FormRegistro({ isClient = false }) {
    const isclient = isClient
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const profesiones = useSelector(state => state.professionals.professions)

    // auth hooks 
    const { signup, user, usersimple, login, loginWithGoogle, logout } = useAuth()

    //referencia de información del input para el post:
    const nameRef = useRef('')
    const lastNameRef = useRef('')
    const phoneNumberRef = useRef('')
    const addressRef = useRef('')
    const profileImgRef = useRef('')
    const emailRef = useRef('')
    const professionsRef = useRef([])
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('')
    const aboutMeRef = useRef('')




    //Estado de mostrar contraseña
    const [showPwd, setShowPwd] = useState(false)// pendiente usar useEffect para no renderizar todo el componente
    const [confirmShowPwd, setConfirmShowPwd] = useState(false)// pendiente usar useEffect para no renderizar todo el componente

    // estados errores de Validación: 
    const [errors, setErrors] = useState({})


    // cambio de estado placeholder contraseña
    function handleShowPass(e) {
        e.preventDefault()
        setShowPwd(!showPwd)
    }
    function handleConfirmShowPass(e) {
        e.preventDefault()
        setConfirmShowPwd(!confirmShowPwd)
    }

    // Se llena el input de profesiones:
    function handleSelectProfession(e) {
        e.preventDefault()
        if (professionsRef.current.includes(e.target.value)) {
            professionsRef.current = professionsRef.current.filter(el => el !== e.target.value)
        } else professionsRef.current.push(e.target.value)

    }

    // ESTO DEBE SERVIR PARA CLOUDINARY:

    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const upLoadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "reparoio_images");
        setLoading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/de2sdmotl/image/upload",
            {
                method: "POST",
                body: data,
            }
        )
        const file = await res.json();
        console.log(file.secure_url);
        console.log(res);
        setImage(file.secure_url);
        setLoading(false);
    }

    // se envia la informacion del formulario incluye la validación:
    function hedleOnSubmit(e) {
        e.preventDefault(e)

        const input = {
            firstName: nameRef.current.value,
            lastName: lastNameRef.current.value,
            password: passwordRef.current.value === confirmPasswordRef.current.value ?
                passwordRef.current.value : "No coinciden",
            email: emailRef.current.value,
            phoneNumber: phoneNumberRef.current.value,
            profileImg: image,
            aboutMe: aboutMeRef.current.value,
            address: addressRef.current.value,
        };
        if (input["profileImg"] === "") {
            input["profileImg"] = user?.photoURL||""
        }
        if (!isClient) {
            input["professions"] = professionsRef.current
        }
        if (user) {
            input['email'] = `${user.email}`
            input['password'] = 'thisisnotapass'
        }
        console.log(input)
        const formErrors = isclient
            ? validateFormClient(input)
            : validateFormProfessional(input)

        setErrors(formErrors)


        if (Object.keys(errors).length > 0 || Object.keys(formErrors).length > 0) {
            alert('Verifique que todos los campos esten llenos')
            return
        }
        console.log(!!user && !usersimple)
        console.log("esta en firebase: ", !!user)
        console.log("esta en base de datos?: : ", usersimple && !usersimple.email)
        console.log("es, admin: ", usersimple && !!usersimple.adminId)
        console.log("es, client: ", usersimple && !!usersimple.clientId)
        console.log("es, professional: ", usersimple && !!usersimple.professionalId)
        if (user && !usersimple && !usersimple.email) {
            // aqui se da de alta en firebase
            console.log("en firebase")
            const { email, uid } = user
            // console.log(user)
            isclient
                ? dispatch(postlClient({ ...input, email, authid: uid }))
                : dispatch(postProfessionals({ ...input, email, authid: uid }))
            navigate('/')
        } else {
            console.log("sin firebase")
            signup(input.email, input.password)
                // .then(r => r)
                .then((r) => {
                    const { email, uid } = r.user
                    console.log(r)
                    isclient
                        ? dispatch(postlClient({ ...input, email, authid: uid }))
                        : dispatch(postProfessionals({ ...input, email, authid: uid }))
                    navigate('/')
                    // esto de abajo esta bueno pero no puede ser un mensaje que no sea alert?
                    // alert('Tu perfil ha sido creado')
                }
                ).catch(error => {
                    //aqui se pueden manejar los errores de auth con correo y usuario, 
                    if (error.code === "auth/email-already-in-use") {
                        login(input.email, input.password)
                    }
                    else { console.log(error) }
                })

        }

    }

    function logwithgoogle(e) {
        e.preventDefault()

        loginWithGoogle()
        // .then(() => {
        // emailRef.current = `${user.email}`
        // }).catch(error => { console.log(error) })
    }

    const otherAccount = (e) => {
        e.preventDefault();
        logout()
    }

    useEffect(() => { console.log(user, usersimple) }, [user])

    // se renderiza componente
    return (
        <Form
            onSubmit={(e) => (hedleOnSubmit(e))}
            style={{
                display: 'flex',
                gap: '3px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            {/* #########logwithfirebasezone######### */}
            {/* esta parte me falta:
      -que cuando user.email exista y usersimple.email no exista:
      ----desactive los campos de email y ambos passwords
      ----el valor de email sea el de user.email
      ----los campos de contraseña no importen tal vez muestre "****"

      tal vez que lo invite a continuar con sus datos o que cancele el logeo con google? no se no dormi bien.
       */}
            <Button onClick={logwithgoogle}>boton feo para google 🤣</Button>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    disabled={!!user && user.email}
                    ref={emailRef}
                    type="email"
                    placeholder={!!user && user.email ? user.email : "nombre@example.com"} />
            </Form.Group>
            {!!user && user.email ? <div onClick={otherAccount}>Usar Otra Cuenta</div> : ""}
            {console.log(user, usersimple)}
            {errors.email && <span className="errors">{errors.email}</span>}
            <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Control
                    disabled={!!user && user.email}
                    ref={passwordRef}
                    type={showPwd ? "text" : "password"}
                    placeholder={!!user && user.email ? "*****" : "Crear Contraseña"} />
                <i onClick={(e) => handleShowPass(e)}>
                    {showPwd ?
                        <i className="material-icons" >visibility</i> :
                        <i className="material-icons" >visibility_off</i>
                    }
                </i>
            </Form.Group>
            {errors.password && <span className="errors">{errors.password}</span>}
            <Form.Group className="mb-2" controlId="formBasicPassword_confirm">
                <Form.Control
                    disabled={!!user && user.email}
                    ref={confirmPasswordRef}
                    type={confirmShowPwd ? "text" : "password"}
                    placeholder={!!user && user.email ? "*****" : "Confirmar contraseña"} />
                <div onClick={(e) => handleConfirmShowPass(e)}>
                    {confirmShowPwd ?
                        <i className="material-icons" >visibility</i> :
                        <i className="material-icons" >visibility_off</i>
                    }
                </div>
            </Form.Group>
            {errors.password && <span className="errors">{errors.password}</span>}
            {/* #########logwithfirebasezone######### */}
            <Form.Group className="mb-3 " >
                <Form.Control
                    ref={nameRef}
                    type="text"
                    placeholder="Nombre" />
            </Form.Group>
            {errors.firstName && <p className="errors">{errors.firstName}</p>}
            <Form.Group className="mb-3" >
                <Form.Control
                    ref={lastNameRef}
                    type="text"
                    placeholder="Apellido" />
            </Form.Group>
            {errors.lastName && <span className="errors"> {errors.lastName}</span>}
            <Form.Group className="mb-3" >
                <Form.Control
                    ref={addressRef}
                    type="text"
                    placeholder="Dirección" />
            </Form.Group>
            {errors.address && <span className="errors">{errors.address}</span>}
            <Form.Group className="mb-3" >
                <Form.Control
                    ref={phoneNumberRef}
                    type="text"
                    placeholder="Telefono" />
            </Form.Group>
            {errors.phoneNumber && <span className="errors">{errors.phoneNumber}</span>}
            <Form.Group className="mb-3" >
                <Form.Control
                    ref={profileImgRef}
                    type="file"
                    placeholder="imagen"
                    onChange={upLoadImage} />

            </Form.Group>

            {errors.profileImg && <span className="errors">{errors.profileImg}</span>}
            {!isclient && <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Label>Sobre mi</Form.Label>
                <Form.Control
                    ref={aboutMeRef}
                    type="text"
                    placeholder="Sobre mi"
                    as="textarea" />
            </Form.Group>}
            {errors.aboutMe && <span className="errors">{errors.aboutMe}</span>}
            {!isclient && <Form.Group className="mb-3">
                <Form.Check style={{ display: 'grid', grid: 'templateColums' }} >Profesiones:
                    {
                        profesiones.map(profession =>
                            <div key={profession.id}>
                                <Form.Check.Input
                                    style={{ borderColor: '#212529' }}
                                    type={'checkbox'}
                                    value={profession.name}
                                    isValid onChange={(e) => handleSelectProfession(e)} />
                                <Form.Check.Label style={{ marginLeft: '4px', color: '#212529' }} >{profession.name}</Form.Check.Label>
                            </div>
                        )
                    }
                </Form.Check>
            </Form.Group>}
            {errors.professions && <span className="errors">{errors.professions}</span>}


            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Acepto términos y condiciones" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Registrame
            </Button>

        </Form >
    );
}

