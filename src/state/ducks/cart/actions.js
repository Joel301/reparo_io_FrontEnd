import axios from "axios";

  export function addToCart (worker, client){
    console.log(worker, "Soy workeeer")
    return async function(dispatch){
        try {
            const itemDeCompra = {
                professional:worker,
                client: client.id,
                days:[],
                get quantity(){
                    return this.days.length
                },
              
            }
            
            console.log(itemDeCompra.idDb, "itemdeCompra")
            return dispatch({
                type:'ADD_TO_CART',
                payload: itemDeCompra
            })


        } catch (error) {
            console.log(error)
        }
    }
  }

export function deleteItemCart(item){
    return async function (dispatch){
        try {
            axios.delete(`https://reparoiobackend-main.up.railway.app/api/cart/${item.idDb}`)
            return dispatch({
                type:"DELETE_ITEM_CART",
                payload: item.professional.id
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function addDayToProf(id,day){
    return async function(dispatch){
        try {
            return dispatch({
                type:'ADD_DAY_TO_PROF',
                payload:{
                    id,
                    day
                }
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}

export function removeDayFromProf(id,day){
return async function (dispatch){
    try {
        return dispatch({
            type:'REMOVE_DAY_FROM_PROF',
            payload:{
                id,
                day
            }
        })         
    } catch (error) {
        console.log(error);
    }
}

}


export function postCart(body){
    console.log(body, "soy el body y se esta enviando")
    return async function(dispatch){
        try {
            const postCarrito = await axios.post('https://reparoiobackend-main.up.railway.app/api/orders', body)
            return dispatch({
                type: 'POST_CART',
                payload: body
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}


export function marcadoPago(body) {
    return async function (dispatch) {
        try {
            await axios.post('http://localhost:3001/home/mercado', body)
            } catch (error) {
            console.log(error)
        }
    }
}

export function postingCart(cartList){
    return async function(dispatch){
       try {
        const addCartList = cartList.map( async  (el) => {
            const response = await axios.post("https://reparoiobackend-main.up.railway.app/api/cart", {
                clientId:"5b18ccd4-7342-457a-93a7-0814974967a6", //el.client
                professionalId: el.professional.id,
                days: el.days
            })
            el.idDb = response.data.newCartDetail.id;
            return el
        })
        return dispatch({
            type: "POSTING_CART",
            payload: Promise.all(addCartList)
        })
       } catch (error) {
           console.log(error)
       }
    }
}



