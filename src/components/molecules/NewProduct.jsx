/* eslint-disable react/prop-types */
import { faLock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function NewProduct({ img, productname,price, productdescription, reviews}){
    return(
        <>
           
                <div className="md:w-[17.875rem] w-[7rem] md:p-3 p-1 md:border-[2px] border-[1px] rounded-[0.5rem] mt-2">
                            <div className="md:w-[18.4375rem] md:h-[14.5625rem] py-[1rem]">
                                <img className="object-contain w-full h-full" src={img} alt="img1" />
                            </div>
                            <div className="flex justify-between items-center text-[#101928] py-[0.12rem]">
                               <h2 className="uppercase md:text-[1rem] text-[0.7rem] font-[garamond]  md:leading-[1.5rem] font-normal h-[2rem] overflow-hidden">{productname}</h2>
                                <h5 className="font-bold md:text-[0.75rem] text-[0.5rem] leading-[1.0875rem]"><sup>$</sup>{price}</h5>
                            </div>
                            <div className="text-[#1D2739] h-[3rem]">
                                <p className="md:text-[0.75rem] text-[0.5rem] leading-[1.0875rem]">{productdescription}</p>
                            </div>
                            <div className="flex items-center gap-3 md:py-[0.94rem]">
                                <div className="text-[#F5D530] flex">
                                    <FontAwesomeIcon className="md:w-[1rem] md:h-[1rem] w-[0.5rem] h-[0.5rem]" icon={faStar} />
                                    <FontAwesomeIcon className="md:w-[1rem] md:h-[1rem] w-[0.5rem] h-[0.5rem]" icon={faStar} />
                                    <FontAwesomeIcon className="md:w-[1rem] md:h-[1rem] w-[0.5rem] h-[0.5rem]" icon={faStar} />
                                    <FontAwesomeIcon className="md:w-[1rem] md:h-[1rem] w-[0.5rem] h-[0.5rem]" icon={faStar} />
                                    <FontAwesomeIcon className="md:w-[1rem] md:h-[1rem] w-[0.5rem] h-[0.5rem]" icon={faStar} />

                                </div>
                                <div className="md:text-[0.875rem] text-[0.5rem] font-normal leading-[1.25rem] font-[garamond]">
                                    <p>({reviews})</p>
                                </div>
                                
                            </div>
                            <div className="py-[1rem]">
                                    <button className="border-[1.5px] border-[#D0D5DD] md:rounded-[0.5rem] rounded-[0.2rem] md:py-[0.5rem] py-[0.3rem] md:px-[0.75rem] px-[0.5rem] flex md:gap-3  gap-1 font-[garamond]">
                                        <FontAwesomeIcon icon={faLock} className="md:w-[1rem] w-[0.5rem] md:h-[1rem] h-[0.5rem]"/>
                                        <p className="md:text-[0.875rem] text-[0.5rem] font-[garamond] md:leading-[1.26875rem]">Add to Cart</p>
                                    </button>
                                </div>
                            
                        </div>
                        
        </>
    )
}
