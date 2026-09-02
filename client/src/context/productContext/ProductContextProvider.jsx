import { createContext,useEffect,useState } from "react";
import { apiHandle } from "../../api/apiHandle";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    const fetchProducts = async (category = "menswear") => {
        setLoading(true);
        setError(null);

        try {
            const data = await apiHandle();
            setProducts(data);
        } catch (error) {
            console.log("Product Data fetch error",error);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    },[])


    return(
        <ProductContext.Provider value={{products,loading,error}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;
