import axios from "axios";

const fetchAuth = axios.create({
    baseURL:"https://course-api.com"
})
fetchAuth.interceptors.request.use(
    (request) => {
        // request.headers.common["Accept"] = "application/json"
        //this common is depreceated so dont use it otherwise it will show undefined
        request.headers.common["Accept"] = "application/json"
        console.log("request sent")
        return request
    }, (error) => { 
        return Promise.reject(error)
 })
fetchAuth.interceptors.response.use(
    (response) => {
        console.log("got response")
        return response
    }, (error) => {
        console.log(error.response)
        if (error.response.status === 404) { 
            console.log("Not Found")
        }
        return Promise.reject(error)
})
  export default fetchAuth