import axios from "axios";

const fetchAuth = axios.create({
    baseURL: "https://course-api.com",
    headers: {
        Accept:"application/json"
    }
})
export default fetchAuth