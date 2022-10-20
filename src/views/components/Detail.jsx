
//React
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

//Redux
import { getDetail } from "../../state/ducks/detail/actions"

//CSS Styles
import "./Detail.css"

//Bootstrap
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Figure from 'react-bootstrap/Figure'

export default function Detail () {

    const { id } = useParams()

    const detalle = useSelector((state) => state.detail)
    console.log(detalle)

    const dispatch = useDispatch()

    useEffect(() => {   
        dispatch(getDetail(id))
    }, [])


    return (

        <> 
        {
            detalle ?
           
            <div className='cardDetail'>
                <div>
                <Figure>
                    <Figure.Image
                    style={{margin: "50px"}}
                        width={200}
                        height={200}
                        alt="171x180"
                        src={detalle.profileImg}
                    />
                </Figure>
                    <div className="titleCard">
                        
                            <h3 style={{textTransform: "uppercase"}} >{detalle.lastName} {detalle.firstName} </h3>
                            <h4>Reviews: {detalle.review}</h4>
                            <div style={{display: "flex",textTransform: "capitalize" , textAlign: "center", fontWeight: "400", justifyContent: "space-around"}}>

                            {
                                detalle.professions?.map((prof) => {
                                        return <p> {prof.name} </p>
                                    
                                })
                            }
                            </div>
                    </div>
                </div>
                <Card style={{ width: '80%', marginLeft: "10%", fontWeight: "500"}}>
                    <Card.Body>
                        <Card.Text>Email: {detalle.email}</Card.Text>
                        <Card.Text>Direccion: {detalle.address}</Card.Text>
                        <Card.Text>Telefono: {detalle.phoneNumber}</Card.Text>
                        
                    </Card.Body>
                </Card>
                <Button  variant="primary" className="btn-reserv">Reservar</Button>
            </div>
              :

             <>
             <h1>404 not found</h1>
             </>

            }
         </>
    )
}