import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const CheckoutItem = ({cartItem}) => {
    const {productname, quantity, img, price} = cartItem;


    const {addItemToCart, reduceItemFromCart, removeItemFromCart} = useContext(CartContext);

    const increaseItemQuantity = () => addItemToCart(cartItem);
    const reduceItemQuantity = () => reduceItemFromCart(cartItem);
    const clearItemFromCartHandler = () => removeItemFromCart(cartItem);

    return(
        <div className="flex sm:h-[10.8125rem] md:w-[45.25rem] justify-between items-center sm:px-[1rem]  py-[0.2rem]">
            <div className="flex text-[1.5rem]">
            <div  onClick={reduceItemQuantity} className=" hover:cursor-pointer">
                &#10094;
            </div>
            <span className="px-[1rem]">{quantity}</span>
            <div  onClick={increaseItemQuantity} className=" hover:cursor-pointer">
            &#10095;
            </div>

            </div>
            <div className="sm:w-[13.125rem] sm:h-[10.8125rem] w-[5rem] h-[5rem] border-[1px] rounded-[0.625rem] border-[#EAECF0]">
                <img className="object-contain w-full h-full " src={img}  alt={`${name}`}/>
            </div>
            <div className="flex flex-col justify-between sm:py-[2rem] sm:w-[16.18rem] w-[13rem]">
                <div >
                    <h3 className="sm:text-[2rem] text-[0.85rem] font-[garamond] leading-[1.8125rem] text-[#101928] capitalize">
                    {productname}
                    </h3>
                </div>
                
                <div>
                    <p className="sm:text-[0.875rem] text-[0.5rem] text-[#475367] leading-[1.26875rem]">Shade: Black</p>
                </div>
                <div>
                    <p className="sm:text-[0.875rem] text-[0.5rem] text-[#475367] leading-[1.26875rem]">Size: Medium</p>
                </div>
            </div>
            <div className='flex items-center'>
                <div>
                    <p className="md:text-[2rem] text-[1rem] font-[garamond] leading-[1.5rem]">${(quantity * price).toFixed(2)}</p>
                </div>
            </div>
            <div className=" flex items-start h-full">
            <span onClick={clearItemFromCartHandler} className="text-[1.5rem] hover:cursor-pointer">&#10005;</span>
            </div>
         
    </div>
    
    )
}

export default CheckoutItem;