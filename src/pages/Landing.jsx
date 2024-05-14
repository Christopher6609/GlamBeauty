import { faCaretDown, faCartShopping, faChevronDown, faLock, faStar, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import IntroCard from "../components/atoms/molecules/IntroCard";
import { faBoxOpen, faCreditCard, faHeadset, faTruck } from "@fortawesome/free-solid-svg-icons";




export default function Landing(){
    return(
        <main>
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
                            <button className=" bg-[#FFF] font-[garamond] h-[3rem] w-[8.4374rem] gap-[0.625rem] rounded-[0.5rem]">Shop Now <FontAwesomeIcon icon ={faCaretDown} className="w-[1.25rem] h-[1.25rem]" /></button>
                        </div>
                        
                    </div>
                </div>
            
                
            </section>
            <section>
                <div className="bg-[#800020] py-[2.81rem] px-[6.25rem] ">
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
                    <div className="w-[17.875rem]">
                        <div className="w-[18.4375rem] h-[14.5625rem] py-[1rem]">
                            <img className="object-contain w-full h-full" src={"/img/newproduct1.png"} alt="img1" />
                        </div>
                        <div className="flex justify-between text-[#101928] py-[0.12rem]">
                            <h2 className="uppercase text-[1rem] font-[garamond]  leading-[1.5rem] font-normal">Clinique Liquid</h2>
                            <h5 className="font-bold text-[0.75rem] leading-[1.0875rem]"><sup>$</sup>50<sup>.00</sup></h5>
                        </div>
                        <div className="text-[#1D2739]">
                            <p className="text-[0.75rem] leading-[1.0875rem]">Anti- Blemish Liquid Makeup Solutions and Face Cream 600ml.</p>
                        </div>
                        <div className="flex items-center gap-3 py-[0.94rem]">
                            <div className="text-[#F5D530] flex">
                                <FontAwesomeIcon className="w-[1rem] h-[1rem]" icon={faStar} />
                                <FontAwesomeIcon className="w-[1rem] h-[1rem]" icon={faStar} />
                                <FontAwesomeIcon className="w-[1rem] h-[1rem]" icon={faStar} />
                                <FontAwesomeIcon className="w-[1rem] h-[1rem]" icon={faStar} />
                                <FontAwesomeIcon className="w-[1rem] h-[1rem]" icon={faStar} />

                            </div>
                            <div className="text-[0.875rem] font-normal leading-[1.25rem] font-[garamond]">
                                <p>(30+ Reviews)</p>
                            </div>
                            
                        </div>
                        <div className="py-[1rem]">
                                <button className="border-[1.5px] border-[#D0D5DD] rounded-[0.5rem] py-[0.5rem] px-[0.75rem] flex gap-3 items-center font-[garamond]">
                                    <FontAwesomeIcon icon={faLock} className="w-[1rem] h-[1rem]"/>
                                    <p className="text-[0.875rem] font-[garamond] leading-[1.26875rem]">Add to Cart</p>
                                </button>
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
