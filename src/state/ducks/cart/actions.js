
  export function addToCart (worker){
    return async function(dispatch){
        try {
            const itemDeCompra = {
                professional:worker,
                days:[],
                quantity:()=>{
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

export function addDaysToProf(id,day){
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
