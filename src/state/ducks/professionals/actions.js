import axios from "axios";


export function getAllProfessionals() {
    return async function (dispatch) {
        try {
            const getAll = await axios.get('https://reparoiobackend-develop.up.railway.app/home/professionals')
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
            const prof = await axios.get(`https://reparoiobackend-develop.up.railway.app/home?search=${payload}`)
            return dispatch({
                type: 'GET_PROFESSIONALS',
                payload: prof.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}


export function getProfessionsOfProfessionals(payload) {
    return {
        type: 'GET_PRFESSIONS_OF_PROFESSIONALS',
        payload
    }
}

export function getAllProfessions() {
    return async function (dispatch) {
        try {
            const allProfessions = await axios.get('https://reparoiobackend-develop.up.railway.app/home/professions')
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
            const postProfessionals = await axios.post('https://reparoiobackend-develop.up.railway.app/home/professionals', payload)
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

export function getDetail(id) {
    return async function (dispatch) {
        try {
            var detalle = axios.get('https://reparoiobackend-develop.up.railway.app/home/professionals/' + id)
            return dispatch({
                type: 'GET_DETAIL',
                payload: detalle.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getOrderReputation(payload) {
    return {
        type: 'ORDER_REPUTATION',
        payload
    }
}





