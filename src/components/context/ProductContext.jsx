import { createContext, useEffect, useState } from "react";
import products from "../../productData.json";
import { addCollectionAndDocuments } from "../../utils/firebase/firebase";
import PRODUCT_DATA from "../../productsData";


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