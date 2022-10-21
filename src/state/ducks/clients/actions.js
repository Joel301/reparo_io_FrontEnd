import axios from "axios";


export function postProfessionals(payload){
    return async function(dispatch){
        try {
            const postProfessionals = await axios.post('/home/client', payload)
            return dispatch({
                type: 'POST_CLIENT',
                postProfessionals
            })
        } catch (error) {
            console.log(error)
        }
    }
}






