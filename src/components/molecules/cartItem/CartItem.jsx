import "./cartItem.styles.scss";


const CartItem = ({cartItem}) => {
    const {productname,quantity} = cartItem;
    return (
        <div className="cart-item-container">
            <img src=""/>
            <div className="item-details">
                <h1>{productname}</h1>
                <span>{quantity}</span>
            </div>
             
        </div>
    )
}

export default CartItem;