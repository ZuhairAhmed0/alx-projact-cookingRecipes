import axios from "axios";

export default axios.create({
    baseURL: 'https://api-cookingrecipes.onrender.com/api/v1'
})
