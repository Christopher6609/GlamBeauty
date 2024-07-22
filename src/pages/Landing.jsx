import {  faX, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import IntroCard from "../components/molecules/IntroCard";
import { faBoxOpen, faCreditCard, faHeadset, faTruck } from "@fortawesome/free-solid-svg-icons";
import NewProduct from "../components/molecules/NewProduct";
import Button from "../components/atoms/Button";
import { faFacebook, faInstagram, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Category from "../components/molecules/Category";
import {Link} from "react-router-dom";
import { useState } from "react";
import Heading from "../components/molecules/Heading";
import Footer from "../components/molecules/Footer";
import { useContext } from "react";
import { ProductsContext } from "../components/context/ProductContext";





export default function Landing(){

    const {productsData} = useContext(ProductsContext);
     
    const [Products, setProducts] = useState(productsData);
    const [active, setActive] = useState('md:border-b-[3px] border-b-[2px] md:pb-2 border-[#800020]');

    const newProd = () => {
        const products = productsData.filter((product) => product.category === "newProduct");
        setProducts(products); 
        setActive('md:border-b-[3px] border-b-[2px] md:pb-2 border-[#800020]');
    }
    const trendProd = () => {
        const products = productsData.filter((product) => product.category === "trending");
        setProducts(products); 
        setActive('trend');
    }
    const bestSellingProd = () => {
        const products = productsData.filter((product) => product.category === "bestSelling");
        setProducts(products); 
        setActive('best');
    }


    


    return(
       
        <main className="px-0 justify-center">
           <div><Heading /></div>
            <section>
                <div className="md:h-[40.3125rem] h-[30rem] w-full " style={{ backgroundImage: "url(/img/Frame53034.png)"}}>
                    <div className="flex-col flex md:gap-[1.5rem] gap-[1rem] justify-center items-center h-full">
                        <div>
                            <div className="bg-[#A30000] rounded-[0.75rem] px-[0.75rem] py-[0.25rem]"><p className="text-[0.875rem] leading-[1.26875rem] text-[#FFF]">Up to 30% Off</p></div>
                        </div>
                        <div className="md:w-[46.6875rem] w-full h-[11.8125rem] text-center ">
                            <h1 className="md:text-[3.75rem] text-[2rem] font-normal md:leading-[3.9375rem] font-[garamond] md:tracking-[-0.075rem] text-[#FFFFFF]">
                            Unleash Your Radiance with GlamBeauty&apos;s Exclusive Collection
                            </h1>
                        </div>
                        <div className="md:w-[28.5rem] w-full md:h-[2.875rem] px-2 text-center ">
                            <p className="text-[1rem] font-normal md:leading-[1.45rem] text-[#FFFFFF]">Elevate your beauty routine with our curated selection of premium cosmetics, skincare, and beauty essentials</p>
                        </div>
                        <div>
                            <Button text="Shop Now" style={{backgroundColor:'white'}} />
                        </div>
                        
                    </div>
                </div>
            
                
            </section>
            <section>
                <div className="bg-[#800020] md:py-[2.81rem] py-[1rem] lg:px-[6.25rem] px-[1rem]">
                    <div className="flex justify-between items-center max-w-[1440px] mx-auto">
                        {intro.map((item)=> (
                        <IntroCard key={item.id} text={item.text} img={item.img} subtext={item.subtext} icon={item.icon} />
                        
                    ))}
                
                    </div>
                   
                   
                </div>
            </section>
            <section>
                <div className="flex justify-between lg:px-[6.25rem] px-[1rem] md:py-[1.88rem] py-[2rem] max-w-[1440px] mx-auto ">
                    <div className="md:w-[25.1875rem] w-[17rem] md:h-[18.375rem]">
                        <img className="object-contain w-full h-full" src={"/img/picture1.png"} alt="img1" />
                    </div>
                    <div className="md:w-[25.1875rem] w-[17rem] md:h-[18.375rem]">
                        <img className="object-contain w-full h-full" src={"/img/picture2.png"} alt="img1" />
                    </div>
                    <div className="md:w-[25.1875rem] w-[17rem] md:h-[18.375rem]">
                        <img className="object-contain w-full h-full" src={"/img/picture3.png"} alt="img1" />
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-[1440px] mx-auto">
                <div className="lg:px-[6.44rem] px-[1rem] md:pt-[3rem] pt-[1rem]">
                        <div className="border-b-[3px] md:w-[9rem] w-[7rem] md:pb-2 border-[#800020]">
                                <h3 className="md:text-[1.25rem] font-[garamond] font-normal text-[#333] md:leading-[1.25rem]">Shop By Brands</h3>    
                        </div>
                         
                    </div>
                    <div className="flex justify-between items-center lg:px-[6.44rem] px-[1rem] md:py-[2.5rem]">
                        <div className="md:w-[18.4375rem] w-[5rem] md:h-[14.5625rem]">
                            <img className="object-contain w-full h-full" src={"/img/Frame1.png"} alt="img1" />
                        </div>
                        <div className="md:w-[18.4375rem]  w-[5rem] md:h-[14.5625rem]">
                            <img className="object-contain w-full h-full" src={"/img/Frame2.png"} alt="img1" />
                        </div>
                        <div className="md:w-[18.4375rem]  w-[5rem] md:h-[14.5625rem]">
                            <img className="object-contain w-full h-full" src={"/img/Frame3.png"} alt="img1" />
                        </div>
                        <div className="md:w-[18.4375rem]  w-[5rem] md:h-[14.5625rem]">
                            <img className="object-contain w-full h-full" src={"/img/Frame4.png"} alt="img1" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-[1440px] mx-auto ">
                    <div className="flex justify-between lg:px-[21.5rem] pt-[1rem] md:py-0 px-[3rem] border-b-[1px] md:text-[1.25rem] text-[1rem] font-[garamond] md:leading-[1.25rem] font-normal text-[#333] ">
                        <button onClick={newProd} className={active}>New Products</button>
                        <button onClick={trendProd} className={active == "trend" ? `md:border-b-[3px] border-b-[2px] md:pb-2 border-[#800020]` : ''}>Trending</button>
                        <button onClick={bestSellingProd} className={active == "best" ? `md:border-b-[3px] border-b-[2px] md:pb-2 border-[#800020]` : ''}>Best Selling</button>
                    </div>
                    <div className="md:px-[7.25rem] px-[1rem] md:py-[2.63rem]">
                        <div className="grid grid-cols-4 justify-between">
                            {Products.map((product)=>(
                                <Link to={`/productdetails/${product.id}`} key={product.id} >
                                    <NewProduct img={product.img} productname={product.productname} price={product.price} productdescription={product.description} reviews={product.reviews}/>
                                </Link>
                            ))}
                        </div>
                        <div className="my-[2.5rem] flex flex-col justify-center items-center">
                            <div className="">
                                <p className="text-[0.75rem] font-[garamond] font-normal leading-[1.0875rem] text-[#1D2739]">20 of 45,575 products</p>
                            </div>
                            <div className="mt-[1.5rem]">
                                <Button text="Load More" style={{backgroundColor:'black', color:'white'}} />
                            </div>
                        </div>
                    
                </div>

                </div>
                

                
            </section>

            <section className="bg-[#800020] md:h-[38.375rem] h-[20rem]">
                <div className="flex h-full max-w-[1440px] mx-auto  md:px-[6.25rem] px-[1rem]">
                    <div className="flex flex-col justify-center h-full">
                        <div className="">
                            <h2 className="md:text-[3.75rem] text-[2rem] font-normal md:leading-[3.9375rem] font-[garamond] text-[#FFFFFF]">
                                Share with us on our Social Channels using <span className="italic">#Glambeauty</span> for a chance to feature!
                            </h2>
                        </div>
                        <div className="text-white mt-[1.13rem] gap-[0.12rem]">
                            <button className="w-[4.03rem] h-[3.03rem]">
                                <FontAwesomeIcon className="md:w-[2.375rem] md:h-[2.375rem] w-[1.5rem] h-[1.5rem] object-contain" icon={faX} />
                            </button>
                            <button className="w-[4.03rem] h-[3.03rem]">
                                <FontAwesomeIcon className="md:w-[2.375rem] md:h-[2.375rem] w-[1.5rem] h-[1.5rem] object-contain" icon={faTiktok} />
                            </button>
                            <button className="w-[4.03rem] h-[3.03rem]">
                                <FontAwesomeIcon className="md:w-[2.375rem] md:h-[2.375rem] w-[1.5rem] h-[1.5rem] object-contain" icon={faInstagram} />
                            </button>
                            <button className="w-[4.03rem] h-[3.03rem]">
                                <FontAwesomeIcon className="md:w-[2.375rem] md:h-[2.375rem] w-[1.5rem] h-[1.5rem] object-contain" icon={faFacebook} />
                            </button>
                        </div>
                    </div>
                    <div className="lg:flex justify-center h-full w-full items-center space-x-[0.75rem] hidden">
                        <div className="space-y-[1.13rem]">
                            <div className="w-[16.125rem] h-[14.25rem]">
                                <img className="object-centain w-full h-full" src="/img/share1.png" alt="img "/>
                            </div>
                            <div className="w-[16.125rem] h-[12.5rem]">
                                <img className="object-centain w-full h-full" src="/img/share3.png" alt="img "/>
                            </div>
                        </div>
                        <div className="space-y-[1rem]">
                            <div className="w-[14.875rem] h-[12.5rem]">
                                <img className="object-centain w-full h-full" src="/img/share2.png" alt="img "/>
                            </div>
                            <div className="w-[14.875rem] h-[14.325rem]">
                                <img className="object-centain w-full h-full" src="/img/share4.png" alt="img "/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
            <div className="lg:px-[6.44rem] px-[1rem] max-w-[1440px] mx-auto pt-[1.5rem] md:pt-[2.94rem]">
                    <div className="md:pt-[3rem] pt-[1rem]">
                            <div className="border-b-[3px] md:w-[10rem] w-[8rem] md:pb-2 border-[#800020]">
                                    <h3 className="md:text-[1.25rem] font-[garamond] font-normal text-[#333] md:leading-[1.25rem]">Shop By Categories</h3>    
                            </div>
                            
                        </div>
                    <div className="flex flex-wrap justify-between md:py-[2.5rem] py-[1rem]">
                        {categoryimage.map((item)=>(
                            <Category key={item.id} img={item.img} />
                        ))}
                    </div>
                </div>
                    
                    
            </section>
            <section className="bg-[#FEEFE2] md:h-[33.375rem] h-[20rem] max-w-[1440px] mx-auto">
            <div className="flex h-full md:px-[6.25rem] px-[1rem] ">
                <div className="flex flex-col justify-center h-full items-center md:items-start">
                            <div className="md:w-[41.125rem] w-[22rem] ">
                                <h2 className="md:text-[3.4375rem] text-[2rem] font-normal md:leading-[4.9843rem] font-[garamond] text-[#000]">
                                Get Upto  20% Off Our Products if you Shop with us Today! 
                                </h2>
                            </div>
                            <div className="text-white mt-[2.69rem] gap-[0.12rem]">
                                <Button text="Shop Now" style={{backgroundColor:'black'}} />
                            </div>
                        </div>
                    <div className="lg:flex justify-center h-full w-full items-center hidden">
                        <div className="">
                            <div className="w-[41rem] h-[33.375rem]">
                                <img className="object-centain w-full h-full" src="/img/lady.png" alt="img "/>
                            </div>
                        </div>
                       
                    </div>
                </div>
            
            </section>
            <Footer/>
            
            {/* {menuVisible && (<Popup className="popup">
        <Cart />
    </Popup>)} */}
        </main>
    )
    
}

export const intro = [
    {
        id:"intro1",
        img:"/img/truck-icon1.png",
        icon: faTruck,
        text:"Free Delivery Within UK",
        subtext:"We ensure money-back guarantee if the product is counterfeit"
    },
    {
        id:"intro2",
        img:"/img/cosmetic-product-icon1.png",
        icon:faBoxOpen,
        text:"150+ Popular Brands",
        subtext:"We ensure money-back guarantee if the product is counterfeit"
    },
    {
        id:"intro3",
        img:"/img/payment.png",
        icon:faCreditCard,
        text:"Secured Payment",
        subtext:"Our payment systems are safe and secured"
    },
    {
        id:"intro4",
        img:"/img/24-support.png",
        icon:faHeadset,
        text:"Top Notch Customer Support",
        subtext:"We ensure money-back guarantee if the product is counterfeit"
    }

]

export const categoryimage=[
    {
        id:"image1",
        img:"/img/category1.png"
    },
    {
        id:"image2",
        img:"/img/category2.png"
    },
    {
        id:"image3",
        img:"/img/category3.png"
    },
    {
        id:"image4",
        img:"/img/category4.png"
    },
    {
        id:"image5",
        img:"/img/category5.png"
    },
    {
        id:"image6",
        img:"/img/category6.png"
    },
    {
        id:"image7",
        img:"/img/category7.png"
    },
    {
        id:"image8",
        img:"/img/category8.png"
    },

]




