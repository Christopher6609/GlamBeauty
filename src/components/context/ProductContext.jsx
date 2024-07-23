import { createContext, useEffect, useState } from "react";
import products from "../../productData.json";
import { getCollectionAndDocuments, addCollectionAndDocuments } from "../../utils/firebase/firebase";
import PRODUCT_DATA from "../../productsData";


export const ProductsContext = createContext({
    productsMap:{}
})

export const ProductsProvider = ({children}) => {
    const [productsMap, setProductsMap ] = useState({});
    const value = {productsMap};

    useEffect(()=>{
        const getProductMap = async () => {
            const productMap = await getCollectionAndDocuments();
            setProductsMap(productMap);
        }
        getProductMap();
    },[])

    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}