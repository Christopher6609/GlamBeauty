import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import ProductDetails from "../pages/ProductDetails"
import Layout from "../pages/Layout";

const router = createBrowserRouter([
    {path:"/", element:<Landing/>},

    {path:"/", element:<Layout/>, children:[
        {path:"productdetails", element:<ProductDetails/>}
    ]}
])

export default router;