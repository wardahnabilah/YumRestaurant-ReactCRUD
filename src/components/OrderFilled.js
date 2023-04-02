import './OrderFilled.css';

export default function OrderFilled() {
    return(
        <div className="container--filled">
            <div className="form form--filled">
                <i className="icon__edit bx bxs-message-square-edit"></i>
                <i className="icon__delete bx bxs-trash-alt"></i>
                <h3>Table 1</h3> 
                <div className="filled__item">
                    <p className="filled__item--name">Customer Name: <span>James</span></p>
                </div>
                <div className="filled__item">
                    <p className="filled__item--detail">Detail Order:</p>
                    <li>Pizza, fried rice</li>
                </div>
            </div>
        </div>
    );
}