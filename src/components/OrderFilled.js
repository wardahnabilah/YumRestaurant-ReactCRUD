import './OrderFilled.css';

export default function OrderFilled() {
    return(
        <div className="container container--order">
            <div className="form form--filled">
                <i className="icon__edit bx bxs-message-square-edit"></i>
                <i className="icon__delete bx bxs-trash-alt"></i>
                <h2>Table No. 1</h2> 
                <div className="filled__item">
                    <p className="bold">Customer Name: <span>James</span></p>
                </div>
                <div className="filled__item">
                    <p className="bold">Detail Order:</p>
                    <li>Pizza, fried rice</li>
                </div>
            </div>
        </div>
    );
}