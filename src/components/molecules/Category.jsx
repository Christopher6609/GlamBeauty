/* eslint-disable react/prop-types */
export default function Category({img}){
    return(
        <div>
            <div className="w-[18.4375rem] h-[14.5625rem]">
                <img src={img} className="object-contain w-full h-full" alt="img" />
            </div>
        </div>
    )
}