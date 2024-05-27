import {  faMinus, faPlus, faCartShopping, faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Cart(){
    // const [count, setCount] = useState(1)
    // function incrementCount(){
    //     setCount(prevCount => prevCount + 1);
    // }
    // function decrementCount(){
    //     if(count > 0){
    //         setCount(prevCount => prevCount - 1);
    //     }
        
    //  }
    
    return(
        <div className="flex justify-center items-center">
            {/* <div className="max-w-[63.3125rem] h-[65.375rem] rounded-[1rem] px-[6.19rem] py-[3.31rem] flex flex-col justify-between bg-[#FFF] ">
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
                
                
            </div> */}
        </div>
    )
}