
import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { validateFormClient } from "./validation";
import { postClient } from "../../../state/ducks/clients/actions";
import axios from 'axios';
function FormEditClient() {
   //referencia de información del input para el post:
    const userClient =  {
        id: "e04a10c9-7637-442d-9992-6cd585caac29",
        firstName: "primernombre",
        lastName: "apeido",
        phoneNumber: "kulikitakati",
        address: "kulikitakati",
        email: "kulikittaka@yopmail.com",
        password: "1234567",
        profileImg: "https://img.icons8.com/fluency-systems-regular/96/000000/guest-male.png",
        enabled: true
      }
    const [actual,setActual]= useState({nameRef:userClient.firstName,lastNameRef:userClient.lastName,phoneNumberRef:userClient.phoneNumber,addressRef:userClient.address,profileImgRef:userClient.profileImg,emailRef:userClient.email,passwordRef:userClient.password,confirmPasswordRef:userClient.password})
   const nameRef = useRef('')
   const lastNameRef = useRef('')
   const phoneNumberRef = useRef('')
   const addressRef = useRef('')
   const profileImgRef = useRef('')
   const emailRef = useRef('')
   const passwordRef = useRef('')
   const confirmPasswordRef = useRef('')
 
 
   //Aca viene el cloudinary:
 
   const [image,setImage] = useState("");
   const [loading, setLoading] = useState(false);
 
   const upLoadImage = async (e) =>{
     const files= e.target.files;
     const data = new FormData();
     data.append("file", files[0]);
     data.append("upload_preset","reparoio_images");
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
     setLoading(false);}
 
   //Estado de mostrar contraseña
   const [showPwd, setShowPwd] = useState(false)// pendiente usar useEffect para no renderizar todo el componente
   const [confirmShowPwd, setConfirmShowPwd] = useState(false)// pendiente usar useEffect para no renderizar todo el componente
 
   // cambio de estado placeholder contraseña
   function handleShowPass(e) {
     e.preventDefault()
     setShowPwd(!showPwd)
   }
   function handleConfirmShowPass(e) {
     e.preventDefault()
     setConfirmShowPwd(!confirmShowPwd)
   }
 
   // estados errores de Validación: 
   const [errors, setErrors] = useState({})
 
 async  function hedleOnSubmit(e) {
     e.preventDefault()
 
     const input = {
       firstName: nameRef.current.value,
       lastName: lastNameRef.current.value,
       password: passwordRef.current.value === confirmPasswordRef.current.value ? 
                 passwordRef.current.value: "No coinciden",
       email: emailRef.current.value,
       phoneNumber: phoneNumberRef.current.value,
       profileImg: image,
       address: addressRef.current.value
     };
 
     const currentError = validateFormClient(input)
     setErrors(currentError)
     await axios.put(" https://reparoiobackend-main.up.railway.app/api/clients/clientId",input)
   }
 
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
           type="text"
           placeholder="imagen" 
           onChange={upLoadImage}/>
       </Form.Group>
       {errors.profileImg && <span className="errors">{errors.profileImg}</span>}
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control
           ref={emailRef}
           type="email"
           placeholder="nombre@example.com" />
       </Form.Group>
       {errors.email && <span className="errors">{errors.email}</span>}
       <Form.Group className="mb-2" controlId="formBasicPassword">
         <Form.Control
           ref={passwordRef}
           type={showPwd ? "text" : "password"}
           placeholder="Crear Contraseña" />
         <i onClick={(e) => handleShowPass(e)}>
           {showPwd ?
             <i className="material-icons" >visibility</i> :
             <i className="material-icons" >visibility_off</i>
           }
         </i>
       </Form.Group>
    
       <Button variant="primary" type="submit">
         Registrame
       </Button>
 
     </Form >
   );
}

export default FormEditClient