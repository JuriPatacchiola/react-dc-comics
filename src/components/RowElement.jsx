import Tablet from '../assets/img/buy-comics-digital-comics.png'
import TShirt from '../assets/img/buy-comics-merchandise.png'
import Pointer from '../assets/img/buy-comics-shop-locator.png'
import Card from '../assets/img/buy-comics-subscriptions.png'
import Visa from '../assets/img/buy-dc-power-visa.svg'

export function RowElement() {


    return (
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
    )
}