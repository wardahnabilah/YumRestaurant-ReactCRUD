import './Header.css';
import Logo from '../assets/logo.png';

export default function Header() {
    return(
        <header className="container">
            <div className="header-logo">
                <a href=""><img src={Logo} alt="" /></a>
            </div>
            <div className="toggle-button">
                <i className='bx bx-menu'></i>
            </div>
            <nav>
                <ul className='nav__list'>
                    <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Place An Order</a></li>
                </ul>
            </nav>
        </header>
    )
}