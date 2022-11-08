import axios from "axios"


export function getDetail(id) {
    return async function (dispatch) {
        try {
            const detalle = await axios.get('/home/professionals/' + id)
            console.log(detalle, "detalle")

            return dispatch({
                type: 'GET_DETAIL',
                payload: detalle.data
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}

export function putDetail(id, body) {
    return async function (dispatch) {
        try {
            const nuevoDetalle = await axios.put(`/home/professionals/${id}`, body)

            return dispatch({
                type: 'POST_DETAIL',
                payload: nuevoDetalle.data
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}