import React, { useEffect } from 'react'
import { Container, Row, Col, Dropdown, Alert, Badge, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {  useState } from 'react'
import {  orderByName , getOrderReputation, filterByProfession, getAllProfessionals } from '../../state/ducks/professionals/actions';

//Componentes
import CardFormat from './CardFormat'
import SearchBar from './SearchBar'
import Paginado from './Paginado'
import { useParams } from 'react-router-dom';


function CardsList() {
  const {prof} = useParams()
  const profesionales = useSelector((state) => (state.professionals.professionalsFiltered))
  
  const professions = useSelector((state)=>(state.professionals.professions))
  
  const dispatch = useDispatch(); 

  const [orden, setOrden] = useState('')

  const [currentPage, setCurrentPage] = useState(1);

  const [filterByProf, setFilterByProf] = useState([]);
  
  const professionalsPerPage = 8;
    
  const indexOfLastProfessional = currentPage * professionalsPerPage;
    
  const indexOfFirstProfessional = indexOfLastProfessional - professionalsPerPage;
   
  const currentProfessionals = profesionales.slice(indexOfFirstProfessional , indexOfLastProfessional)

 

  const professionFilterHandleOnChange = (e) => {
   setCurrentPage(1)
  
   if(e.target.innerText === 'All'){return setFilterByProf([])}
   if(!filterByProf.includes(e.target.innerText)){
  setFilterByProf([...filterByProf,e.target.innerText])}
    console.log(filterByProf);
   
  }
    
  const deleteFilter = (prof)=>{
    let arr = filterByProf.filter(e =>e !== prof)
    setFilterByProf(arr)
  }
  const paginado = (pageNum) => {
      setCurrentPage(pageNum)
  }

  function handleOrderByName(e){
   e.preventDefault();
   dispatch(orderByName(e.target.innerText));
   setCurrentPage(1);
   setOrden(`Ordenado ${e.target.innerText}`)
  }

  function handleOrderReputation(e){
   e.preventDefault();
   dispatch(getOrderReputation(e.target.innerText))
   setOrden(`Ordenado ${e.target.innerText}`)
  }
  useEffect(()=>{
    dispatch(filterByProfession(filterByProf))
    
  },[filterByProf])

  return (
    <Container style={{width:'100%', justifyContent: "center", display: "flex", flexDirection: "column",height:'max-content',alignItems:'center'}}>
       <Container expand='md'style={{display:'flex',alignItems:'end'}}>
        
        <Dropdown style={{height:'2.5rem'}} >
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Profesion
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={e => professionFilterHandleOnChange(e)}>All</Dropdown.Item>
          {
            professions.map((prof)=>{
              return (<Dropdown.Item key={prof.id} onClick={e => professionFilterHandleOnChange(e)}>{prof.name}</Dropdown.Item>)
            })
          }
        </Dropdown.Menu>
        </Dropdown>

        <Dropdown style={{height:'2.5rem'}}>
          <Dropdown.Toggle>
            Orden por Nombre
          </Dropdown.Toggle>
          <Dropdown.Menu>
          <Dropdown.Item onClick={e => handleOrderByName(e)}>asc</Dropdown.Item>
          <Dropdown.Item onClick={e => handleOrderByName(e)}>desc</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown style={{height:'2.5rem'}}>
          <Dropdown.Toggle>
            Orden por Reputa
          </Dropdown.Toggle>
          <Dropdown.Menu>
          <Dropdown.Item onClick={e => handleOrderReputation(e)}>asc</Dropdown.Item>
          <Dropdown.Item onClick={e => handleOrderReputation(e)}>desc</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <SearchBar/>
      </Container>
     { filterByProf.length>0?(<div style={{display:'flex',width:'80%',height:'2rem',backgroundColor:'lightgray',borderRadius:'0.5rem',marginTop:'3px',gap:'2px',alignItems:"center",padding:'2px'}}>
          {filterByProf.map((e)=>{
            return <Badge onClick={()=>deleteFilter(e)} style={{height:'fit-content',cursor:'pointer'}}>{e}</Badge>
          })}
      </div>):null}

       { currentProfessionals.length > 0 ?
        ( <Row style={{margin: "5%",marginTop:'0.5%'}} xs={1} md={3} lg={4} className="g-4" >

        {currentProfessionals?.map((e)=>{
            return (<Col key={e.id}style={{display:'flex',justifyContent:'center'}}><CardFormat worker ={e} key={e.id}/></Col>)
        })}
        </Row>)
        :
        ( <Alert style={{margin:'5%',marginTop:'5%',textAlign:'center'}} variant="danger">
        <Alert.Heading>No se ha encontrado ningun Profesional</Alert.Heading>
        <p style={{paddingBottom:'9rem'}}>
          Puede ser que debido a tus opciones de filtrado y nuestra actual cantidad de profesionales no concuerden con dicha busqueda.
        </p>
        <hr />
        <p className="mb-0">
          Prueba  con otras opciones ;D
        </p>
      </Alert>)
      }

      { 
        profesionales.length > 8 ?

        <Paginado 
          professionalsPerPage={professionalsPerPage}
          profesionales ={profesionales.length}
          paginado ={paginado}
          currentPage={currentPage}
          style={{flex:'flex-end'}}
          /> : null
        }
    </Container>
  )
}

export default CardsList
