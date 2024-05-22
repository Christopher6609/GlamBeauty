/* eslint-disable react/prop-types */
export default function Category({img}){
    return(
        <div className="md:py-2 py-1">
            <div className="md:w-[18.4375rem] w-[7rem] md:h-[14.5625rem]">
                <img src={img} className="object-contain w-full h-full" alt="img" />
            </div>
        </div>
    )
}