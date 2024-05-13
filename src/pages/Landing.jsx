import { faCaretDown, faCartShopping, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";



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
                   <input type="text" placeholder="Search here" style={{width:"100%"}} /></div> 
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
        </main>
    )
}