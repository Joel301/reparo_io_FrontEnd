import React from 'react'
import { Container, Row,Col, Navbar } from 'react-bootstrap'
import CardFormat from './CardFormat';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllProfessionals } from '../../../state/ducks/professionals/actions';
import SearchBar from './SearchBar';



function CardsList() {
  const profesionales = useSelector((state) => (state.allProfessionals))
  const dispatch = useDispatch(); 


  useEffect(()=>{
    dispatch(getAllProfessionals())
},[dispatch])


 

  return (

    <Container style={{width:'100%', justifyContent: "center", display: "flex", flexDirection: "column"}}>
      <SearchBar/>
        <Row style={{margin: "10px"}} xs={1} md={3} lg={4} className="g-4" >
        {profesionales?.map((e)=>{
            return (<Col key={e.id}style={{display:'flex',justifyContent:'center'}}><CardFormat worker ={e} key={e.id}/></Col>)
        })}</Row>
    </Container>
  )
}

export default CardsList