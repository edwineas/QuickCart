import SearchBar from '../../components/SearchBar/SearchBar';
import Shops from '../../components/ShopList/Shops';
import Cart from '../../components/Cart/Cart';
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
                <Cart />
            </div>
            <div id='foot'>
                <Footer />
            </div>
        </>
    );
}