import React from "react";

import { Card,Button } from "react-bootstrap";

function CardFormat({worker}) {
    // let profToString =worker.professions?.map((e)=>e.name)
  return (
    <Card bg="light" style={{ width: '18rem',height:'22rem' }}>
      <Card.Img variant="top" src={worker.img} style={{maxHeight:"10rem"}} />
      <Card.Body >
        <Card.Title>{`${worker.firstName} ${worker.lastName}`}</Card.Title>
      
      <Card.Text>
        { 
                    // profToString.join(', ')
        }
      </Card.Text>
      <Card.Subtitle>
         Reputacion: {worker.reputation}
      </Card.Subtitle>
      
      </Card.Body><Card.Footer style={{display:"flex",
      gap:"2rem",justifyContent:'center'}}>
      <Button>
        Reservan 
      </Button>
      <Button bg='primary'>Ver Mas...</Button>
      </Card.Footer>
    </Card>
  )
}

export default CardFormat