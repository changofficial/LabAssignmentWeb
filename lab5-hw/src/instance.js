import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:9000/v2/posts"
})

export default instance;