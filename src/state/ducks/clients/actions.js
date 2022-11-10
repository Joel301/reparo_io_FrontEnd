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
            const getClient = await axios.get(`/home/clients/${id}`).then(res=>res.data)
            
            
            return dispatch({
                type: 'GET_CLIENT',
                payload: getClient
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getClients(){
    return async function(dispatch){
        try {
            const allClients = await axios.get("/home/clients")
            console.log(allClients)
            return dispatch({
                type: "GET_CLIENTS",
                payload: allClients.data
            })
        } catch (error) {
            console.log(error)
        }

    }
}
