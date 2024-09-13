import React, { useState } from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {

    const [items, updateItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addItemToCartHandler = (item) => {
        updateItems([...items, item])

        setTotalAmount((prevTotal) => {
            const updatedAmount = prevTotal + item.price * item.quantity;
            return updatedAmount;
        });

        console.log('inside addItemToCartHandler', cartContext)
    };

    const removeItemFromHandler = (id) => { };

    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {console.log('Inside CartContext.Provider', cartContext)}
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;