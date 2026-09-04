import { createContext,useEffect,useState } from "react";
import { apiHandle } from "../../api/apiHandle";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    const fetchProducts = async (category) => {
        setLoading(true);
        setError(null);

        try {
            const data = await apiHandle(category);
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
        <ProductContext.Provider value={{products,setProducts,loading,setLoading,error,fetchProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;
