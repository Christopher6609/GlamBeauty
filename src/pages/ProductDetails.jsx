import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCartPlus, faCircleArrowLeft, faCircleArrowRight, faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
const params = useParams();


    return (
        < >
            <section className="py-[4.41rem] px-[6.31rem]">
                <div className="flex items-center">
                    <div>
                        <div className="w-[7.625rem] h-[6.6125rem]">
                                <img className="object-contain w-full h-full" src="/img/Rectangle 523.png" alt="image" />
                        </div>
                        <div className="w-[7.625rem] h-[6.6125rem]">
                                <img className="object-contain w-full h-full" src="/img/Rectangle 524.png" alt="image" />
                        </div>
                        <div className="w-[7.625rem] h-[6.6125rem]">
                                <img className="object-contain w-full h-full" src="/img/Rectangle 525.png" alt="image" />
                        </div>
                        <div className="w-[7.625rem] h-[6.6125rem]">
                                <img className="object-contain w-full h-full" src="/img/Rectangle 527.png" alt="image" />
                        </div>
                        <div className="w-[7.625rem] h-[6.6125rem]">
                                <img className="object-contain w-full h-full" src="/img/Rectangle 528.png" alt="image" />
                        </div>
                    </div>
                    <div>
                        <div className="w-[29rem] h-[38.0625rem]">
                            <img className="object-contain w-full h-full" src="" alt="image" />
                        </div>
                    </div>
                    <div>
                        <div className=" space-y-[1.13rem]">
                            <div className="space-y-[1.13rem]">
                            <h1 className="text-[2rem] font-[garamond] text-[#101928] font-normal leading-[2.4rem] tracking-[-0.04rem] uppercase ">
                                {params.productname}
                            </h1>
                            <p className="text-[0.875rem] text-[#1D2739] font-[garamond] leading-[1.26875rem]  ">
                                Experience Clinique&apos;s Anti Blemish Solutions Liquid Makeup, a weightless foundation offering natural to moderate coverage, specially crafted for those with oily or blemish-prone skin. Dermatologist-tested and featuring salicylic acid, this oil-free foundation not only conceals but actively works to clear and prevent blemishes. Skin-soothing elements like red algae extract, licorice, and caffeine are added to reduce redness.    
                            </p>
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
                                <div>
                                    <p className="text-[2rem] font-[garamond] leading-[1.5rem] font-normal text-[#101928]">$50<sup className="text-[1.5rem]">.00</sup></p>
                                </div>
                                <div className="space-y-[0.25rem]">
                                    <label htmlFor="shades" className="text-[1.25rem] font-[garamond] leading-[1.5rem] tracking-[-0.025rem]">Choose Shade</label>
                                    <select name ="shades" className="w-full px-[0.63rem] py-[0.53rem] border">
                                        <option>Skincare</option>
                                        <option>Make Up</option>
                                        <option>Hair</option>
                                        <option>Nails</option>
                                        <option>Bodycare</option>
                                    </select>
                                </div>
                                <div>
                                    <h3 className="text-[1.25rem] font-[garamond] leading-[1.5rem] tracking-[-0.025rem]">Choose Shade</h3>
                                    <div className="flex gap-[0.25rem]">
                                        <div className="w-[4.25rem] h-[2.5625rem]">
                                            <img className="object-contain w-full h-full" src="/img/Rectangle 530.png" alt="image" />
                                        </div>
                                        <div className="w-[4.25rem] h-[2.5625rem]">
                                            <img className="object-contain w-full h-full" src="/img/Rectangle 531.png" alt="image" />
                                        </div>
                                        <div className="w-[4.25rem] h-[2.5625rem]">
                                            <img className="object-contain w-full h-full" src="/img/Rectangle 532.png" alt="image" />
                                        </div>
                                        <div className="w-[4.25rem] h-[2.5625rem]">
                                            <img className="object-contain w-full h-full" src="/img/Rectangle 533.png" alt="image" />
                                        </div>
                                        <div className="w-[4.25rem] h-[2.5625rem]">
                                            <img className="object-contain w-full h-full" src="/img/Rectangle 534.png" alt="image" />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[1.25rem] font-[garamond] leading-[1.5rem] tracking-[-0.025rem]">Quantity</h3>
                                    <div>
                                        <div className="flex items-center gap-[1rem]">
                                            <div className="flex px-[1rem] py-[1.12rem] w-[11rem] justify-between border-[2px] rounded-[0.5rem] items-center">
                                                <FontAwesomeIcon className="w-[1.5rem] h-[1.5rem]" icon={faMinus} />
                                                <p>2</p>
                                                <FontAwesomeIcon className="w-[1.5rem] h-[1.5rem] text-[red]" icon={faPlus} />
                                            </div>
                                            <button className="bg-[#000] text-[#FFF] w-[9.375rem] h-[2.75rem] rounded-[0.5rem] gap-[0.625rem] font-[garamond] flex items-center justify-center"> <FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

            </section>
        <section className="bg-[#FEEFE2] px-[6.31rem]">
            <div className="flex flex-col justify-center items-center py-[4.75rem]">
                <div className="text-center space-y-[0.75rem]">
                    <h2 className="text-[1rem] font-[garamond] font-normal leading-[1.5rem]">Testimonials</h2>
                    <h1 className="text-[2.25rem] font-[garamond] leading-[2.75rem] tracking-[-0.045rem] font-normal">Reviews on Product</h1>
                </div>
                <div className="flex justify-between w-full mt-[5.38rem] items-center">
                    <div>
                        <FontAwesomeIcon className="w-[2.0625rem] h-[4.9375rem]" icon={faCircleArrowLeft} />
                    </div>
                    <div className="flex flex-col justify-center items-center w-[57.25rem]">
                        <div className="w-[4.25rem] h-[2.5625rem]">
                            <img className="object-contain w-full h-full" src="/img/Avatar.png" alt="image" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-[1.125rem] font-[garamond] leading-[1.75rem] text-[#292D32] font-normal">Caitlyn King</h3>
                            <h5 className="text-[1rem] font-[garamond] leading-[1.5rem] text-[#17191C] font-normal">United Kingdom</h5>
                        </div>
                        <div className="py-[2rem] text-center">
                            <p className="text-[1rem] font-[garamond] leading-[1.5rem] text-[#17191C] font-normal">Being a part of the TrusselTrust community has been an incredibly rewarding experience. Witnessing firsthand the impact of their efforts in combating hunger within our community has been nothing short of inspiring. Not only does TrusselTrust provide essential nourishment to those in need, but they also offer hope and support to individuals and families facing difficult times.</p>
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon className="w-[2.0625rem] h-[4.9375rem]" icon={faCircleArrowRight} />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default ProductDetails;