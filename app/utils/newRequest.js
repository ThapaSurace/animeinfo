import axios from "axios";

const newRequest = axios.create({
    baseURL:" https://api.jikan.moe/v4"
})

export default newRequest 