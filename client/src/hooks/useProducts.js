import { ProductContext } from "../context/productContext/ProductContextProvider";
import { useContext } from "react"

export default function useProduct() {
    const context = useContext(ProductContext)
    if(!context) return {value: null,message: "Something went wrong on Product context"}
    return context;
}
