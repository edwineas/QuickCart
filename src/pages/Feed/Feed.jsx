import { Cart, ShopsGrid } from '../../components';
import './Feed.css';
import { Carrot, Cauliflower, Onion, sampleImage as Img } from '../../images';

const images = [
  Carrot,
  Cauliflower,
  Onion,
  Carrot,
  Cauliflower,
  Onion,
  Carrot,
  Cauliflower,
  Onion,
  Carrot,
  Cauliflower,
  Onion,
];

const shops = [
  { src: Img, name: 'Elite Supermarket 1', rating: 4.5 },
  { src: Img, name: 'Elite Supermarket 2', rating: 3.8 },
  { src: Img, name: 'Elite Supermarket 3', rating: 4.2 },
  { src: Img, name: 'Elite Supermarket 1', rating: 4.5 },
  { src: Img, name: 'Elite Supermarket 2', rating: 3.8 },
  { src: Img, name: 'Elite Supermarket 3', rating: 4.2 },
  { src: Img, name: 'Elite Supermarket 1', rating: 4.5 },
  { src: Img, name: 'Elite Supermarket 2', rating: 3.8 },
  { src: Img, name: 'Elite Supermarket 3', rating: 4.2 },
  { src: Img, name: 'Elite Supermarket 1', rating: 4.5 },
  { src: Img, name: 'Elite Supermarket 2', rating: 3.8 },
  { src: Img, name: 'Elite Supermarket 3', rating: 4.2 },
  // Add more image objects here
];

const handleClick = (image) => {
  // Add your click handling logic here
};


function Feed() {

  return (
    <>
      <div className="feed-container">
        <div className="carousel-container">
          <div className='feed-h1'>What are you looking for?</div>
          <div className="carousel">
            {images.map((image, index) => (
              <img key={index} src={image} alt="" className="carousel-item" onClick={() => handleClick(image)} />
            ))}
          </div>
        </div>
        <div className="gridcardlist">
          <div className="feed-h1">Top shops near</div>
          <br></br>
          <div className="grid-card-list">
            {shops.map((shop, index) => (
              <ShopsGrid key={index} shopSrc={shop.src} shopName={shop.name} shopRating={shop.rating} onClick={() => handleClick(shop)} />
            ))}
          </div>
        </div>
        <Cart />
      </div>
    </>
  )

}

export default Feed;