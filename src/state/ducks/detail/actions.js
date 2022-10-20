import axios from "axios"


export function getDetail(id) {
    return async function (dispatch) {
        try {
            var detalle = await axios.get('/home/professionals/' + id)

            return dispatch({
                type: 'GET_DETAIL',
                payload: detalle.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}