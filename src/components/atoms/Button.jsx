/* eslint-disable react/prop-types */
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({style, text}){
    return(
        <div>
            <button className=" font-[garamond] h-[3rem] w-[8.4374rem] gap-[0.625rem] rounded-[0.5rem]" style={style}>{text} <FontAwesomeIcon icon ={faCaretDown} className="w-[1.25rem] h-[1.25rem]" /></button>
        </div>
    )
}