import Footer from "./components/Footer"
import Header from "./components/Header"
import OrderForm from "./components/OrderForm"
import OrderFilled from "./components/OrderFilled"

export default function App() {
    return (
        <div>
            <Header />
            <OrderForm />
            <OrderFilled />
            <Footer />
        </div>
    )
}