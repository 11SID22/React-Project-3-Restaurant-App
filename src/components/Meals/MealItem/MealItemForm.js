import React, { useContext } from "react";
import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
    const cartcntx = useContext(CartContext);

    const addItemToCart = (event) => {
        event.preventDefault();
        // Use event.target to find the input field by name
        const quantity = event.target.elements['amount_' + props.id].value;

        // Add the item with quantity to the cart context
        cartcntx.addItem({ ...props.item, quantity: quantity });

        console.log('after addItemToCart', cartcntx);
    };

    return (
        <form className={classes.form} onSubmit={addItemToCart}>
            <Input 
                label='Amount' 
                input={{
                    id: 'amount_' + props.id,
                    name: 'amount_' + props.id,  // Add a name for easier reference in the form
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} 
            />
            <button type="submit">+Add</button>
        </form>
    );
};

export default MealItemForm;
