import Footer from "./components/Footer"
import Header from "./components/Header"
import OrderForm from "./components/OrderForm"
import OrderFilled from "./components/OrderFilled"
import './App.css'

export default function App() {
    
    function addOrder(newOrder) {
        console.log(newOrder);
    }
    
    return (
        <div>
            <Header />
            <div className="main__container">
                <OrderForm onAdd={addOrder}/>
                <OrderFilled />
            </div>
            <Footer />
        </div>
    )
}