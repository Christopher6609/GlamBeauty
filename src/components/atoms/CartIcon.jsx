import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartIcon = () => {

    const {isCartOpen,setIsCartOpen} = useContext(CartContext);
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
        console.log(isCartOpen);
    }


    return(
        <button className="flex" onClick={toggleCart}>
            <FontAwesomeIcon icon={faShoppingBag} className="md:w-[1.5rem] md:h-[1.5rem] w-[0.95rem] "/>
            <sup>0</sup>
            <p className="text-[0.75rem] px-[0.5rem]">Cart</p>
        </button>
    )
}

export default CartIcon;