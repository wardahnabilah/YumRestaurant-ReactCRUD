import { useState } from 'react';
import './OrderForm.css';

export default function OrderForm(props) {
    
    // Create state to save the input value
    

    // Function to set the inputValue when the input changed
    

    // Function to pass inputValue to App.js
    
    
    return(
        <div className="container--order">
            <h1>Place Your Order</h1>
            <div className="form">
                <form autoComplete="off">
                    <div className="form__item--table">
                        <h2>Table No.</h2>
                        <input className="form__input" type="text" name="tableNumber"/>
                    </div>
                    <input className="form__input" type="text" name="customerName" placeholder="Customer Name" />
                    <textarea className="form__input" type="textarea" rows="6" cols="22" name="detailOrder" placeholder="Your Order" />
                    <button className="form__input form__input--btn" type="submit"> Add Order </button>
                </form>
            </div>
        </div>
    );
}