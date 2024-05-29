import {  faMinus, faPlus, faCartShopping, faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';

export default function Cart(props){
    const [count, setCount] = useState(1)
    function incrementCount(){
        setCount(prevCount => prevCount + 1);
    }
    function decrementCount(){
        if(count > 0){
            setCount(prevCount => prevCount - 1);
        }
        
     }
    
    return(
        <div className="flex justify-center items-center">
            <div className="md:max-w-[63.3125rem] w-full md:h-[65.375rem] h-screen md:rounded-[1rem] md:px-[6.19rem] px-[1rem] py-[2rem] md:py-[3.31rem] flex flex-col justify-between bg-[#FFF] ">
                <section>
                        <div className="flex justify-between md:mb-[3rem] mb-[1rem] md:px-0 px-[1rem]">
                            <div className="text-[#000]">
                                <p> <FontAwesomeIcon icon={faCartShopping}/> Cart</p>
                            </div>
                            <div>
                                <button onClick={props.close}><FontAwesomeIcon icon={faClose} /></button>
                            </div>
                        </div>
                        <div>
                        <div className="flex md:h-[14.375rem] justify-between px-[1rem] py-[0.2rem] border-[1px] rounded-[0.5rem]">
                            <div className="md:w-[13.125rem] md:h-[14.375rem] w-[7rem] h-[8rem]">
                                <img src="/img/newproduct1.png" />
                            </div>
                            <div className="flex flex-col justify-between md:py-[2rem] py-[1rem]">
                                <div>
                                    <h3 className="md:text-[1.25rem] text-[1rem] font-[garamond] leading-[1.8125rem] text-[#101928]">
                                    Clinique Anti-Blemish Solutions Liquid Makeup 30ml
                                    </h3>
                                </div>
                                <div>
                                    <p className="md:text-[2rem] text-[1rem] font-[garamond] leading-[1.5rem]">$50<sup className="md:text-[1.5rem] ">.00</sup></p>
                                </div>
                                <div>
                                    <p className="text-[0.875rem] text-[#475367] leading-[1.26875rem]">Shade: Black</p>
                                </div>
                                <div className="flex md:px-[1rem] px-[0.5rem] md:py-[0.8rem] py-[0.3rem] md:w-[11rem] w-[6rem] justify-between border-[2px] rounded-[0.5rem] items-center">
                                        <button onClick ={decrementCount}><FontAwesomeIcon className="md:w-[1.5rem] md:h-[1.5rem] w-[0.5rem] h-[1rem]" icon={faMinus} /></button> 
                                        <p>{count}</p>
                                        <button onClick={incrementCount}><FontAwesomeIcon className="md:w-[1.5rem] md:h-[1.5rem] w-[0.5rem] h-[1rem] text-[red]" icon={faPlus} /></button>
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
                    <div className="md:space-y-[1.94rem] space-y-[0.5rem]">
                        <div className="flex justify-between items-center md:py-[0.44rem]">
                            <p className="md:text-[1rem] text-[0.85rem] leading-[1.45rem] text-[#667185]">Subtotal:</p>
                            <p className="md:text-[2rem] text-[1rem] text-[#101928] leading-[1.5rem] font-[700]">$50<sup>.00</sup></p>
                        </div>
                        <div className="flex justify-between items-center py-[0.44rem]">
                            <p className="md:text-[1rem] text-[0.85rem] leading-[1.45rem] text-[#667185]">VAT:</p>
                            <p className="md:text-[2rem] text-[1rem] text-[#101928] leading-[1.5rem] font-[700]">$2<sup>.00</sup></p>
                        </div>
                        <div className="flex justify-between items-center py-[0.44rem]">
                            <p className="md:text-[1rem] text-[0.85rem] leading-[1.45rem] text-[#667185]">Total:</p>
                            <p className="md:text-[2rem] text-[1rem] text-[#101928] leading-[1.5rem] font-[700]">$52<sup>.00</sup></p>
                        </div>
                        <hr />
                        <Link to={`/checkout`}><button className="bg-[#000] w-full py-[1rem] px-[1.5rem] rounded-[1.875rem] text-[#FFF] font-[garamond] text-[1rem]">Checkout</button></Link>
                       <Popup trigger = {<button className="bg-[#FFF] w-full py-[1rem] px-[1.5rem] rounded-[1.875rem] text-[#000] font-[garamond] text-[1rem] border-[1px] border-[#000]">Continue Shopping</button>} modal nested>
                           {close => (
                                <div className="bg-[#000] w-full rounded-[1rem] px-[1rem] py-[1rem]">
                                <div className="px-[2rem] py-[1rem]">
                                    <p className="text-[1rem] text-[#FFF] ">Exit cart?</p>
                                </div>
                            <div className="flex justify-between">
                                <button onClick={props.close} className="bg-[#FFF] px-[1rem] py-[0.7rem] rounded-[0.875rem]">Yes</button>
                                <button onClick={close} className="bg-[#FFF] px-[1rem] py-[0.7rem] rounded-[0.875rem]">No</button>
                            </div>
                            
                            </div>
                           )} 
                       </Popup>
                    </div>
                    
                </section>
                
                
            </div>
        </div>
    )
}

const cartItems = [];