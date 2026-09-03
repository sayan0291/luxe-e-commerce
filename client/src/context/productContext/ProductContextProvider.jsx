import { createContext,useEffect,useState } from "react";
import { apiHandle } from "../../api/apiHandle";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [category,setCategory] = useState();
    const [error,setError] = useState(null);

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        console.log(category)

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
    },[category])


    return(
        <ProductContext.Provider value={{products,loading,error,category,setCategory}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;
