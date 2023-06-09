import axios from "axios";

const instance = axios.create({
    baseURL: `http://192.168.18.33:8080`
})

instance.interceptors.response.use((response)=>{
    return response
}, (error)=>{
    return promise.reject(error.message);
});

export default instance;