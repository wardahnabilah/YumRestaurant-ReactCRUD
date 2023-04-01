import './Footer.css'

export default function Footer() {
    let year = new Date().getFullYear()
    
    return (
        <footer>
            Copyright {year} YumRestaurant. All rights reserved.
        </footer>
    );
}