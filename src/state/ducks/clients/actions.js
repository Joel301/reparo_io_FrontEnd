import axios from "axios";


export function postClient(payload){
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

export function getClientId(id){
    return async function(dispatch){
        try {
            const getClient = await axios.get(`https://reparoiobackend-develop.up.railway.app/home/clients/${id}`)
            console.log(getClient)
            return dispatch({
                type: 'GET_CLIENT',
                payload: getClient.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
