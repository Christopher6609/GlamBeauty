/* eslint-disable react/prop-types */


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function IntroCard({text, subtext, icon}){
    return(
        <div className="text-[#FFFFFF] md:w-[15.5rem] md:space-y-[0.38rem] ">
            <div>
                <div className="md:w-[2.75rem] w-[1.5rem] md:h-[2.75rem] h-[1.5rem] bg-[#FFF4F0] rounded-[1.875rem] flex justify-center items-center ">
                    <div>
                    <FontAwesomeIcon icon={icon} className="text-black w-[1rem] h-[1rem] " />
                    </div>
                </div>
                <h3 className="md:text-[1rem] text-[0.6rem] md:font-[600] md:leading-[1.81rem]">
                {text}
                </h3>
            </div>
            
            <p className="md:text-[0.875rem] font-[400] leading-[1.26rem] hidden md:block">
                 {subtext}
            </p>
            </div>
    
    );

}               