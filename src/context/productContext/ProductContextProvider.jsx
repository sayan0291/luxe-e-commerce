import { createContext,useEffect,useState } from "react";
import { allData } from "../../api/apiHandle";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await allData();
                setProducts(data)
            } catch (error) {
                console.log("Product Data fetch error",error)
            } finally {
                setLoading(false);
            }
        }
        getProducts()
    },[])


    return(
        <ProductContext.Provider value={{products,loading}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;