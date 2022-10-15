import axios from "axios";


export function getAllProfessionals(){
    return async function(dispatch){
        try {
            const getAll = await axios.get('https://reparoiobackend-develop.up.railway.app/home?search=')
            console.log(getAll)
            return dispatch({
                type: 'GET_ALL_PROFESSIONALS',
                payload: getAll.data
            }) 
        } catch (error) {
            console.log(error)
        }
    }
}

export function getProfesional(payload){
    return async function(dispatch){
        try {
            const prof = await axios.get(`https://reparoiobackend-develop.up.railway.app/home?search=${payload}`)
            console.log(prof)
            return dispatch({
                type: 'GET_PROFESSIONALS',
                payload: prof.data
            })
        } catch (error) {
            console.log(error)
        }
    }

}
