import { faCaretDown, faCartShopping, faChevronDown, faEnvelope, faPhone, faSearch, faX, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Category from "../components/molecules/Category";
import { Outlet, Link } from "react-router-dom";
import Heading from "../components/molecules/Heading";
import Footer from "../components/molecules/Footer";


export default function Layout(){
    return (
        <>  

        <div className="">
            <Heading />

            <Outlet />
            <section>
                <div className="max-w-[1440px] mx-auto">
                    <div className="md:px-[6.44rem] px-[1rem] md:pt-[3rem] pt-[1rem]">
                        <div className="border-b-[3px] md:w-[9rem] w-[7rem] md:pb-2">
                                <h3 className="md:text-[1.25rem] font-[garamond] font-normal text-[#333] md:leading-[1.25rem]">Shop By Brands</h3>    
                        </div>
                         
                    </div>
                    <div className="flex justify-between items-center md:px-[6.44rem] px-[1rem] md:py-[2.5rem] py-[1rem]">
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
            <Footer />
            </div>
        </>
    )
}

const categoryimage=[
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