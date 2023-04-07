import { useState } from 'react';
import './OrderForm.css';

export default function OrderForm(props) {
    
    // Create state to save the input value
    const [inputValue, setInputValue] = useState({
        key: "",
        id: "",
        tableNumber: "",
        customerName: "",
        detailOrder: ""
    }) 

    // Function to set the inputValue when the input changed
    function handleChange(event) {
        const {name, value} = event.target
        let newKey = Math.ceil(Math.random() * 10000)

        // Show alert if field is empty
        if (value === "") {
            document.querySelector(".alert-text").classList.add("show")
        } else if (value !== "") {
            document.querySelector(".alert-text").classList.remove("show")
        }

        setInputValue(prev => {
            return {
                ...prev,
                [name]: value,
                key: newKey,
                id: newKey
            }
        })
    }

    // Function to pass inputValue to App.js
    function submitOrder(event) {
        // Prevent submitting form with empty field
        for(let property in inputValue) {
            if(inputValue[property] === "") {
                return
            }
        }
        
        props.onAdd(inputValue)

        // Empty form field when button is clicked
        setInputValue({
            key: "",
            id: "",
            tableNumber: "",
            customerName: "",
            detailOrder: ""
        })

        event.preventDefault()
    }
    
    return(
        <div className="container--order">
            <h1>Place Your Order</h1>
            <div className="form">
                <p className="alert-text">Please fill the empty field</p>
                <form autoComplete="off">
                    <div className="form__item--table">
                        <h2>Table No.</h2>
                        <input onChange={handleChange} className="form__input" value={inputValue.tableNumber} name="tableNumber" type="text"/>
                    </div>
                    <input onChange={handleChange} className="form__input" value={inputValue.customerName} name="customerName" placeholder="Customer Name" type="text"/>
                    <textarea onChange={handleChange} className="form__input" value={inputValue.detailOrder} name="detailOrder" placeholder="Your Order" type="textarea" rows="6" cols="22"/>
                    <button onClick={submitOrder} className="form__input form__input--btn" type="submit"> Add Order </button>
                </form>
            </div>
        </div>
    );
}