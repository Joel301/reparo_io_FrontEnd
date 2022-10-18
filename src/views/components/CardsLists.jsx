import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import CardFormat from './CardFormat';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllProfessionals, orderByName ,getProfessionsOfProfessionals, getOrderReputation } from '../../state/ducks/professionals/actions';
import SearchBar from './SearchBar';
import Paginado from './Paginado';
import FormProfession from './Formularios/FormProfession';




function CardsList() {
  const profesionales = useSelector((state) => (state.allProfessionals))
  const profesiones = useSelector(state => (state.professions)) 
  const dispatch = useDispatch(); 

     const [orden, setOrden] = useState('')

     const [currentPage, setCurrentPage] = useState(1);
   
     const professionalsPerPage = 3;
    
     const indexOfLastProfessional = currentPage * professionalsPerPage;
    
     const indexOfFirstProfessional = indexOfLastProfessional - professionalsPerPage;
   
     const currentProfessionals = profesionales.slice(indexOfFirstProfessional , indexOfLastProfessional)

     const paginado = (pageNum) => {
         setCurrentPage(pageNum)
     }

     function handleOrderByName(e){
      e.preventDefault();
      dispatch(orderByName(e.target.value));
      setCurrentPage(1);
      setOrden(`Ordenado ${e.target.value}`)
     }

     function handleFilterByProfession(e){
      e.preventDefault();
      dispatch(getProfessionsOfProfessionals(e.target.value));
      
     }

     function handleOrderReputation(e){
      e.preventDefault();
      dispatch(getOrderReputation(e.target.value))
      setOrden(`Ordenado ${e.target.value}`)
     }
  
  useEffect(()=>{
    dispatch(getAllProfessionals())
},[dispatch])
  

  return (
    <Container style={{width:'100%', justifyContent: "center", display: "flex", flexDirection: "column"}}>
        <FormProfession />
        <SearchBar/>
        <Paginado 
        professionalsPerPage={professionalsPerPage}
        profesionales ={profesionales.length}
        paginado ={paginado}
        currentPage={currentPage}
        />
        <select onClick={e => handleOrderByName(e)}>
          <option value="asc">Ascending By Name</option>
          <option value="desc">Descending</option>
        </select>

        <select onClick={e => handleOrderReputation(e)}>
          <option value="asc">Ascending By Reputation</option>
          <option value="desc">Descending By Reputation</option>
        </select>


        <select onChange={e => handleFilterByProfession(e)}>
          <option value="all">All</option>
          <option value="electricista">Electricista</option>
          <option value="jardinero">Jardinero</option>
          <option value="cerrajero">Cerrajero</option>
          <option value="aire acondicionado">Aire Acondicionado</option>
          <option value="plomero">Plomero</option>
          <option value="carpintero">Carpintero</option>
          <option value="pintor">Pintor</option>
          <option value="técnico PC">Tecnico PC</option>
          <option value="mecánico">Mecanico</option>
          <option value="gasista">Gasista</option>
          <option value="albañil">Albañil</option>
          <option value="herrero">Herrero</option>
        </select>
        <Row style={{margin: "10px"}} xs={1} md={3} lg={4} className="g-4" >
        {currentProfessionals?.map((e)=>{
            return (<Col key={e.id}style={{display:'flex',justifyContent:'center'}}><CardFormat worker ={e} key={e.id}/></Col>)
        })}</Row>
    </Container>
  )
}

export default CardsList