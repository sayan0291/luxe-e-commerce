import { configDotenv } from "dotenv";

const options = {
    method: "GET",
    headers: {
        "x-rapidapi-key": process.env.RAPID_API_KEY,
        "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
        "Content-Type": "application/json",
    },
};

export const apiHandle = async () => {

    const response = await fetch(process.env.RAPID_API_URL, options);

    if (!response.ok) {
        throw new Error(`Failed to fetch products`);
    }

    const result = await response.json();
    return result
};

export const allData = () => getProductsByCategory("menswear");
