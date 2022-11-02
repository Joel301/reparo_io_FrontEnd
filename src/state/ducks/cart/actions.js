import axios from "axios";

  export function addToCart (worker){
    console.log(worker)
    return async function(dispatch){
        try {
            const itemDeCompra = {
                professional:worker,
                days:[],
                get quantity(){
                    return this.days.length
                },
              
            }
            const response = await axios.post("https://reparoiobackend-main.up.railway.app/api/cart", {
                clientId:"5b18ccd4-7342-457a-93a7-0814974967a6",
                professionalId: worker.id,
                days: worker.availableDays,
            })
            itemDeCompra.idDb = response.data.newCartDetail.id;
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
            await axios.delete(`https://reparoiobackend-main.up.railway.app/api/cart/${item.idDb}`)
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
    console.log(body)
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
            await axios.get('http://localhost:3001/home/mercado', body)
            } catch (error) {
            console.log(error)
        }
    }
}