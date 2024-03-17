import SearchBar from './SearchBar';
import Shops from './Shops';
import Cart from './images/cart.svg';
import './ShopListBody.css';
export default function ShopListBody() {
    return (
        <div className="body-container">
            <SearchBar />
            <Shops />
            <div className="cart-container">
                <img src={Cart} id="cart2" alt="Cart" />
            </div>
        </div>
    );
}