import React from "react";
import { useState } from "react";



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

    return(
        //luego renderizo el arreglo de pageNum recorriendolos con un map y renderizando cada numero con un link y pasandole a cada numero un onClick para ir llevandolo al pagNumber correspondiente
        <nav>
            <ul>
                <a onClick={e => handlePrevious(e)}>Previouos Page</a>
                {
                    pageNum && pageNum.map(number => (
                        <li>
                            <a onClick={()=> paginado(number)}>{number}</a>
                        </li>
                    )
                    )
                }
                <a onClick={e=> handleNextPage(e)}>Next Page</a>
            </ul>
        </nav>
    )
}