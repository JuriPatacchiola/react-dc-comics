import Tablet from '../src/assets/img/buy-comics-digital-comics.png'
import TShirt from '../src/assets/img/buy-comics-merchandise.png'
import Pointer from '../src/assets/img/buy-comics-shop-locator.png'
import Card from '../src/assets/img/buy-comics-subscriptions.png'
import Visa from '../src/assets/img/buy-dc-power-visa.svg'
import BigLogo from '../src/assets/img/dc-logo-bg.png'
import { Header } from "./components/Header"



function App() {

  return (
    <>
      <Header />
      <main>
        <div className="blackRettangle">
          <h3> -- Content goes here -- </h3>
        </div>
        <div className="gridContainer">
          <div className="rowContainer">
            <img src={Tablet} alt="" />
            <p>DIGITAL COMICS</p>
          </div>
          <div className="rowContainer">
            <img src={TShirt} alt="" />
            <p>DC MERCIANDISE</p>
          </div>
          <div className="rowContainer">
            <img src={Card} alt="" />
            <p>SUBSCRIPTION</p>
          </div>
          <div className="rowContainer">
            <img src={Pointer} alt="" />
            <p>COMIC SHOP LOCATOR</p>
          </div>
          <div className="rowContainer">
            <img src={Visa} alt="" />
            <p>DC POWER VISA</p>
          </div>
        </div>

        <div className='sfondo'>
          <div className='containerFlex'>
            <div>
              <h2>DC COMICS</h2>
              <p>Characters</p>
              <p>Comics</p>
              <p>Movie</p>
              <p>TV</p>
              <p>Games</p>
              <p>Vdeos</p>
              <p>News</p>

              <h2>SHOP</h2>
              <p>Shop DC</p>
              <p>Shop DC Collectibles</p>
            </div>
            <div>
              <h2>DC</h2>
              <p>Terms Of Use</p>
              <p>Privasy policy (new)</p>
              <p>Ad Choices</p>
              <p>Advertising</p>
              <p>Jobs</p>
              <p>Subscription</p>
              <p>Talent Workshops</p>
              <p>CPSC Certificates</p>
              <p>Ratings</p>
              <p>Shop Help</p>
              <p>Contact Us</p>
            </div>
            <div>
              <h2>SITES</h2>
              <p>DC</p>
              <p>MAD Magazine</p>
              <p>DC Kids</p>
              <p>DC Universal</p>
              <p>DC Power Visa</p>
            </div>

          </div>
          <img src={BigLogo} alt="" />
        </div>
      </main>
      <footer></footer>
    </>
  )
}

export default App
