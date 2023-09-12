import axios from "axios";

export default axios.create({
    // baseURL: 'https://api.cooking-recipes.zohair.tech'
    baseURL: 'http://localhost:3500/api/v1'
})
