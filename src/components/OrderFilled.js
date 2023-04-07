import './OrderFilled.css';

export default function OrderFilled(props) {
    return(
        <div className="container--filled">
            <div className="form form--filled">
                <a href="#order-edit" className=""><i onClick={() => {props.onEdit(props)}} className="icon__edit bx bxs-message-square-edit"></i></a>
                <i onClick={() => { props.onDelete(props.id) }} className="icon__delete bx bxs-trash-alt"></i>
                <h3>Table {props.tableNumber}</h3> 
                <div className="filled__item">
                    <p className="filled__item--name">Customer Name: {props.customerName}</p>
                </div>
                <div className="filled__item">
                    <p className="filled__item--detail">Detail Order:</p>
                    <li>{props.detailOrder}</li>
                </div>
            </div>
        </div>
    );
}