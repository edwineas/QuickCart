import SearchBar from '../../components/SearchBar/SearchBar';
import Shops from '../../components/ShopList/Shops';
import Cart from '../../images/cart.svg';
import './ShopListBody.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
export default function ShopListBody() {
    return (
        <>
        <Navbar />
        <div className="body-container">
            <SearchBar />
            <br></br>
            <Shops />
            <div className="cart-container">
                <img src={Cart} id="cart2" alt="Cart" />
            </div>
        </div>
        <div id='foot'>
        <Footer />
        </div>
        </>
    );
}