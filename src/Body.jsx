import Carousel from "./Carousel.jsx";
import Shops from "./GridCardList.jsx";
import Cart from "./images/cart.svg";
import './Body.css';

function Body() {


    return (
        <div className="body-container">
            <Carousel />
            <Shops />
            <div className="cart-container">
                <img src={Cart} id="cart" alt="Cart" />
            </div>
            
        </div>
    );
}

export default Body;