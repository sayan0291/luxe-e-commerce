import axios from "axios";


export const apiAuthDataHandle = async () => {
    const baseUrl = import.meta.env.VITE_CORS_ORIGIN
    try {
        const data = await axios.post(`${baseUrl}/api/v1/user/register`)
        console.log(data.data)
    } catch (error) {
        console.log("auth Data fetching error",error)
    }
}