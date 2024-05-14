import { faCartShopping, faChevronDown, faX, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import IntroCard from "../components/molecules/IntroCard";
import { faBoxOpen, faCreditCard, faHeadset, faTruck } from "@fortawesome/free-solid-svg-icons";
import NewProduct from "../components/molecules/NewProduct";
import Button from "../components/atoms/Button";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Category from "../components/molecules/Category";





export default function Landing(){
    return(
        <main className="px-0">
            <div className="w-full h-[4.5rem] bg-[#212121] flex items-center text-white justify-between px-[6.31rem]">
                <div className="">
                    <div className="w-[12.44513rem] h-[1.44rem]">
                        <img className="object-contain w-full h-full" src={"/img/LOGO.png"} alt="logo"/>
                    </div>
                </div>
                <div>
                   <div className="h-[2.25rem] w-[31.5rem] py-[0.5rem] px-[0.75rem] flex items-center "> 
                   <input type="text" placeholder="Search here" style={{width:"100%"}} className="text-black"/></div> 
                </div>
                <div className="flex items-center space-x-6">
                   <div className="flex items-center">
                        <FontAwesomeIcon icon={faCartShopping} className="w-[1.5rem] h-[1.5rem]"/>
                        <p className="text-[0.75rem] px-[0.5rem]">Cart</p>
                   </div>
                   <div className="flex items-center">
                        <FontAwesomeIcon icon={faCircleUser} className="w-[1.5rem] h-[1.5rem]"/>
                        <p className="text-[0.75rem] px-[0.5rem]">My Account</p>
                        <FontAwesomeIcon icon={faChevronDown} className="w-[1rem] h-[1rem]" />
                   </div>
                </div>

            </div>

            <div className="w-full h-[4.5rem] bg-[#800020] flex items-center text-white px-[15.5rem]">
                
                <ul className="flex items-center w-full justify-between">

                    <li>
                        <div className="flex items-center">
                            <p className="text-[1rem] font-[500] leading-[1.45rem]">All Brands</p>
                            <FontAwesomeIcon icon={faChevronDown} className="w-[1.25rem] h-[1.25rem] px-[0.5rem]"/>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <p className="text-[1rem] font-[500] leading-[1.45rem]">Make Up</p>
                            <FontAwesomeIcon icon={faChevronDown} className="w-[1.25rem] h-[1.25rem] px-[0.5rem]"/>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <p className="text-[1rem] font-[500] leading-[1.45rem]">Skincare</p>
                            <FontAwesomeIcon icon={faChevronDown} className="w-[1.25rem] h-[1.25rem] px-[0.5rem]"/>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <p className="text-[1rem] font-[500] leading-[1.45rem]">Hair</p>
                            <FontAwesomeIcon icon={faChevronDown} className="w-[1.25rem] h-[1.25rem] px-[0.5rem]"/>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <p className="text-[1rem] font-[500] leading-[1.45rem]">Nails</p>
                            <FontAwesomeIcon icon={faChevronDown} className="w-[1.25rem] h-[1.25rem] px-[0.5rem]"/>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <p className="text-[1rem] font-[500] leading-[1.45rem]">Fragrances</p>
                            <FontAwesomeIcon icon={faChevronDown} className="w-[1.25rem] h-[1.25rem] px-[0.5rem]"/>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <p className="text-[1rem] font-[500] leading-[1.45rem]">Bodycare</p>
                            <FontAwesomeIcon icon={faChevronDown} className="w-[1.25rem] h-[1.25rem] px-[0.5rem]"/>
                        </div>
                    </li>
                   
                </ul>

            </div>

            <section>
                <div className="h-[40.3125rem] w-full" style={{ backgroundImage: "url(/img/Frame53034.png)"}}>
                    <div className="flex-col flex gap-[1.5rem] justify-center items-center h-full">
                        <div>
                            <div className="bg-[#A30000] rounded-[0.75rem] px-[0.75rem] py-[0.25rem]"><p className="text-[0.875rem] leading-[1.26875rem] text-[#FFF]">Up to 30% Off</p></div>
                        </div>
                        <div className="w-[46.6875rem] h-[11.8125rem] text-center ">
                            <h1 className="text-[3.75rem] font-normal leading-[3.9375rem] font-[garamond] tracking-[-0.075rem] text-[#FFFFFF]">
                            Unleash Your Radiance with GlamBeauty&apos;s Exclusive Collection
                            </h1>
                        </div>
                        <div className="w-[28.5rem] h-[2.875rem] text-center ">
                            <p className="text-[1rem] font-normal leading-[1.45rem] text-[#FFFFFF]">Elevate your beauty routine with our curated selection of premium cosmetics, skincare, and beauty essentials</p>
                        </div>
                        <div>
                            <Button text="Shop Now" style={{backgroundColor:'white'}} />
                        </div>
                        
                    </div>
                </div>
            
                
            </section>
            <section>
                <div className="bg-[#800020] py-[2.81rem] px-[6.25rem]">
                    <div className="flex justify-between items-center">
                        {intro.map((item)=> (
                        <IntroCard key={item.key} text={item.text} img={item.img} subtext={item.subtext} icon={item.icon} />
                        
                    ))}
                
                    </div>
                   
                   
                </div>
            </section>
            <seciton>
                <div className="flex justify-between px-[6.25rem] py-[1.88rem]">
                    <div className="w-[25.1875rem] h-[18.375rem]">
                        <img className="object-contain w-full h-full" src={"/img/picture1.png"} alt="img1" />
                    </div>
                    <div className="w-[25.1875rem] h-[18.375rem]">
                        <img className="object-contain w-full h-full" src={"/img/picture2.png"} alt="img1" />
                    </div>
                    <div className="w-[25.1875rem] h-[18.375rem]">
                        <img className="object-contain w-full h-full" src={"/img/picture3.png"} alt="img1" />
                    </div>
                </div>
            </seciton>
            <section>
                <div>
                    <div className="px-[6.44rem]">
                        <h3 className="text-[1.25rem font-[garamond] font-normal text-[#333] leading-[1.25rem] ">Shop By Brands</h3>     
                    </div>
                    <div className="flex justify-between items-center px-[6.44rem] py-[2.5rem]">
                    <div className="w-[18.4375rem] h-[14.5625rem]">
                        <img className="object-contain w-full h-full" src={"/img/Frame1.png"} alt="img1" />
                    </div>
                    <div className="w-[18.4375rem] h-[14.5625rem]">
                        <img className="object-contain w-full h-full" src={"/img/Frame2.png"} alt="img1" />
                    </div>
                    <div className="w-[18.4375rem] h-[14.5625rem]">
                        <img className="object-contain w-full h-full" src={"/img/Frame3.png"} alt="img1" />
                    </div>
                    <div className="w-[18.4375rem] h-[14.5625rem]">
                        <img className="object-contain w-full h-full" src={"/img/Frame4.png"} alt="img1" />
                    </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex justify-between px-[21.5rem] text-[1.25rem] font-[garamond] leading-[1.25rem] font-normal text-[#333] ">
                    <h3>New Products</h3>
                    <h3>Trending</h3>
                    <h3>Best Selling</h3>
                </div>

                <div className="px-[7.25rem] py-[2.63rem]">
                    <div className="flex flex-wrap justify-between">
                        {newProduct.map((item)=>(
                            <NewProduct key={item.key} img={item.img} productname={item.productname} price={item.price} productdescription={item.description} reviews={item.reviews}/>
                        ))}
                    </div>
                    <div className="mt-[2.5rem] flex flex-col justify-center items-center">
                        <div className="">
                            <p className="text-[0.75rem] font-[garamond] font-normal leading-[1.0875rem] text-[#1D2739]">20 of 45,575 products</p>
                        </div>
                        <div className="mt-[1.5rem]">
                            <Button text="Load More" style={{backgroundColor:'black', color:'white'}} />
                        </div>
                    </div>
                    
                </div>
            </section>

            <section className="bg-[#800020] h-[38.375rem]">
                <div className="flex h-full px-[6.25rem]">
                    <div className="flex flex-col justify-center h-full">
                        <div className="">
                            <h2 className="text-[3.75rem] font-normal leading-[3.9375rem] font-[garamond] text-[#FFFFFF]">
                                Share with us on our Social Channels using <span className="italic">#Glambeauty</span> for a chance to feature!
                            </h2>
                        </div>
                        <div className="text-white mt-[1.13rem] gap-[0.12rem]">
                            <button className="w-[4.03rem] h-[3.03rem]">
                                <FontAwesomeIcon className="w-[2.375rem] h-[2.375rem] object-contain" icon={faX} />
                            </button>
                            <button className="w-[4.03rem] h-[3.03rem]">
                                <FontAwesomeIcon className="w-[2.375rem] h-[2.375rem] object-contain" icon={faTiktok} />
                            </button>
                            <button className="w-[4.03rem] h-[3.03rem]">
                                <FontAwesomeIcon className="w-[2.375rem] h-[2.375rem] object-contain" icon={faInstagram} />
                            </button>
                            <button className="w-[4.03rem] h-[3.03rem]">
                                <FontAwesomeIcon className="w-[2.375rem] h-[2.375rem] object-contain" icon={faFacebook} />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center h-full w-full items-center space-x-[0.75rem]">
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
                <div className="px-[6.44rem] pt-[4.94rem]">
                    <div className="py-[]">
                        <h3 className="text-[1.25rem font-[garamond] font-normal text-[#333] leading-[1.25rem] ">Shop By Categories</h3>     
                    </div>
                    <div className="flex flex-wrap justify-between space-y-2 py-[2.5rem]">
                        {categoryimage.map((item)=>(
                            <Category key={item.key} img={item.img} />
                        ))}
                    </div>
                </div>
                    
                    
            </section>
            <section className="bg-[#FEEFE2] h-[33.375rem]">
            <div className="flex h-full px-[6.25rem]">
                <div className="flex flex-col justify-center h-full">
                            <div className="w-[41.125rem]">
                                <h2 className="text-[3.4375rem] font-normal leading-[4.9843rem] font-[garamond] text-[#000]">
                                Get Upto  20% Off Our Products if you Shop with us Today! 
                                </h2>
                            </div>
                            <div className="text-white mt-[2.69rem] gap-[0.12rem]">
                                <Button text="Shop Now" style={{backgroundColor:'black'}} />
                            </div>
                        </div>
                    <div className="flex justify-center h-full w-full items-center space-x-[0.75rem]">
                        <div className="">
                            <div className="w-[43.625rem] h-[33.375rem]">
                                <img className="object-centain w-full h-full" src="/img/lady.png" alt="img "/>
                            </div>
                        </div>
                       
                    </div>
                </div>
            
            </section>
        </main>
    )

}


const intro = [
    {
        key:"intro1",
        img:"/img/truck-icon1.png",
        icon: faTruck,
        text:"Free Delivery Within UK",
        subtext:"We ensure money-back guarantee if the product is counterfeit"
    },
    {
        key:"intro2",
        img:"/img/cosmetic-product-icon1.png",
        icon:faBoxOpen,
        text:"150+ Popular Brands",
        subtext:"We ensure money-back guarantee if the product is counterfeit"
    },
    {
        key:"intro3",
        img:"/img/payment.png",
        icon:faCreditCard,
        text:"Secured Payment",
        subtext:"Our payment systems are safe and secured"
    },
    {
        key:"intro4",
        img:"/img/24-support.png",
        icon:faHeadset,
        text:"Top Notch Customer Support",
        subtext:"We ensure money-back guarantee if the product is counterfeit"
    }

]

const newProduct=[
    {
        key:"newproduct1",
        img:"/img/newproduct1.png",
        productname:"CLINIQUE LIQUID",
        price:"50.00",
        description:"Anti- Blemish Liquid Makeup Solutions and Face Cream 600ml.",
        reviews:"30+ Reviews"
    },
    {
        key:"newproduct2",
        img:"/img/newproduct2.png",
        productname:"evelin vody wash",
        price:"54.00",
        description:"99% Natural Aloe Vera Multifunctional Body and Face Gel 400ml.",
        reviews:"30+ Reviews"
    },
    {
        key:"newproduct3",
        img:"/img/newproduct3.png",
        productname:"camelo",
        price:"35.00",
        description:"Anti Damage Keratin Mask for Damaged Hair 200ml.",
        reviews:"30+ Reviews"
    },
    {
        key:"newproduct4",
        img:"/img/newproduct4.png",
        productname:"mon paris",
        price:"80.00",
        description:"The best elegant perfume for women",
        reviews:"30+ Reviews"
    },
     {
        key:"newproduct5",
        img:"/img/newproduct5.png",
        productname:"court heels",
        price:"70.56",
        description:"The best elegant perfume for women",
        reviews:"30+ Reviews"
    },
     {
        key:"newproduct6",
        img:"/img/newproduct6.png",
        productname:"CLARINS DOUBLE SERUM",
        price:"60.00",
        description:"nti- Blemish Liquid Makeup Solutions and Face Cream 600ml.",
        reviews:"30+ Reviews"
    },
    {
        key:"newproduct7",
        img:"/img/newproduct7.png",
        productname:"Essence",
        price:"90.00",
        description:"Anti Damage Keratin Mask for Damaged Hair 200ml.",
        reviews:"30+ Reviews"
    },
    {
        key:"newproduct8",
        img:"/img/newproduct8.png",
        productname:"mon paris",
        price:"60.00",
        description:"The best elegant body wash for women",
        reviews:"30+ Reviews"
    }
]
const categoryimage=[
    {
        key:"image1",
        img:"/img/category1.png"
    },
    {
        key:"image2",
        img:"/img/category2.png"
    },
    {
        key:"image3",
        img:"/img/category3.png"
    },
    {
        key:"image4",
        img:"/img/category4.png"
    },
    {
        key:"image5",
        img:"/img/category5.png"
    },
    {
        key:"image6",
        img:"/img/category6.png"
    },
    {
        key:"image7",
        img:"/img/category7.png"
    },
    {
        key:"image8",
        img:"/img/category8.png"
    },

]