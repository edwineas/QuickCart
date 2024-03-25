import SearchBar from '../../components/SearchBar/SearchBar';
import Shops from '../../components/ShopList/Shops';
import Cart from '../../components/Cart/Cart';
import './SearchPage.css';

export default function SearchPage() {
    return (
        <>
            <div className="body-container">
                <SearchBar />
                <br></br>
                <Shops />
                <Cart />
            </div>
            <div id='foot'>
            </div>
        </>
    );
}