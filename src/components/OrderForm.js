import './OrderForm.css';

export default function OrderForm() {
    return(
        <div className="container container--order">
            <h1>Place Your Order</h1>
            <div className="form">
                <form>
                    <div className="form__item--table">
                        <h2>Table No.</h2>
                        <input className="form__input" type="text"/>
                    </div>
                    <input className="form__input" type="text" name="customer-name" placeholder="Customer Name" />
                    <input className="form__input" type="text" name="detail-order" placeholder="Your Order" />
                    <input className="form__input form__input--btn" type="submit" />
                </form>
            </div>
        </div>
    );
}