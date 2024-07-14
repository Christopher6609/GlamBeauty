import { createContext, useState } from "react";
import products from "../../productData.json"


export const ProductsContext = createContext({
    productsData:[]
})

export const ProductsProvider = ({children}) => {
    const [productsData, setProductsData ] = useState(products);
    const value = {productsData};
    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}