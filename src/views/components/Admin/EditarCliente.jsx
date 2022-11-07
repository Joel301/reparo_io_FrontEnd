
//React
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

//Redux
import { getClient } from '../../../state/ducks/admins/actions'


//Bootstrap
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import Alert from 'react-bootstrap/Alert'
import { useSelector } from 'react-redux'



export default function EditarCliente () {

    const cliente = useSelector((state) => state.admins.clients)
    console.log(cliente, "cliente")

    const dispatch = useDispatch()
    
    const [id, setId] = useState("")

    function handleInputChange(e) {
        e.preventDefault(e)
        setId(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getClient(id))
    }

    return (
        <div style={{ paddingBottom: "100px"}}>
            <h1 style={{ display: "flex", justifyContent: "center"}}>Editar Cliente</h1>

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
                cliente !== {} ? 
                <div style={{ display: "flex", justifyContent: "center"}}>

                <Form style={{ width: "60%", border: "1"}}>

                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginTop: "30px"}}>
                        <Form.Label>
                            <h5>ID Cliente : {cliente.id}</h5>
                        </Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3" style={{ display: "flex"}}>
                        <Form.Group style={{ width: "50%", marginRight: "20px"}}>
                            <Form.Label>Nombre :</Form.Label>
                            <Form.Control placeholder={`${cliente.firstName}`} />
                        </Form.Group>
                        <Form.Group style={{ width: "50%", marginLeft: "20px"}} >
                            <Form.Label>Apellido :</Form.Label>
                            <Form.Control placeholder={`${cliente.lastName}`} />
                        </Form.Group>
                    </Form.Group>

                    <Form.Group className="mb-3" style={{ display: "flex"}}>
                        <Form.Group controlId="formBasicEmail" style={{ width: "50%", marginRight: "20px"}}>
                            <Form.Label>Email :</Form.Label>
                            <Form.Control type="email" placeholder={`${cliente.email}`} />
                        </Form.Group>
                        <Form.Group style={{ width: "50%", marginLeft: "20px"}}>
                            <Form.Label>Direccion :</Form.Label>
                            <Form.Control placeholder={`${cliente.address}`} />
                        </Form.Group>
                    </Form.Group>

                    <Form.Group className="mb-3" style={{ display: "flex"}}>
                        <Form.Group style={{ width: "50%", marginRight: "20px"}}>
                            <Form.Label>Numero de Telefono :</Form.Label>
                            <Form.Control type="number" placeholder={`${cliente.phoneNumber}`} />
                        </Form.Group>
                        <Form.Group style={{ width: "50%", marginLeft: "20px"}}>
                            <Form.Label>Imagen del Contacto :</Form.Label>
                            <Form.Control type="text" placeholder={`${cliente.profileImg}`} />
                        </Form.Group>
                    </Form.Group>

                    <Form.Group className="mb-3" style={{ display: "flex"}}>
                        <Form.Group controlId="formBasicPassword" style={{ width: "50%", marginRight: "20px"}}>
                            <Form.Label>Contraseña :</Form.Label>
                            <Form.Control type="password" placeholder={`${cliente.password}`} />
                        </Form.Group>
                        <Form.Group  style={{ width: "50%", marginLeft: "20px"}}>
                            <Form.Label>Confirmar Contraseña :</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña..." />
                        </Form.Group>
                    </Form.Group>

                    <ToggleButtonGroup type="radio" name="options" defaultValue={cliente.enabled? 1 : 2} style={{ display: "flex", justifyContent: "space-evenly"}}>
                        <ToggleButton id="tbg-radio-1" value={1} >
                            Habilitado
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-2" value={2} >
                            Deshabilitado
                        </ToggleButton>
                    </ToggleButtonGroup>

                    <br/>
                    
                    <Button variant="primary" type="submit" style={{ display: "flex", justifyContent: "center"}}>
                        Finalizar Cambios
                    </Button>
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