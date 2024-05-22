import { faCaretDown, faCartShopping, faChevronDown, faEnvelope, faPhone, faSearch, faX, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Category from "../components/molecules/Category";
import { Outlet, Link } from "react-router-dom";


export default function Layout(){
    return (
        <>  

        <div className="max-w-[1440px] ">
        <div className="md:h-[4.5rem] h-[2rem] bg-[#121212] flex justify-end space-x-[0.75rem] md:space-x-[7.31rem] px-[1rem] md:px-[6.31rem] ">
                    <div className="text-[#FFF] flex items-center md:space-x-[3rem]">
                        <marquee> <p className=" text-[0.5rem] md:text-[0.75rem] leading-[-0.00375rem] ">Upto 50% off Selected Brands + Free UK delivery on Orders above $10</p></marquee> 
                        <a href="#" className="md:text-[0.75rem] text-[0.5rem] leading-[1.00375rem] tracking-[-0.00375rem] hidden md:block">Shop Now</a>
                    </div>
                    <div className="flex items-center text-[#FFF] md:space-x-[1.75rem] space-x-[0.75rem] font-[inter] md:text-[0.75rem] text-[0.5rem]">
                        <p><FontAwesomeIcon icon={faPhone} />+1 2345 56768</p>
                        <p className="hidden md:block">EN <FontAwesomeIcon icon={faCaretDown}/></p>
                        <div className="flex gap-[0.2rem] items-center md:gap-[0.5rem]">
                            <div>
                                <img src="/img/Frame.png" />
                            </div>
                            <p>United Kingdom <FontAwesomeIcon icon={faCaretDown}/></p>
                        </div>
                    </div>
            </div>
            <div className="w-full md:h-[4.5rem] h-[3rem] bg-[#212121] flex items-center text-white justify-between px-[1rem] md:px-[6.31rem]">
                <div className="">
                    <div className="md:w-[12.44513rem] md:h-[1.44rem] w-[6rem] h-[1.44rem]">
                       <Link to={`/`}><img className="object-contain w-full h-full" src={"/img/LOGO.png"} alt="logo"/></Link> 
                    </div>
                </div>
                <div>
                   <div className="h-[2.25rem] w-[31.5rem] py-[0.5rem] px-[0.75rem] md:flex items-center relative hidden "> 
                        <FontAwesomeIcon icon={faSearch} className="absolute px-2 text-black"/>
                        <input type="text" placeholder="Search here" className="text-black rounded-[0.375rem] w-full py-[0.5rem] pl-[30px] text-[0.875rem]"/>
                   </div> 
                </div>
                <div className="flex items-center md:space-x-6 space-x-2">
                   <div className="flex items-center">
                        <FontAwesomeIcon icon={faCartShopping} className="md:w-[1.5rem] md:h-[1.5rem] w-[0.95rem] "/>
                        <p className="text-[0.75rem] px-[0.5rem]">Cart</p>
                   </div>
                   <div className="flex items-center">
                        <FontAwesomeIcon icon={faCircleUser} className="md:w-[1.5rem] md:h-[1.5rem] w-[0.95rem]"/>
                        <p className="text-[0.75rem] px-[0.5rem]">My Account</p>
                        <FontAwesomeIcon icon={faChevronDown} className="w-[1rem] h-[1rem] hidden md:block" />
                   </div>
                </div>

            </div>


            <div className="w-full h-[4.5rem] bg-[#800020] md:flex items-center text-white px-[15.5rem] hidden">
                
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

            <Outlet />
            <section>
                <div className="max-w-[1440px] mx-auto">
                    <div className="md:px-[6.44rem] px-[1rem]">
                        <h3 className="text-[1.25rem font-[garamond] font-normal text-[#333] md:leading-[1.25rem] ">Shop By Brands</h3>     
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
                <div className="md:px-[6.44rem] px-[1rem] max-w-[1440px] mx-auto pt-[1.5rem] md:pt-[4.94rem]">
                <div className="md:px-[6.44rem] px-[1rem]">
                        <h3 className="text-[1.25rem font-[garamond] font-normal text-[#333] md:leading-[1.25rem] ">Shop By Categories</h3>     
                    </div>
                    <div className="flex flex-wrap justify-between md:py-[2.5rem] py-[1rem]">
                        {categoryimage.map((item)=>(
                            <Category key={item.id} img={item.img} />
                        ))}
                    </div>
                </div>
                    
                    
            </section>
                    
            <section className="bg-[#800020] md:h-[38.375rem] h-[15rem]">
                <div className="flex h-full max-w-[1440px] mx-auto  md:px-[6.25rem] px-[1rem]">
                    <div className="flex flex-col justify-center h-full">
                        <div className="">
                            <h2 className="md:text-[3.75rem] text-[1.5rem] font-normal md:leading-[3.9375rem] font-[garamond] text-[#FFFFFF]">
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
            <footer className="bg-[#000] text-[#FFF]">
                <div className="md:pt-[3.12rem] pt-[1.5rem] max-w-[1440px] mx-auto  md:px-[6.19rem] px-[1rem]">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="font-[garamond] md:text-[1.875rem] text-[1.5rem] font-normal leading-[2.375rem] uppercase">Be the first!</h2>
                        <p className="md:text-[1rem] text-[0.5rem] color-[#DFDFDF] font-[400] leading-[1.875rem] font-[inter]">Sign up now to receive the latest news, offers and exclusive drops</p>
                    </div>
                    <div className="flex gap-[1rem] justify-center items-center mt-[1.25rem] ">
                        <form>
                            <input type="text" placeholder="Enter your email" name="subscribe" className="md:w-[22.5rem] md:h-[3rem] rounded-[0.5rem] border-[#D0D5DD] text-[#000] px-[0.875rem] py-[0.75rem]" />
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
    </div>
        </>
    )
}

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