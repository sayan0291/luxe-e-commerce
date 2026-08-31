export const allData = async () => {
        const url = 'https://ecommerce-api3.p.rapidapi.com/menswear?page=2&limit=30';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e0b5a72f50msh41e8e415b3e3d41p19dd15jsn52aa5e4144c8',
                'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com',
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
}