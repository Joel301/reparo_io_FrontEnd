import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import CardFormat from './CardFormat';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllProfessionals } from '../../../state/ducks/professionals/actions';
import SearchBar from './SearchBar';
import Paginado from './Paginado';




function CardsList() {
  const profesionales = useSelector((state) => (state.allProfessionals))
  const dispatch = useDispatch(); 
    
     const [currentPage, setCurrentPage] = useState(1);
   
     const professionalsPerPage = 8;
    
     const indexOfLastProfessional = currentPage * professionalsPerPage;
    
     const indexOfFirstProfessional = indexOfLastProfessional - professionalsPerPage;
   
     const currentProfessionals = profesionales.slice(indexOfFirstProfessional , indexOfLastProfessional)

     const paginado = (pageNum) => {
         setCurrentPage(pageNum)
     }
  
  <Paginado 
  professionalsPerPage={professionalsPerPage}
  profesionales ={profesionales.length}
  paginado ={paginado}
  currentPage={currentPage}
  />
  
  useEffect(()=>{
    dispatch(getAllProfessionals())
},[dispatch])
  

  return (
    <Container style={{width:'100%', justifyContent: "center", display: "flex", flexDirection: "column"}}>
      <SearchBar/>
        <Row style={{margin: "10px"}} xs={1} md={3} lg={4} className="g-4" >
        {currentProfessionals?.map((e)=>{
            return (<Col key={e.id}style={{display:'flex',justifyContent:'center'}}><CardFormat worker ={e} key={e.id}/></Col>)
        })}</Row>
    </Container>
  )
}

export default CardsList