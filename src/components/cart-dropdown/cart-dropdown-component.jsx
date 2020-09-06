import React from 'react';
import './cart-dropdown-component-style.scss';
import CustomButton from '../custom-button/custom-button-component';


const CartDropDown = () =>(
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropDown;