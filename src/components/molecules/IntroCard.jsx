/* eslint-disable react/prop-types */


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function IntroCard({text, subtext, icon}){
    return(
        <div className="text-[#FFFFFF] w-[15.5rem] space-y-[0.38rem]">
            <div className="w-[2.75rem] h-[2.75rem] bg-[#FFF4F0] rounded-[1.875rem] flex justify-center items-center">
                <div>
                <FontAwesomeIcon icon={icon} className="text-black" />
                </div>
            </div>
            <h3 className="text-[1rem] font-[600] leading-[1.81rem]">
               {text}
            </h3>
            <p className="text-[0.875rem] font-[400] leading-[1.26rem]">
                 {subtext}
            </p>
            </div>
    
    );

}               