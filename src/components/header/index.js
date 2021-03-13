import { Link } from 'react-router-dom'

import './styles.css';

import logoWhite from '../../assets/logo-white.png';
import logo from '../../assets/logo.png';

export default function Header({ whiteVersion, hideCart }) {
    const openDrawer = () => {
        const event = new CustomEvent('openCart');
        window.dispatchEvent(event);
    }
    return (
        <div className="col-12">
            <header className="py-4 px-4 text-center">
                <Link to="/">
                    <img
                        src={whiteVersion ? logoWhite : logo}
                        alt="logomarca"
                        className="img-fluid"
                    />
                </Link>
            </header>
            {!hideCart && (
                <button
                    onClick={() => openDrawer()}
                    className="btn btn-secondary cart-button"
                >
                    <span className="mdi mdi-cart"></span> 5 Ítens
                </button>
            )}
        </div>
    );
}
