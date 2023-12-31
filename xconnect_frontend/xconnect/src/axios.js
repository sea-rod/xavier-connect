import axios from "axios";

const baseURL = "http://127.0.0.1/api/";

const axiosInstance = axios.create({
    baseURL:baseURL,
    timeout:5000,
    headers:{
        Authorization:localStorage.getItem("access_token")
        ? localStorage.getItem("access_token")
        : null,
        'Content-Type':'application/json',
        Accept:'application/json',
    }
})