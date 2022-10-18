import axios from "axios";


export function getProfessions(){
    return async function(dispatch){
        try {
            const getAll = await axios.get('https://reparoiobackend-develop.up.railway.app/home/professions')
            console.log(getAll.data, "get dataa professions")
            return dispatch({
                type: 'GET_ALL_PROFESSIONS',
                payload: getAll.data
            }) 
        } catch (error) {
            console.log(error)
        }
    }
}




