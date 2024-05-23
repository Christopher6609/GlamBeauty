// import { createBrowserRouter } from "react-router-dom";
// import Landing from "../pages/Landing";
// import ProductDetails from "../pages/ProductDetails"
// import Layout from "../pages/Layout";


// const router = createBrowserRouter([
//     {path:"/", element:<Landing/>},

//     {path:"/", element:<Layout/>, children:[
        
//         {path:"productdetails", element:<ProductDetails/>}
//     ]}
// ])

// export default router;

import Landing from "../pages/Landing";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails"
import {BrowserRouter,Routes, Route} from "react-router-dom";
import ScrollToTop from "../components/atoms/ScrollToTop";


export default function Router(){
return (
    <BrowserRouter>
      <ScrollToTop />
        <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Landing/>} />
            <Route path="/" element={<Layout />} >
              
              <Route path="productdetails/:id" element={<ProductDetails />}/>
            </Route>
            
        </Routes>
      </BrowserRouter>
)

}


     