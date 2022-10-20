import React from "react";
import { Pagination } from "react-bootstrap";




//declaro el paginado y me traigo las props que necesito del home
export default function Paginado({professionalsPerPage, profesionales, paginado, currentPage}){
    //creo una constante pageNum que va a ser un arreglo vacio
    const pageNum = [];
    
    //creo un ciclo for en el cual voy a pushear al arreglo el valor que va a resultar del redondeo de todos los recipientes sobre la cantidad de recipientes que quiero por pagina 
    for(let i = 1 ; i<= Math.ceil(profesionales/professionalsPerPage); i++){
        pageNum.push(i)
    }

    function handlePrevious(){
        if(currentPage > 1){
          paginado(currentPage - 1)
        }
    }

    function handleNextPage(){
        if(currentPage < pageNum.length){
            paginado(currentPage + 1)
        }
    }

    //pusheado

    return(
        <Pagination style={{display:'flex',justifyContent:'center'}}>
            
                <Pagination.Prev onClick={e => handlePrevious(e)}/>
                {
                    pageNum && pageNum.map(number => (
                        
                            <Pagination.Item key={number} active={number === currentPage? true: false} onClick={()=> paginado(number)}>{number}</Pagination.Item>
                        
                    )
                    )
                }
                <Pagination.Next onClick={e=> handleNextPage(e)}/>
            
        </Pagination>
    )
}