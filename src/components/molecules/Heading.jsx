import { faClose, faCaretDown, faChevronDown, faEnvelope, faPhone, faSearch, faShoppingBag, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faBoxOpen, faCreditCard, faHeadset, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import {  faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
//import Cart from "../../pages/Cart";
import { useState } from "react";

import Popup from 'reactjs-popup';

export default function Heading(){

    const [count, setCount] = useState(1)
    function incrementCount(){
        setCount(prevCount => prevCount + 1);
    }
    function decrementCount(){
        if(count > 0){
            setCount(prevCount => prevCount - 1);
        }
        
     }
    return (
        <div>
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
                       
                        <input type="text" placeholder="Search here" className="text-black rounded-[0.375rem] w-full py-[0.5rem] pl-[30px] text-[0.875rem]"/>
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
                        <p className="text-[0.75rem] px-[0.5rem]">Cart</p></button>} modal>
                            {close => (
                                <div className="modal">
                                   <div className="max-w-[63.3125rem] h-[65.375rem] rounded-[1rem] px-[6.19rem] py-[3.31rem] flex flex-col justify-between bg-[#FFF] ">
                <section>
                        <div className="flex justify-between mb-[3rem]">
                            <div className="">
                                <p> <FontAwesomeIcon icon={faCartShopping}/> Cart</p>
                            </div>
                            <div>
                                <button onClick={close}><FontAwesomeIcon icon={faClose} /></button>
                            </div>
                        </div>
                        <div>
                        <div className="flex h-[14.375rem] justify-between px-[1rem] py-[0.2rem] border-[1px] rounded-[0.5rem]">
                            <div className="w-[13.125rem] h-[14.375rem]">
                                <img src="/img/newproduct1.png" />
                            </div>
                            <div className="flex flex-col justify-between py-[2rem]">
                                <div>
                                    <h3 className="text-[1.25rem] font-[garamond] leading-[1.8125rem] text-[#101928]">
                                    Clinique Anti-Blemish Solutions Liquid Makeup 30ml
                                    </h3>
                                </div>
                                <div>
                                    <p className="text-[2rem] font-[garamond] leading-[1.5rem]">$50<sup className="text-[1.5rem]">.00</sup></p>
                                </div>
                                <div>
                                    <p className="text-[0.875rem] text-[#475367] leading-[1.26875rem]">Shade: Black</p>
                                </div>
                                <div className="flex px-[1rem] md:py-[0.8rem] py-[0.5rem] md:w-[11rem] w-[8rem] justify-between border-[2px] rounded-[0.5rem] items-center">
                                        <button onClick ={decrementCount}><FontAwesomeIcon className="md:w-[1.5rem] md:h-[1.5rem] w-[1rem] h-[1rem]" icon={faMinus} /></button> 
                                        <p>{count}</p>
                                        <button onClick={incrementCount}><FontAwesomeIcon className="w-[1.5rem] h-[1.5rem] text-[red]" icon={faPlus} /></button>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <button><FontAwesomeIcon icon={faTrash} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="space-y-[1.94rem]">
                        <div className="flex justify-between items-center py-[0.44rem]">
                            <p className="text-[1rem] leading-[1.45rem] text-[#667185]">Subtotal:</p>
                            <p className="text-[2rem] text-[#101928] leading-[1.5rem] font-[700]">$50<sup>.00</sup></p>
                        </div>
                        <div className="flex justify-between items-center py-[0.44rem]">
                            <p className="text-[1rem] leading-[1.45rem] text-[#667185]">VAT:</p>
                            <p className="text-[2rem] text-[#101928] leading-[1.5rem] font-[700]">$2<sup>.00</sup></p>
                        </div>
                        <div className="flex justify-between items-center py-[0.44rem]">
                            <p className="text-[1rem] leading-[1.45rem] text-[#667185]">Total:</p>
                            <p className="text-[2rem] text-[#101928] leading-[1.5rem] font-[700]">$52<sup>.00</sup></p>
                        </div>
                        <hr />
                        <button className="bg-[#000] w-full py-[1rem] px-[1.5rem] rounded-[1.875rem] text-[#FFF] font-[garamond] text-[1rem]">Checkout</button>
                        <button className="bg-[#FFF] w-full py-[1rem] px-[1.5rem] rounded-[1.875rem] text-[#000] font-[garamond] text-[1rem] border-[1px] border-[#000]">Continue Shopping</button>
                    </div>
                    
                </section>
                
                
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