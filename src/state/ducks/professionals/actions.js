import axios from "axios";


export function filterByProfession(payload){
    return {
        type:'FILTER_BY_PROFESSION',
        payload:payload.toLowerCase()
    }
} 

export function filterByReputation(payload){
    return {
        type: 'FILTER_BY_REPUTATION',
        payload
    }
} 


export function getAllProfessionals() {
    return async function (dispatch) {
        try {
            const getAll = await axios.get('/home/professionals')


            return dispatch({
                type: 'GET_ALL_PROFESSIONALS',
                payload: getAll.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getProfesional(payload) {
    return async function (dispatch) {
        try {
            const prof = await axios.get(`/home?search=${payload}`)
            return dispatch({
                type: 'GET_PROFESSIONALS',
                payload: prof.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}


// export function getProfessionsOfProfessionals(payload) {
//     return {
//         type: 'GET_PRFESSIONS_OF_PROFESSIONALS',
//         payload
//     }
// }

export function getAllProfessions() {
    return async function (dispatch) {
        try {
            const allProfessions = await axios.get('/home/professions')
            return dispatch({
                type: 'GET_ALL_PROFESSIONS',
                payload: allProfessions.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postProfessionals(payload){
    return async function(dispatch){
        try {
            const postProfessionals = await axios.post('/home/professionals', payload)
            return dispatch({
                type: 'POST_PROFESSIONAL',
                postProfessionals
            })
        } catch (error) {
            console.log(error)
        }
    }
}


export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}



export function getOrderReputation(payload) {
    return {
        type: 'ORDER_REPUTATION',
        payload
    }
}





