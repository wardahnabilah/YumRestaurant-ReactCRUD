import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import OrderForm from "./components/OrderForm"
import OrderFilled from "./components/OrderFilled"
import './App.css'

export default function App() {
    // Store the orders
    const [orders, setOrders] = useState([])

    // addOrder Function
    function addOrder(newOrder) {
        setOrders(prev => {
            return [
                ...prev, 
                newOrder
            ]
        })

        console.log(orders);
    }
    
    return (
        <div>
            <Header />
            <div className="main__container">
                <OrderForm onAdd={addOrder}/>
                { orders.map(order => {
                    return <OrderFilled 
                                tableNum={order.tableNumber}
                                customerName={order.customerName}
                                detailOrder={order.detailOrder} />
                }) }
            </div>
            <Footer />
        </div>
    )
}