import { configDotenv } from "dotenv";

const options = {
    method: "GET",
    headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
        "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
        "Content-Type": "application/json",
    },
};

export const apiHandle = async (category) => {

    const response = await fetch(`${import.meta.env.VITE_RAPID_API_URL}/${category}`, options);

    if (!response.ok) {
        throw new Error(`Failed to fetch products`);
    }

    const result = await response.json();
    return result
};

export const allData = () => getProductsByCategory("menswear");
