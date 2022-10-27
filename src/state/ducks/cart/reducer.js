const initialState ={
    list:[],
    
}
export default function cartReducer (state=initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':{
          
                    return {
                        ...state,
                        list: [...state.list, action.payload]
                    }
}
        case 'DELETE_ITEM_CART':{
                    let updatedList = state.list.filter((item)=>item.professional.id !== action.payload)
                    return {
                        ...state,
                        list:[...updatedList]
                    }}

        case 'ADD_DAY_TO_PROF':{
            console.log(action.payload)
            let updatedList = state.list.map((item)=>{
                if( item.professional.id === action.payload.id){
                    item.days.push(action.payload.day)
                }
                 return item
                })
                console.log('Updated List :',updatedList)

            return {
                ...state,
                list:[...updatedList]
            }}
            
            // const itemDeCompra = {
            //     professional: worker,
            //     days:[],
            //     quantity:()=>{
            //         return this.days.length
            //     },
            case 'REMOVE_DAY_FROM_PROF':{

                let updatedList = state.list.map((item)=>{
                    if( item.professional.id === action.payload.id){
                       item.days =  item.days.filter((day)=>day!==action.payload.day)
                    }
                return item})
                     return {
                        ...state,
                        list:[...updatedList]
                    }
            }
              
        default:return state
    }
}

