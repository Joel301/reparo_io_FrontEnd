import axios from "axios";

export function getClient(id) {
    console.log(id, "id action")
    return async function (dispatch) {
        try {
            let client = await axios.get(`https://reparoiobackend-main.up.railway.app/api/clients/${id}`)
            console.log(client.data, "client action")
            return dispatch ({
                type: "GET_CLIENT",
                payload: client.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}