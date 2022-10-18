
//React
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

//Redux
import { getDetail } from "../../state/ducks/professionals/actions"

//CSS Styles
import "./Detail.css"

//Bootstrap
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function Detail () {

    const { id } = useParams()

    const detail = useSelector((state) => state.detail)

    const dispatch = useDispatch()

    useEffect(() => {   
        dispatch(getDetail(id))
    }, [])


    return (

        <> 
            <div className='cardDetail'>
                <div>
                    <img
                        src={detail.profileImg}
                        style={{ width: "20%", marginLeft: "10%", marginBottom: "20px", marginTop: "30px" , border: "1px solid grey", borderRadius: "50%"}}
                    />
                    <div className="titleCard">
                        
                            <h3 style={{textTransform: "uppercase"}} >{detail.lastName} {detail.firstName} </h3>
                            <h4>Reviews: {detail.review}</h4>
                            <div style={{display: "flex",textTransform: "capitalize" , textAlign: "center", fontWeight: "400", justifyContent: "space-around"}}>

                            {
                            detail.professions.map((prof) => {
                                    return <p> {prof.name} </p>
                                
                            })
                            }
                            </div>
                    </div>
                </div>
                <Card style={{ width: '80%', marginLeft: "10%", fontWeight: "500"}}>
                    <Card.Body>
                        <Card.Text>Email: {detail.email}</Card.Text>
                        <Card.Text>Direccion: {detail.address}</Card.Text>
                        <Card.Text>Telefono: {detail.phoneNumber}</Card.Text>
                        
                    </Card.Body>
                </Card>
                <Button  variant="primary" className="btn-reserv">Reservar</Button>
            </div>
        </>
    )
}