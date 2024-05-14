/* eslint-disable react/prop-types */
import { faLock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewProduct({img, productname,price, productdescription, reviews}){
    return(
        <>
            <div className="w-[17.875rem]">
                            <div className="w-[18.4375rem] h-[14.5625rem] py-[1rem]">
                                <img className="object-contain w-full h-full" src={img} alt="img1" />
                            </div>
                            <div className="flex justify-between text-[#101928] py-[0.12rem]">
                                <h2 className="uppercase text-[1rem] font-[garamond]  leading-[1.5rem] font-normal">{productname}</h2>
                                <h5 className="font-bold text-[0.75rem] leading-[1.0875rem]"><sup>$</sup>{price}</h5>
                            </div>
                            <div className="text-[#1D2739] h-[3rem]">
                                <p className="text-[0.75rem] leading-[1.0875rem]">{productdescription}</p>
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
                                    <p>({reviews})</p>
                                </div>
                                
                            </div>
                            <div className="py-[1rem]">
                                    <button className="border-[1.5px] border-[#D0D5DD] rounded-[0.5rem] py-[0.5rem] px-[0.75rem] flex gap-3 items-center font-[garamond]">
                                        <FontAwesomeIcon icon={faLock} className="w-[1rem] h-[1rem]"/>
                                        <p className="text-[0.875rem] font-[garamond] leading-[1.26875rem]">Add to Cart</p>
                                    </button>
                                </div>
                            
                        </div>
        </>
    )
}
