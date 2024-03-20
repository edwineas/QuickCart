import Carousel from "../Carousel/Carousel.jsx";
import Shops from "../ShopGrid/GridCardList.jsx";
import Cart from "../Cart/Cart.jsx";

import './Body.css';

function Body() {


    return (
        <div className="body-container">
            <Carousel />
            <Shops />
            <Cart />
            
        </div>
    );
}

export default Body;