import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCartPlus, faCircleArrowLeft, faCircleArrowRight, faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import {Product} from "./Landing";
import { useContext } from "react";
import {CartContext} from "../components/context/CartContext"



   export default function ProductDetails(){
        
        
    
         const params = useParams();

    
    const getProduct = Product.find((product) => product.id === params.id);
    const {addItemToCart, reduceItemFromCart} = useContext(CartContext);
    const addProductToCart = () => addItemToCart(getProduct);

    return (
        < >
            <section className="md:py-[4.41rem] py-[2rem] px-[1rem] md:px-[6.31rem] max-w-[1440px] mx-auto">
                <div className="md:flex items-center justify-center">
                    <div className="flex md:block justify-center">
                        <div className="md:w-[7.625rem] w-[3rem] md:h-[6.6125rem] h-[2.5rem]">
                                <img className="object-contain w-full h-full" src="/img/Rectangle 523.png" alt="image" />
                        </div>
                        <div className="md:w-[7.625rem] w-[3rem] md:h-[6.6125rem] h-[2.5rem]">
                                <img className="object-contain w-full h-full" src="/img/Rectangle 524.png" alt="image" />
                        </div>
                        <div className="md:w-[7.625rem] w-[3rem] md:h-[6.6125rem] h-[2.5rem]">
                                <img className="object-contain w-full h-full" src="/img/Rectangle 525.png" alt="image" />
                        </div>
                        <div className="md:w-[7.625rem] w-[3rem] md:h-[6.6125rem] h-[2.5rem]">
                                <img className="object-contain w-full h-full" src="/img/Rectangle 527.png" alt="image" />
                        </div>
                        <div className="md:w-[7.625rem] w-[3rem] md:h-[6.6125rem] h-[2.5rem]">
                                <img className="object-contain w-full h-full" src="/img/Rectangle 528.png" alt="image" />
                        </div>
                    </div>
                    <div>
                        <div className="md:w-[29rem] w-full md:h-[38.0625rem]">
                            <img className="object-contain w-full h-full" src={getProduct.img} alt="image" />
                        </div>
                    </div>
                    <div>
                        <div className=" space-y-[1.13rem] mt-5 md:mt-0">
                            <div className="space-y-[1.13rem] text-center md:text-start">
                            <h1 className="md:text-[2rem] text-[1.5rem] font-[garamond] text-[#101928] font-normal leading-[2.4rem] tracking-[-0.04rem] uppercase ">
                                {getProduct.productname}
                            </h1>
                            <p className="text-[0.875rem] text-[#1D2739] font-[garamond] leading-[1.26875rem]  ">
                              {getProduct.details}   
                            </p>
                            </div>
                            
                                    <div className="flex items-center gap-3 md:py-[0.94rem]">
                                        <div className="text-[#F5D530] flex">
                                            <FontAwesomeIcon className="w-[1rem] h-[1rem]" icon={faStar} />
                                            <FontAwesomeIcon className="w-[1rem] h-[1rem]" icon={faStar} />
                                            <FontAwesomeIcon className="w-[1rem] h-[1rem]" icon={faStar} />
                                            <FontAwesomeIcon className="w-[1rem] h-[1rem]" icon={faStar} />
                                            <FontAwesomeIcon className="w-[1rem] h-[1rem]" icon={faStar} />

                                        </div>
                                    <div className="text-[0.875rem] font-normal leading-[1.25rem] font-[garamond]">
                                        <p>{getProduct.reviews}</p>
                                    </div>
                                    
                                </div>
                                <div>
                                    <p className="md:text-[2rem] text-[1.5rem] font-[garamond] md:leading-[1.5rem] font-normal text-[#101928]">{getProduct.price}<sup className="md:text-[1.5rem] text-[1rem] ">.00</sup></p>
                                </div>
                                <div className="space-y-[0.25rem]">
                                    <label htmlFor="shades" className="md:text-[1.25rem] text-[1rem] font-[garamond] leading-[1.5rem] tracking-[-0.025rem]">Choose Shade:</label>
                                    <select name ="shades" className="w-full px-[0.63rem] py-[0.53rem] border">
                                        <option>Skincare</option>
                                        <option>Make Up</option>
                                        <option>Hair</option>
                                        <option>Nails</option>
                                        <option>Bodycare</option>
                                    </select>
                                </div>
                                <div>
                                    <h3 className="md:text-[1.25rem] text-[1rem] font-[garamond] leading-[1.5rem] tracking-[-0.025rem]">Choose Shade:</h3>
                                    <div className="flex gap-[0.25rem]">
                                        <div className="md:w-[4.25rem] w-[2rem] md:h-[2.5625rem] h-[2rem]">
                                            <img className="object-contain w-full h-full" src="/img/Rectangle 530.png" alt="image" />
                                        </div>
                                        <div className="md:w-[4.25rem] w-[2rem] md:h-[2.5625rem] h-[2rem]">
                                            <img className="object-contain w-full h-full" src="/img/Rectangle 531.png" alt="image" />
                                        </div>
                                        <div className="md:w-[4.25rem] w-[2rem] md:h-[2.5625rem] h-[2rem]">
                                            <img className="object-contain w-full h-full" src="/img/Rectangle 532.png" alt="image" />
                                        </div>
                                        <div className="md:w-[4.25rem] w-[2rem] md:h-[2.5625rem] h-[2rem]">
                                            <img className="object-contain w-full h-full" src="/img/Rectangle 533.png" alt="image" />
                                        </div>
                                        <div className="md:w-[4.25rem] w-[2rem] md:h-[2.5625rem] h-[2rem]">
                                            <img className="object-contain w-full h-full" src="/img/Rectangle 534.png" alt="image" />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div>
                                    {/* <h3 className="md:text-[1.25rem] text-[1rem] font-[garamond] md:leading-[1.5rem] tracking-[-0.025rem]">Quantity:</h3>
                                    <div>
                                        <div className="flex items-center gap-[1rem]">
                                            <div className="flex px-[1rem] md:py-[1.12rem] py-[0.5rem] md:w-[11rem] w-[8rem] justify-between border-[2px] rounded-[0.5rem] items-center">
                                               <button onClick ={()=>{}}><FontAwesomeIcon className="md:w-[1.5rem] md:h-[1.5rem] w-[1rem] h-[1rem]" icon={faMinus} /></button> 
                                                <p>{}</p>
                                                <button onClick={addProductToCart}><FontAwesomeIcon className="w-[1.5rem] h-[1.5rem] text-[red]" icon={faPlus} /></button>
                                            </div>
                                            
                                        
                                        </div> 
                                    </div>*/}
                                    <button onClick={addProductToCart} className="bg-[#000] text-[#FFF] w-[9.375rem] h-[2.75rem] rounded-[0.5rem] gap-[0.625rem] font-[garamond] flex items-center justify-center"> <FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
                                </div> 

                        </div>
                    </div>
                </div>

            </section>
        <section className="bg-[#FEEFE2] md:px-[6.31rem] px-[1rem]">
            <div className="flex flex-col justify-center items-center md:py-[4.75rem] py-[1.5rem]">
                <div className="text-center md:space-y-[0.75rem]">
                    <h2 className="text-[1rem] font-[garamond] font-normal leading-[1.5rem]">Testimonials</h2>
                    <h1 className="md:text-[2.25rem] text-[1.5rem] font-[garamond] md:leading-[2.75rem] tracking-[-0.045rem] font-normal">Reviews on Product</h1>
                </div>
                <div className="flex justify-between w-full md:mt-[5.38rem] mt-[2rem] items-center">
                    <div>
                        <FontAwesomeIcon className="md:w-[2.0625rem] md:h-[4.9375rem]" icon={faCircleArrowLeft} />
                    </div>
                    <div className="flex flex-col justify-center items-center md:w-[57.25rem]">
                        <div className="w-[4.25rem] h-[2.5625rem]">
                            <img className="object-contain w-full h-full" src="/img/Avatar.png" alt="image" />
                        </div>
                        <div className="text-center">
                            <h3 className="md:text-[1.125rem] text-[0.875rem] font-[garamond] leading-[1.75rem] text-[#292D32] font-normal">Caitlyn King</h3>
                            <h5 className="md:text-[1rem] text-[0.6rem] font-[garamond] leading-[1.5rem] text-[#17191C] font-normal">United Kingdom</h5>
                        </div>
                        <div className="md:py-[2rem] py-[1rem] text-center">
                            <p className="md:text-[1rem] text-[0.8rem] font-[garamond] leading-[1.5rem] text-[#17191C] font-normal">Being a part of the TrusselTrust community has been an incredibly rewarding experience. Witnessing firsthand the impact of their efforts in combating hunger within our community has been nothing short of inspiring. Not only does TrusselTrust provide essential nourishment to those in need, but they also offer hope and support to individuals and families facing difficult times.</p>
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon className="md:w-[2.0625rem] md:h-[4.9375rem]" icon={faCircleArrowRight} />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}