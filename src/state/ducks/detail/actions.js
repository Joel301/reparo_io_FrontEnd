import axios from "axios";

export function getDetail(id) {
  return async function (dispatch) {
    try {
      let detalle = await axios.get("/home/professionals/" + id).then(res=>res.data)
      console.log(detalle)
      let reviews = await axios.get("/home/reviews",{profesionalId:id}).then(res=>res.data)
      let professionalReviews = reviews
        .map((review) => {
          return { comment:review.comment,
                rating:review.rating,
                clientName:review.client.firstName,
                clientImg:review.client.profileImg };
        });
        detalle.reviews = professionalReviews
      return dispatch({
        type: "GET_DETAIL",
        payload: detalle,
      });
    } catch (error) {
      console.log(error);
    }
  };
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


export function removeDetail (){
  return async function(dispatch){
    return dispatch({
      type:'REMOVE_DETAIL'
    })
  }
}



// export function getDetailReviews(professionalId) {
//   return async (dispatch) => {
//     try {
//       let reviews = await axios.get("/home/reviews").then(res=>res.data)
//       let professionalReviews = reviews
//         .filter((review) => review.professionalId === professionalId)
//         .map((review) => {
//           return { comment:review.comment,
//                 rating:review.rating,
//                 clientName:review.client.firstName };
//         });
//       return dispatch({ type: "GET_DETAIL_REVIEWS", payload:professionalReviews });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
