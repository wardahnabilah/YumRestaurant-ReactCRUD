import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import OrderForm from "./components/OrderForm"
import OrderFilled from "./components/OrderFilled"
import './App.css'

export default function App() {
    // Store the orders
    const [orders, setOrders] = useState([])

    // Add new order data to 'orders' array
    function addOrder(newOrder) {
        setOrders(prev => {
            return [
                ...prev, 
                newOrder
            ]
        })

        console.log(orders);
    }

    // To delete an order
    function deleteOrder(id) {
        setOrders(prev => {
            return prev.filter(order => {
                    return order.key !== id
            })
        })
    }
    
    return (
        <div>
            <Header />
            <div className="main__container">
                <OrderForm onAdd={addOrder}/>
                { orders.map(order => {
                    return <OrderFilled
                                key={order.key}
                                id={order.key}
                                tableNum={order.tableNumber}
                                customerName={order.customerName}
                                detailOrder={order.detailOrder} 
                                onDelete={deleteOrder} />
                }) }
            </div>
            <Footer />
        </div>
    )
}