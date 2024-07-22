const CartItem = ({cartItem}) => {
    const {productname,img, description, price, quantity} = cartItem;
    return (
        <div>
             <div className="flex md:h-[8rem] justify-between items-center px-[1rem]  border-[1px] rounded-[0.5rem]">
             <div className="flex justify-center items-center gap-1 text-[#000] w-[10%] px-2">
                <span>({quantity})</span>
                <span>X</span>
             </div>
                            <div className="md:w-[7rem] md:h-[7rem] w-[7rem] h-[8rem]  ">
                                <img className="flex items-center object-contain w-full h-full " src={img} alt={`${productname}`}/>
                            </div>
                            <div className="flex flex-col justify-between md:py-[1rem] py-[1rem] text-[#000] w-[70%]">
                                <div>
                                    <h3 className="md:text-[1.5rem] text-[1rem] font-[garamond] leading-[1.8125rem] capitalize">
                                    {productname}
                                    </h3>
                                    <p className="text-[0.7rem]">{description}</p>
                                </div>
                                <div>
                                    <p className="md:text-[0.9rem] text-[1rem] font-[garamond] leading-[1.5rem]">${price}</p>
                                </div>                                
                            </div>
                           
                        </div>
        </div>
    )
}

export default CartItem;