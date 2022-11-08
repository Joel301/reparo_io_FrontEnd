

//React
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

//Redux
import { getDetail, putDetail } from '../../../state/ducks/detail/actions'
import { getProfessions } from '../../../state/ducks/admins/actions'
import { useSelector } from 'react-redux'

//Bootstrap
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Dropdown from 'react-bootstrap/Dropdown'
import Badge from 'react-bootstrap/Badge'

export default function EditarProfesional () {

    const profesional = useSelector((state) => state.detail)
    const getProfesiones = useSelector((state) => state.admins.professions)
    // console.log(getProfesiones, "profesionessprofesiones")
    
    let profesiones = getProfesiones?.map((prof) => prof.name)

    let profesiones2 = profesional.professions?.map((p) => p.name)

    // console.log(profesiones, "profesiones")
    
    // id lucas rivero = 3044de6d-7757-4d3c-9d3f-654e3eff22ac

    const dispatch = useDispatch()
    
    const [id, setId] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [profileImg, setProfileImg] = useState("")
    const [address, setAddress] = useState("")
    const [diasHabiles, setAvailableDays] = useState([])
    const [profesionesS, setprofesionesS] = useState([])
    // console.log(profesionesS, "profesionesS")

    const [show, setShow] = useState(true)
    
    let newProfessional = {
        address: address ? address : profesional.address,
        email: email ? email : profesional.email,
        firstName: firstName ? firstName : profesional.firstName,
        lastName: lastName ? lastName : profesional.lastName,
        phoneNumber: phoneNumber ? phoneNumber : profesional.phoneNumber,
        profileImg: profileImg ? profileImg : profesional.profileImg,
        professions: profesionesS.length > 0 ? profesionesS : profesiones2,
        availableDays: diasHabiles.length > 0 ? diasHabiles : profesional.availableDays,
        id: profesional.id,
        rating: profesional.rating,
        reputation: profesional.reputation,
    }
    // console.log(newProfessional, "newProfessional")



    const week = [
        { id: "1", name: "lunes" },
        { id: "2", name: "martes" },
        { id: "3", name: "miercoles" },
        { id: "4", name: "jueves" },
        { id: "5", name: "viernes" },
        { id: "6", name: "sabado" },
    ]
    

    useEffect(() => {
        
    }, [dispatch, newProfessional])

    //Buscar por ID
    function handleInputChange(e) {
        e.preventDefault(e)
        setId(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getDetail(id))
        dispatch(getProfessions())
    }
    
    //Cambiar Nombre
    function handleFirstName(e) {
        e.preventDefault(e)
        if(e.target.value !== ""){
            setFirstName(e.target.value)
        }
    }
    const handleChangeFirstName = (e) => {
        e.preventDefault();
        if(e.target.value !== ""){
            newProfessional.firstName = firstName
        }
    }
    
    //Cambiar Apellido
    function handleLastName(e) {
        e.preventDefault(e)
        if(e.target.value !== ""){
            setLastName(e.target.value)
        }
    }
    const handleChangeLastName = (e) => {
        e.preventDefault(e);
        if(e.target.value !== ""){
            newProfessional.lastName = lastName
        }
    }

    //Cambiar Email
    function handleEmail(e) {
        e.preventDefault(e)
        if(e.target.value !== ""){
            setEmail(e.target.value)
        }
    }
    const handleChangeEmail = (e) => {
        e.preventDefault();
        if(e.target.value !== ""){
            newProfessional.email = email
        }
    }

    //Cambiar Address
    function handleAddress(e) {
        e.preventDefault(e)
        if(e.target.value !== ""){
            setAddress(e.target.value)
        }
    }
    const handleChangeAddress = (e) => {
        e.preventDefault();
        if(e.target.value !== ""){
            newProfessional.address = address
        }
    }

    //Cambiar phoneNumber
    function handlePhoneNumber(e) {
        e.preventDefault(e)
        if(e.target.value !== ""){
            setPhoneNumber(e.target.value)
        }
    }
    const handleChangePhoneNumber = (e) => {
        e.preventDefault()
        if(e.target.value !== ""){
            newProfessional.phoneNumber = phoneNumber
        }
    }

    //Cambiar phoneNumber
    function handleProfileImg(e) {
        e.preventDefault(e)
        if(e.target.value !== ""){
            setProfileImg(e.target.value)
        }
    }
    const handleChangeProfileImg = (e) => {
        e.preventDefault()
        if(e.target.value !== ""){
            newProfessional.profileImg = profileImg
        }
    }
    

    //Agregar dias
    const addDays = ( dia ) => {
        if(!newProfessional.availableDays.includes(dia)) {
            setAvailableDays([...newProfessional.availableDays, dia])
        }
    }

    //Eliminar Dias
    const deleteDay = (dia) => {
        let updatedList
        newProfessional.availableDays.map((day) => {
            if (day.toString() === dia.toString()) {
                updatedList = newProfessional.availableDays.filter((d) => d !== day)
            }
        })
        setAvailableDays(updatedList)
    }

    //Agregar Profesiones
    const addProfession = (nameProfesion) => {

        if(!newProfessional.professions.includes(nameProfesion)) {
            setprofesionesS([...newProfessional.professions, nameProfesion])
        }
    }

    //Eliminar Profesiones
    const deleteProfession = (name) => {
        let updatedList

        if(newProfessional.professions.includes(name)) {
            newProfessional.professions.map((profesion) => {
                if (profesion === name) {
                    updatedList = newProfessional.professions.filter((d) => d !== name)
                    setprofesionesS(updatedList)
                }
            })
        }
    }

    //Enviar profesional modificado 
    function handleInputChangeProfesional (e, id, newProfessional) {
        e.preventDefault(e)
        setShow(true)
        console.log(newProfessional, "nuevo profesional availableDays")

        dispatch(putDetail(id, newProfessional))
    }

    //style

    return (
        <div style={{ paddingBottom: "100px"}}>
            <h1 style={{ display: "flex", justifyContent: "center"}}>Editar Profesional</h1>

            <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "20%"}}>
               <Form style={{ display: "flex", height:'2.5rem' }} size="sm">
                    <Form.Control
                        type="search"
                        placeholder="Buscar..."
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => handleInputChange(e)}
                    />
                    <Button
                        type="submit"
                        variant="outline-primary"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Buscar
                    </Button>
                </Form>
            </div>
            
            {
                JSON.stringify(profesional) !=='{}' ? 
                <div style={{ display: "flex", justifyContent: "center"}}>

                <Form style={{ width: "60%", border: "1"}}>

                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginTop: "30px"}}>
                        
                        <Form.Label style={{border: "3px solid blue", borderRadius: "2%", boxShadow: "0 0 10px #000", padding: "2%"}}>
                            
                            <h5>ID Cliente : {profesional.id}</h5>
                            
                        </Form.Label>
                        
                    </Form.Group>
                <div style={{border: "3px solid blue", borderRadius: "2%", boxShadow: "0 0 10px #000", padding: "2%"}}>
                    <Form.Group className="mb-3" style={{ display: "flex"}}>
                        <Form.Group style={{ width: "50%", marginRight: "20px"}}>
                            <Form.Label>Nombre :</Form.Label>
                            <Form.Control placeholder={`${profesional.firstName}`} onChange={(e) => handleFirstName(e)} />
                            <Button
                                style={{margin: "2%"}}
                                type="submit"
                                variant="outline-primary"
                                onClick={(e) => handleChangeFirstName(e)}
                            >
                                Cambiar
                            </Button>
                        </Form.Group>
                        <Form.Group style={{ width: "50%", marginLeft: "20px"}} >
                            <Form.Label>Apellido :</Form.Label>
                            <Form.Control placeholder={`${profesional.lastName}`} onChange={(e) => handleLastName(e)}/>
                            <Button
                                style={{margin: "2%"}}
                                type="submit"
                                variant="outline-primary"
                                onClick={(e) => handleChangeLastName(e)}
                            >
                                Cambiar
                            </Button>
                        </Form.Group>
                    </Form.Group>

                    <Form.Group className="mb-3" style={{ display: "flex"}}>
                        <Form.Group controlId="formBasicEmail" style={{ width: "50%", marginRight: "20px"}}>
                            <Form.Label>Email :</Form.Label>
                            <Form.Control type="email" placeholder={`${profesional.email}`} onChange={(e) => handleEmail(e)} />
                            <Button
                                style={{margin: "2%"}}
                                type="submit"
                                variant="outline-primary"
                                onClick={(e) => handleChangeEmail(e)}
                            >
                                Cambiar
                            </Button>
                        </Form.Group>
                        <Form.Group style={{ width: "50%", marginLeft: "20px"}}>
                            <Form.Label>Direccion :</Form.Label>
                            <Form.Control placeholder={`${profesional.address}`} onChange={(e) => handleAddress(e)} />
                            <Button
                                style={{margin: "2%"}}
                                type="submit"
                                variant="outline-primary"
                                onClick={(e) => handleChangeAddress(e)}
                            >
                                Cambiar
                            </Button>
                        </Form.Group>
                    </Form.Group>

                    <Form.Group className="mb-3" style={{ display: "flex"}}>
                        <Form.Group style={{ width: "50%", marginRight: "20px"}}>
                            <Form.Label>Numero de Telefono :</Form.Label>
                            <Form.Control type="number" placeholder={`${profesional.phoneNumber}`} onChange={(e) => handlePhoneNumber(e)} />
                            <Button
                                style={{margin: "2%"}}
                                type="submit"
                                variant="outline-primary"
                                onClick={(e) => handleChangePhoneNumber(e)}
                            >
                                Cambiar
                            </Button>
                        </Form.Group>
                        <Form.Group style={{ width: "50%", marginLeft: "20px"}}>
                            <Form.Label>Imagen del Profesional :</Form.Label>
                            <Form.Control type="text" placeholder={`${profesional.profileImg}`} onChange={(e) => handleProfileImg(e)} />
                            <Button
                                style={{margin: "2%"}}
                                type="submit"
                                variant="outline-primary"
                                onClick={(e) => handleChangeProfileImg(e)}
                            >
                                Cambiar
                            </Button>
                        </Form.Group>
                    </Form.Group>

                    <Form.Group className="mb-3" style={{ display: "flex"}}>
                        <Form.Group style={{ width: "50%", marginRight: "20px"}}>
                            <Form.Label>Dias Habiles :</Form.Label>
                            {
                                profesional.availableDays?.map((dia) => {
                                    return (
                                        <Badge 
                                        style={{margin: "2%"}}
                                            // style={{cursor: "pointer"}}
                                            >{dia}
                                        </Badge>
                                    )
                                })
                            }
                            <br/>
                            {
                                newProfessional.availableDays?.map((day) => {
                                    return (
                                        <Badge 
                                            style={{cursor: "pointer", margin: "2%"}} 
                                            onClick={() => deleteDay(day)}
                                            >{day}
                                        </Badge>
                                    )
                                })
                            }
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Selecciona los dias 
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {
                                        week.map((day) => {
                                        return (<Dropdown.Item onClick={() => addDays(day.name)}>{day.name}</Dropdown.Item>)
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                        <Form.Group style={{ width: "50%", marginLeft: "20px"}}>
                            <Form.Label>Profesiones :</Form.Label>
                            {
                                profesional.professions?.map((profesion) => {
                                    return (
                                        <Badge 
                                        style={{margin: "2%"}}
                                            >{profesion.name}
                                        </Badge>
                                    )
                                })
                            }
                            <br/>
                            {
                                newProfessional.professions?.map((profesion) => {
                                    return (
                                        <Badge 
                                            style={{cursor: "pointer", margin: "2%"}} 
                                            onClick={() => deleteProfession(profesion)}
                                            >{profesion}
                                        </Badge>
                                    )
                                })
                            }
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Selecciona las profesiones
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {
                                        profesiones.map((profesion, index) => {
                                        return (<Dropdown.Item 
                                            key={`profesion${index}`}
                                            onClick={() => addProfession(profesion)}
                                            >{profesion}</Dropdown.Item>)
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                    </Form.Group>

                    <br/>
                    
                    <Button variant="primary" 
                            type="submit" 
                            style={{ display: "flex", justifyContent: "center"}} 
                            onClick={(e) => handleInputChangeProfesional(e, newProfessional.id, newProfessional)}
                            >
                        Finalizar Cambios
                    </Button>
                    </div>
                    {
                        show ? 
                        <Alert show={show} variant="success" style={{marginTop: "50px"}}>
                            <Alert.Heading>Profesional modificado con exito !</Alert.Heading>
                            <ul>
                                <li>Nombre : {newProfessional.firstName}</li>
                                <li>Apellido : {newProfessional.lastName}</li>
                                <li>Apellido : {newProfessional.address}</li>
                                <li>email : {newProfessional.email}</li>
                                <li>phoneNumber : {newProfessional.phoneNumber}</li>
                                <li>profileImg : {newProfessional.profileImg}</li>
                                <ul>
                                   * Profesiones :
                                {
                                    newProfessional.professions?.map((p) => <li>{p}</li>)
                                }
                                </ul>
                                <ul>
                                   * Dias habiles :
                                {
                                    newProfessional.availableDays?.map((p) => <li>{p}</li>)
                                }
                                </ul>

                            </ul>
                            <hr />
                            <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                                Cerrar
                            </Button>
                            </div>
                        </Alert> 
                        :
                        <></>
                    }
                </Form>
            </div>
            :
            <div style={{ display: "flex", justifyContent: "center", marginTop: "50px"}}>
                <Alert key="primary" variant="primary" style={{width: "50%", display: "flex", justifyContent: "center"}}>
                    Busca un cliente en la base de datos por su id.
                </Alert>
            </div>
            }
        </div>
    )
}