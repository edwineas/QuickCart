import { Carousel, GridCardList, Cart,Footer } from '../../components';

function Feed() {


  return (
    <>
      <div className="app-container">
        <div className="body-container">
          <Carousel />
          <GridCardList />
          <Cart />

        </div>

      </div>
    </>
  )

}


export default Feed;