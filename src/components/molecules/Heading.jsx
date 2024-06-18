import { faCaretDown, faChevronDown, faEnvelope, faPhone, faSearch, faShoppingBag,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import Cart from "../../pages/Cart";
import Popup from 'reactjs-popup';

export default function Heading(){



    return (
        <div className="">
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
                        <Link to={`/Home`}><img className="object-contain w-full h-full" src={"/img/LOGO.png"} alt="logo"/></Link> 
                        </div>
                    </div>
                    <div>
                   <div className="h-[2.25rem] w-[31.5rem] py-[0.5rem] px-[0.75rem] md:flex items-center relative hidden "> 
                        <FontAwesomeIcon icon={faSearch} className="absolute px-2 text-black"/>
                       
                        <input type="search" placeholder="Search here" className="text-black rounded-[0.375rem] w-full py-[0.5rem] pl-[30px] text-[0.875rem]"/>
                   </div> 
                </div>
                <div className="flex items-center md:space-x-6 space-x-2">
                   {/* <div className="flex items-center">
                        <button className="flex"><FontAwesomeIcon icon={faShoppingBag} className="md:w-[1.5rem] md:h-[1.5rem] w-[0.95rem] "/>
                        <sup>0</sup>
                        <p className="text-[0.75rem] px-[0.5rem]" onClick={openCart}>Cart</p></button>

                   </div> */}
                   <Popup trigger={<button className="flex"><FontAwesomeIcon icon={faShoppingBag} className="md:w-[1.5rem] md:h-[1.5rem] w-[0.95rem] "/>
                        <sup>0</sup>
                        <p className="text-[0.75rem] px-[0.5rem]">Cart</p></button>} modal nested>
                            {close => (
                                <div className="modal">
                                    <Cart close={close} />
                                    <div className="">
                                    </div>
                                </div>
                            )}
                   </Popup>
                   <div className="flex items-center">
                        <FontAwesomeIcon icon={faCircleUser} className="md:w-[1.5rem] md:h-[1.5rem] w-[0.95rem]"/>
                        <p className="text-[0.75rem] px-[0.5rem]">My Account</p>
                        <FontAwesomeIcon icon={faChevronDown} className="w-[1rem] h-[1rem] hidden md:block" />
                   </div>
                </div>

            </div>
            <div className="w-full h-[4.5rem] bg-[#800020] md:flex items-center text-white px-[15.5rem] hidden ">
                
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
        </div>
    )
}