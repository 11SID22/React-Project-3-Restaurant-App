import React, { useContext } from "react";

import classes from './Cart.module.css';
import Modal from "./Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartcntx = useContext(CartContext)

    const totalAmount = `Rs${(cartcntx.totalAmount || 0).toFixed(2)}`;
    const hasItems = cartcntx.items.length > 0;

    const cartItemAddHandler = id => { };

    const cartItemRemoveHandler = item => { };

    const cartItems = <ul className={classes['cart-items']}>
        {cartcntx.items.map((item) => (
            <CartItem
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            />
        ))}
    </ul>

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
};

export default Cart;