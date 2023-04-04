import { useState } from 'react';
import './OrderForm.css';
import './OrderEdit.css';

export default function OrderEdit(props) {
    
    // Create state to store the order being edited
    const [editedOrder, setEditedOrder] = useState({
        key: props.currentOrder.id,
        id: props.currentOrder.id,
        tableNumber: props.currentOrder.tableNumber,
        customerName: props.currentOrder.customerName,
        detailOrder: props.currentOrder.detailOrder
    }) 

    // Function to set the editedOrder when the input changed
    function handleChange(event) {
        const {name, value} = event.target

        setEditedOrder(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    // Function to pass editedOrder to App.js
    function submitEditedOrder(event) {
        props.onUpdate(editedOrder)

        event.preventDefault()
    }
    
    return(
        <div className="container--order">
            <h1>Place Your Order</h1>
            <div className="form">
                <form autoComplete="off">
                    <div className="form__item--table">
                        <h2>Table No.</h2>
                        <input onChange={handleChange} className="form__input" value={editedOrder.tableNumber} name="tableNumber" type="text"/>
                    </div>
                    <input onChange={handleChange} className="form__input" value={editedOrder.customerName} name="customerName" placeholder="Customer Name" type="text"/>
                    <textarea onChange={handleChange} className="form__input" value={editedOrder.detailOrder} name="detailOrder" placeholder="Your Order" type="textarea" rows="6" cols="22"/>
                    <button onClick={submitEditedOrder} className="form__input form__input--btn" type="submit"> Edit Order </button>
                    <button onClick={() => props.cancelEdit()} className="form__input form__input--btn-cancel" type="submit"> Cancel </button>
                </form>
            </div>
        </div>
    );
}