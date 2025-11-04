import Tablet from '../src/assets/img/buy-comics-digital-comics.png'
import TShirt from '../src/assets/img/buy-comics-merchandise.png'
import Pointer from '../src/assets/img/buy-comics-shop-locator.png'
import Card from '../src/assets/img/buy-comics-subscriptions.png'
import Visa from '../src/assets/img/buy-dc-power-visa.svg'
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
      </main>
      <footer></footer>
    </>
  )
}

export default App
