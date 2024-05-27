import { faClose, faCaretDown, faChevronDown, faEnvelope, faPhone, faSearch, faShoppingBag, faX, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import IntroCard from "../components/molecules/IntroCard";
import { faBoxOpen, faCreditCard, faHeadset, faTruck } from "@fortawesome/free-solid-svg-icons";
import NewProduct from "../components/molecules/NewProduct";
import Button from "../components/atoms/Button";
import { faFacebook, faInstagram, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Category from "../components/molecules/Category";
import {Link} from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";
import Popup from 'reactjs-popup';
import Heading from "../components/molecules/Heading";






export default function Landing(){
    
        const [menuVisible, setMenuVisible] = useState(false);

        const openCart = () => {
            setMenuVisible(true);
        };
        const closeCart = () => {
            setMenuVisible(false);
        };

    

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
                <div className="bg-[#800020] md:py-[2.81rem] py-[1rem] md:px-[6.25rem] px-[1rem]">
                    <div className="flex justify-between items-center max-w-[1440px] mx-auto">
                        {intro.map((item)=> (
                        <IntroCard key={item.id} text={item.text} img={item.img} subtext={item.subtext} icon={item.icon} />
                        
                    ))}
                
                    </div>
                   
                   
                </div>
            </section>
            <section>
                <div className="flex justify-between md:px-[6.25rem] px-[1rem] md:py-[1.88rem] py-[2rem] max-w-[1440px] mx-auto ">
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
                <div className="md:px-[6.44rem] px-[1rem] md:pt-[3rem] pt-[1rem]">
                        <div className="border-b-[3px] md:w-[9rem] w-[7rem] md:pb-2">
                                <h3 className="md:text-[1.25rem] font-[garamond] font-normal text-[#333] md:leading-[1.25rem]">Shop By Brands</h3>    
                        </div>
                         
                    </div>
                    <div className="flex justify-between items-center md:px-[6.44rem] px-[1rem] md:py-[2.5rem]">
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
                    <div className="flex justify-between md:px-[21.5rem] pt-[1rem] md:py-0 px-[3rem] border-b-[1px] md:text-[1.25rem] text-[1rem] font-[garamond] md:leading-[1.25rem] font-normal text-[#333] ">
                        <h3 className="md:border-b-[3px] border-b-[2px] md:pb-2">New Products</h3>
                        <h3>Trending</h3>
                        <h3>Best Selling</h3>
                    </div>
                    <div className="md:px-[7.25rem] px-[1rem] md:py-[2.63rem]">
                        <div className="flex flex-wrap justify-between">
                            {Product.map((item)=>(
                                <Link to={`/productdetails/${item.id}`} key={item.id}>
                                    <NewProduct img={item.img} productname={item.productname} price={item.price} productdescription={item.description} reviews={item.reviews}/>
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
                    <div className="md:flex justify-center h-full w-full items-center space-x-[0.75rem] hidden">
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
            <div className="md:px-[6.44rem] px-[1rem] max-w-[1440px] mx-auto pt-[1.5rem] md:pt-[2.94rem]">
                    <div className="md:pt-[3rem] pt-[1rem]">
                            <div className="border-b-[3px] md:w-[10rem] w-[8rem] md:pb-2">
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
            <section className="bg-[#FEEFE2] md:h-[33.375rem] h-[20rem]">
            <div className="flex h-full max-w-[1440px] mx-auto md:px-[6.25rem] px-[1rem]">
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
                    <div className="flex justify-center h-full w-full items-center">
                        <div className="hidden md:block">
                            <div className="w-[41rem] h-[33.375rem]">
                                <img className="object-centain w-full h-full" src="/img/lady.png" alt="img "/>
                            </div>
                        </div>
                       
                    </div>
                </div>
            
            </section>
            <footer className="bg-[#000] text-[#FFF]">
                <div className="pt-[3.12rem] max-w-[1440px] mx-auto  md:px-[6.19rem] px-[1rem]">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="font-[garamond] md:text-[1.875rem] text-[1.5rem] font-normal leading-[2.375rem] uppercase">Be the first!</h2>
                        <p className="md:text-[1rem] text-[0.5rem] color-[#DFDFDF] font-[400] leading-[1.875rem] font-[inter]">Sign up now to receive the latest news, offers and exclusive drops</p>
                    </div>
                    <div className="flex gap-[1rem] justify-center items-center mt-[1.25rem] ">
                        <form>
                            <input type="text" placeholder="Enter your email" name="subscribe" className="md:w-[22.5rem] md:h-[3rem] rounded-[0.5rem] border-[#D0D5DD] text-[#000] px-[0.875rem] py-[0.75rem]"  />
                        </form>
                        <button className="bg-[#FFF] w-[6.875rem] h-[3rem] rounded-[0.5rem] text-[#000] font-[garamond]">Subscribe</button>
                    </div>
                    <div className="text-center">
                        <p className="font-[inter] md:text-[0.875rem] text-[0.5rem] font-normal leading-[1.25rem]">We care about your data in our <a href="#" className="underline"> privacy policy.</a></p>
                    </div>
                    <div className="flex flex-wrap justify-between gap-3 md:gap-0 md:py-[5.56rem] py-[3rem] px-[1rem] md:px-0">
                        <div>
                            <ul className="font-[garamond] md:text-[1rem] text-[0.8rem] leading-[1.5rem] text-[#FEEFE2] space-y-[0.75rem] ">
                                <li className="md:text-[1.5rem] text-[1rem] leading-[1.25rem]">GlamBeauty</li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Partnership & Supplies</a></li>
                                <li><a href="#">Sitemap</a></li>
                                <ul className="flex gap-[1rem]">
                                    <li><a href="#"><FontAwesomeIcon icon={faX} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                    
                                </ul>
                            </ul>
                            
                        </div>
                        <div>
                            <ul className="font-[garamond] md:text-[1rem] text-[0.8rem] leading-[1.5rem] text-[#FEEFE2] space-y-[0.75rem]">
                                <li className="md:text-[1.5rem] text-[1rem] leading-[1.25rem]">Legal</li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Cookie Policy (EU)</a></li>
                                
                            </ul>
                            
                        </div>
                        <div>
                            <ul className="font-[garamond] md:text-[1rem] text-[0.8rem] leading-[1.5rem] text-[#FEEFE2] space-y-[0.75rem]">
                                <li className="md:text-[1.5rem] text-[1rem] leading-[1.25rem]">Help & Information</li>
                                <li><a href="#">Delivery Information</a></li>
                                <li><a href="#">Returns Policy</a></li>
                                <li><a href="#">FAQs</a></li>
                                
                            </ul>
                            
                        </div>
                        <div>
                            <ul className="font-[garamond] md:text-[1rem] text-[0.8rem] leading-[1.5rem] text-[#FEEFE2] space-y-[0.75rem]">
                                <li className="md:text-[1.5rem] text-[1rem] leading-[1.25rem]">Contact Us</li>
                                <li><FontAwesomeIcon icon={faPhone} className="pr-[0.5rem]"/>07999385318, 07865432665</li>
                                <li><FontAwesomeIcon icon={faEnvelope} className="pr-[0.5rem]" /><a href="mailto:glambeautyy@gmail.com"></a>Glambeauty@gmail.com</li>
                            </ul>
                            
                        </div>
                        <div>
                            <ul className="font-[garamond] md:text-[1rem] text-[0.8rem] leading-[1.5rem] text-[#FEEFE2] space-y-[0.75rem]">
                                <li className="md:text-[1.5rem] text-[1rem] leading-[1.25rem]"><a href="#">Our International sites</a></li>
                                    <ul className="flex gap-[1rem]">
                                        <li><img src="/img/us1.png" alt="img" className="w-[1.875rem] h-[1.875rem]"/></li>
                                        <li><img src="/img/fr1.png" alt="img" className="w-[1.875rem] h-[1.875rem]"/></li>
                                        <li><img src="/img/pl1.png" alt="img" className="w-[1.875rem] h-[1.875rem]"/></li>
                                        <li><img src="/img/dk1.png" alt="img" className="w-[1.875rem] h-[1.875rem]"/></li>
                                        <li><img src="/img/it1.png" alt="img" className="w-[1.875rem] h-[1.875rem]"/></li>
                                        <li><img src="/img/es1.png" alt="img" className="w-[1.875rem] h-[1.875rem]"/></li>
                                    </ul>
                                    <ul className="space-y-[1rem]">
                                    <li className="md:text-[1.5rem] text-[1rem] leading-[1.25rem]">Supported Payments</li>
                                    <ul className="flex gap-[1rem]">
                                        <li><img src="/img/apple-pay-png1.png" alt="img" className="md:w-[2.5rem] h-[1.5625rem]"/></li>
                                        <li><img src="/img/pay-pal-png1.png" alt="img" className="w-[2.5rem] h-[1.5625rem]"/></li>
                                        <li><img src="/img/visa-png1.png" alt="img" className="w-[2.5rem] h-[1.5625rem]"/></li>
                                        <li><img src="/img/mastercard-png1.png" alt="img" className="w-[2.5rem] h-[1.5625rem]"/></li>
                                    </ul>
                                    </ul>
                            </ul>
                            
                        </div>
                    </div>
                   <hr className="text-white"/>
                   <div className="flex justify-between items-center md:py-[2rem] py-[0.5rem]">
                    <div className="md:w-[12.44513rem] w-[5rem] h-[1.44rem]">
                        <img className="object-contain w-full h-full" src="/img/LOGO.png"/>
                    </div>
                    <div className="flex md:text-[1.5rem] text-[0.6rem]">
                        <h3>GLAMBEAUTY &copy; 2024.</h3>
                        <p> All Right Reserved</p>
                    </div>
                   </div>
                </div>
            </footer>
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

export const Product=[
    {
        id:"product1",
        img:"/img/newproduct1.png",
        productname:"CLINIQUE LIQUID",
        price:"$50",
        description:"Anti- Blemish Liquid Makeup Solutions and Face Cream 600ml.",
        reviews:"30+ Reviews",
        category: "newProduct",
        details:"Experience Clinique's Anti Blemish Solutions Liquid Makeup, a weightless foundation offering natural to moderate coverage, specially crafted for those with oily or blemish-prone skin. Dermatologist-tested and featuring salicylic acid, this oil-free foundation not only conceals but actively works to clear and prevent blemishes. Skin-soothing elements like red algae extract, licorice, and caffeine are added to reduce redness.",
    },
    {
        id:"product2",
        img:"/img/newproduct2.png",
        productname:"evelin vody wash",
        price:"$54",
        description:"99% Natural Aloe Vera Multifunctional Body and Face Gel 400ml.",
        reviews:"30+ Reviews",
        category: "newProduct",
        details:"Experience Clinique's Anti Blemish Solutions Liquid Makeup, a weightless foundation offering natural to moderate coverage, specially crafted for those with oily or blemish-prone skin. Dermatologist-tested and featuring salicylic acid, this oil-free foundation not only conceals but actively works to clear and prevent blemishes. Skin-soothing elements like red algae extract, licorice, and caffeine are added to reduce redness.",
    },
    {
        id:"product3",
        img:"/img/newproduct3.png",
        productname:"camelo",
        price:"$35",
        description:"Anti Damage Keratin Mask for Damaged Hair 200ml.",
        reviews:"30+ Reviews",
        category:"newProduct",
        details:"Experience Clinique's Anti Blemish Solutions Liquid Makeup, a weightless foundation offering natural to moderate coverage, specially crafted for those with oily or blemish-prone skin. Dermatologist-tested and featuring salicylic acid, this oil-free foundation not only conceals but actively works to clear and prevent blemishes. Skin-soothing elements like red algae extract, licorice, and caffeine are added to reduce redness.",
    },
    {
        id:"product4",
        img:"/img/newproduct4.png",
        productname:"mon paris",
        price:"$80",
        description:"The best elegant perfume for women",
        reviews:"30+ Reviews",
        category: "newProduct",
        details:"Experience Clinique's Anti Blemish Solutions Liquid Makeup, a weightless foundation offering natural to moderate coverage, specially crafted for those with oily or blemish-prone skin. Dermatologist-tested and featuring salicylic acid, this oil-free foundation not only conceals but actively works to clear and prevent blemishes. Skin-soothing elements like red algae extract, licorice, and caffeine are added to reduce redness.",
    },
     {
        id:"product5",
        img:"/img/newproduct5.png",
        productname:"court heels",
        price:"$70",
        description:"The best elegant perfume for women",
        reviews:"30+ Reviews",
        category: "newProduct",
        details:"Experience Clinique's Anti Blemish Solutions Liquid Makeup, a weightless foundation offering natural to moderate coverage, specially crafted for those with oily or blemish-prone skin. Dermatologist-tested and featuring salicylic acid, this oil-free foundation not only conceals but actively works to clear and prevent blemishes. Skin-soothing elements like red algae extract, licorice, and caffeine are added to reduce redness.",
    },
     {
        id:"product6",
        img:"/img/newproduct6.png",
        productname:"CLARINS DOUBLE SERUM",
        price:"$60",
        description:"nti- Blemish Liquid Makeup Solutions and Face Cream 600ml.",
        reviews:"30+ Reviews",
        category:"newProduct",
        details:"Experience Clinique's Anti Blemish Solutions Liquid Makeup, a weightless foundation offering natural to moderate coverage, specially crafted for those with oily or blemish-prone skin. Dermatologist-tested and featuring salicylic acid, this oil-free foundation not only conceals but actively works to clear and prevent blemishes. Skin-soothing elements like red algae extract, licorice, and caffeine are added to reduce redness.",
    },
    {
        id:"product7",
        img:"/img/newproduct7.png",
        productname:"Essence",
        price:"$90",
        description:"Anti Damage Keratin Mask for Damaged Hair 200ml.",
        reviews:"30+ Reviews",
        category: "newProduct",
        details:"Experience Clinique's Anti Blemish Solutions Liquid Makeup, a weightless foundation offering natural to moderate coverage, specially crafted for those with oily or blemish-prone skin. Dermatologist-tested and featuring salicylic acid, this oil-free foundation not only conceals but actively works to clear and prevent blemishes. Skin-soothing elements like red algae extract, licorice, and caffeine are added to reduce redness.",
    },
    {
        id:"product8",
        img:"/img/newproduct8.png",
        productname:"mon paris",
        price:"$60",
        description:"The best elegant body wash for women",
        reviews:"30+ Reviews",
        category: "newProduct",
        details:"Experience Clinique's Anti Blemish Solutions Liquid Makeup, a weightless foundation offering natural to moderate coverage, specially crafted for those with oily or blemish-prone skin. Dermatologist-tested and featuring salicylic acid, this oil-free foundation not only conceals but actively works to clear and prevent blemishes. Skin-soothing elements like red algae extract, licorice, and caffeine are added to reduce redness.",
    },
    {
        id:"product9",
        img:"/img/newproduct4.png",
        productname:"mon paris",
        price:"$80",
        description:"The best elegant perfume for women",
        reviews:"30+ Reviews",
        category: "trending",
        details:"Experience Clinique's Anti Blemish Solutions Liquid Makeup, a weightless foundation offering natural to moderate coverage, specially crafted for those with oily or blemish-prone skin. Dermatologist-tested and featuring salicylic acid, this oil-free foundation not only conceals but actively works to clear and prevent blemishes. Skin-soothing elements like red algae extract, licorice, and caffeine are added to reduce redness.",
    },
     {
        id:"product10",
        img:"/img/newproduct5.png",
        productname:"court heels",
        price:"$70",
        description:"The best elegant perfume for women",
        reviews:"30+ Reviews",
        category: "trending",
        details:"Experience Clinique's Anti Blemish Solutions Liquid Makeup, a weightless foundation offering natural to moderate coverage, specially crafted for those with oily or blemish-prone skin. Dermatologist-tested and featuring salicylic acid, this oil-free foundation not only conceals but actively works to clear and prevent blemishes. Skin-soothing elements like red algae extract, licorice, and caffeine are added to reduce redness.",
    },
     {
        id:"product11",
        img:"/img/newproduct6.png",
        productname:"CLARINS DOUBLE SERUM",
        price:"$60",
        description:"nti- Blemish Liquid Makeup Solutions and Face Cream 600ml.",
        reviews:"30+ Reviews",
        category:"trending",
        details:"Experience Clinique's Anti Blemish Solutions Liquid Makeup, a weightless foundation offering natural to moderate coverage, specially crafted for those with oily or blemish-prone skin. Dermatologist-tested and featuring salicylic acid, this oil-free foundation not only conceals but actively works to clear and prevent blemishes. Skin-soothing elements like red algae extract, licorice, and caffeine are added to reduce redness.",
    },
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




