const CartItem = ({cartItem}) => {
    const {productname,quantity} = cartItem;
    return (
        <div>
             <h1>{productname}</h1>
            <span>{quantity}</span>
        </div>
    )
}

export default CartItem;