const initialState ={
    list:[],
    total: 0,
    showCart:false
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
            
            let updatedList = state.list.map((item)=>{
                if( item.professional.id === action.payload.id && !item.days.includes(action.payload.day)){
                    item.days.push(action.payload.day)
                }
                return item
            })

            return {
                ...state,
                list:[...updatedList]
            }}
        
        case 'DELETE_DAY_TO_PROF': {

            let updatedList = state.list.map((item)=>{
                if( item.professional.id === action.payload.id){
                    item.days = item.days.filter((day) => (day !== action.payload.day))
                }
                return item
            })

            return {
                ...state,
                list:[...updatedList]
            }
        }
        
            
            // const itemDeCompra = {
            //     professional: worker,
            //     days:[],
            //     quantity:()=>{
            //         return this.days.length
            //     },
              
        default:return state
    }
}

