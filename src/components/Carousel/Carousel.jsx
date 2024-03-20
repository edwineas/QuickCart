import Carrot from '../../images/carrots.svg';
import Cauliflower from '../../images/cauliflower.svg';
import Onion from '../../images/onions.svg';
import './Carousel.css'

const images = [
  Carrot,
  Cauliflower,
  Onion,
];

const handleClick = (image) => {
    // Add your click handling logic here
  };

const Carousel = () => {
    return (
      <>  
      <div className='qn'>What are you looking for?</div>
      <div className="carousel">
        {images.map((image, index) => (
          <img key={index} src={image} alt="" className="carousel-item" onClick={() => handleClick(image)}/>
        ))}
      </div>
      </>
    );
  };
  
  export default Carousel;