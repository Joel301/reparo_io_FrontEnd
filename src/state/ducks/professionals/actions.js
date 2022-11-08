import axios from "axios";

//authentincation :P


export function filterByProfession(payload) {
    // console.log(payload);
    return {
        type: 'FILTER_BY_PROFESSION',
        payload
    }
}

export function filterByReputation(payload) {
    return {
        type: 'FILTER_BY_REPUTATION',
        payload,
    }
}


export function getAllProfessionals() {
    return async function (dispatch) {
        try {
            const getAll = await axios.get('/home/professionals')
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

export function postProfessionals(payload) {
    const POSTURL = "/home/user"
    console.log(payload)
    return async function (dispatch) {
        try {
            const postProfessionals = await axios.post(
                POSTURL, { ...payload, isProfessional: true })
            return dispatch({
                type: 'POST_PROFESSIONAL',
                postProfessionals
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function postlClient(payload) {
    const POSTURL = "/home/user"
    console.log({ ...payload, isClient: true })
    return async function (dispatch) {
        try {
            const postClients = await axios.post(
                POSTURL, { ...payload, isClient: true })
            return dispatch({
                type: 'POST_CLIENT',
                postClients
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





