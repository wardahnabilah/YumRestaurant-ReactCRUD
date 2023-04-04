import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import OrderForm from "./components/OrderForm"
import OrderFilled from "./components/OrderFilled"
import OrderEdit from "./components/OrderEdit"
import './App.css'

export default function App() {
    // Store the orders
    const [orders, setOrders] = useState([])
    // To store the state whether in edit mode or not
    const [isEdit, setIsEdit] = useState(false)
    // Store the updated order
    const [currentOrder, setCurrentOrder] = useState({
        key: "",
        id: "",
        tableNumber: "",
        customerName: "",
        detailOrder: ""
    })

    // Add new order data to 'orders' array
    function addOrder(newOrder) {
        setOrders(prev => {
            return [
                ...prev, 
                newOrder
            ]
        })
    }

    // To delete an order
    function deleteOrder(id) {
        setOrders(prev => {
            return prev.filter(order => {
                    return order.key !== id
            })
        })

        setIsEdit(false)
    }

    // To edit an order
    function editOrder(currentOrderData) {
        setIsEdit(true)
        setCurrentOrder({
            key: currentOrderData.id,
            id: currentOrderData.id,
            tableNumber: currentOrderData.tableNumber,
            customerName: currentOrderData.customerName,
            detailOrder: currentOrderData.detailOrder
        })
    }

    // To update the edited order
    function updateOrder(editedOrder) {
        setIsEdit(false)

        setOrders(
            orders.map(order => {
                return order.id == editedOrder.id ? editedOrder : order
            })
        )
    }

    // To cancel edit order
    function cancelEditOrder() {
        setIsEdit(false)
    }
    
    return (
        <div>
            <Header />
            <div className="main__container">
                {isEdit ? <OrderEdit cancelEdit={cancelEditOrder} currentOrder={currentOrder} onUpdate={updateOrder}/> : <OrderForm onAdd={addOrder}/>}
                { orders.map(order => {
                    return <OrderFilled
                                key={order.key}
                                id={order.key}
                                tableNumber={order.tableNumber}
                                customerName={order.customerName}
                                detailOrder={order.detailOrder} 
                                onDelete={deleteOrder} 
                                onEdit={editOrder}
                                />
                }) }
            </div>
            <Footer />
        </div>
    )
}