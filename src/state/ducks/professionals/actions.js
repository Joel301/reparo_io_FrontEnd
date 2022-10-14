import axios from "axios";


export function getAllProfessionals(){
    return async function(dispatch){
        try {
            const getAll = await axios.get('http://localhost:3001/home')
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
            const prof = await axios.get(`http://localhost:3001/home?search=${payload}`)
            return dispatch({
                type: 'GET_PROFESSIONALS',
                payload: prof.data
            })
        } catch (error) {
            console.log(error)
        }
    }

}
