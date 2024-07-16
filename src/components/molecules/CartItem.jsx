const CartItem = ({cartItem}) => {
    const {productname,quantity} = cartItem;
    return (
        <div>
             <hi>{productname}</hi>
            <span>{quantity}</span>
        </div>
    )
}

export default CartItem;