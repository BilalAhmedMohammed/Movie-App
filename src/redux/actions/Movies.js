import { axiosInstance } from "../../Components/Network/axiosConfig";
export const getMOviesListUsingPage=(page)=>(dispatch)=>{
    return axiosInstance
    .get("/movie/popular", {
      params: {
        page: page,
      },
    })
    .then((res) => {
        dispatch({
            type:"GET_MOVIES_LIST_Page",
            payload:res.data.results
        })
    })
    .catch((err) => console.log(err));
}
export const getMOviesListUsingQuery=(pageQuery)=>(dispatch)=>{
    return axiosInstance
    .get("/search/movie", {
      params: {
        query: pageQuery,
      },
    })
    .then((res) => {
        dispatch({
            type:"GET_MOVIES_LIST_Query",
            payload:res.data.results
        })
    })
    .catch((err) => console.log(err));
}
export const getMOviesListUsingLang=(lang)=>(dispatch)=>{
  return axiosInstance
  .get("/movie/popular", {
    params: {
      language: lang,
    },
  })
  .then((res) => {
      dispatch({
          type:"GET_MOVIES_LIST_LANG",
          payload:res.data.results
      })
  })
  .catch((err) => console.log(err));
}
