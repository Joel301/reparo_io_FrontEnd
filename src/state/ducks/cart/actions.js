import axios from "axios";

  export function addToCart (worker){
    return async function(dispatch){
        try {
            const itemDeCompra = {
                professional:worker,
                days:[],
                get quantity(){
                    return this.days.length
                },
              
            }
            return dispatch({
                type:'ADD_TO_CART',
                payload: itemDeCompra
            })


        } catch (error) {
            console.log(error)
        }
    }
  }

export function deleteItemCart(id){
    return async function (dispatch){
        try {
            return dispatch({
                type:"DELETE_ITEM_CART",
                payload:id
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

export function postCart(clientId, professionalId, days){
    return async function(dispatch){
        try {
            const postCarrito = await axios.post('https://reparoiobackend-main.up.railway.app/api/cart'+ clientId + professionalId + days)
            return dispatch({
                type: 'POST_CART',
                payload: postCarrito
            })
        } catch (error) {
            console.log(error)
        }
    }
}
