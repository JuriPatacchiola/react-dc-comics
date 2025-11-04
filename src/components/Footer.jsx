import Facebook from '../assets/img/footer-facebook.png';
import Location from '../assets/img/footer-periscope.png';
import Pintarest from '../assets/img/footer-pinterest.png';
import Twitter from '../assets/img/footer-twitter.png';
import YouTube from '../assets/img/footer-youtube.png';
import { Sfondo } from "./Sfondo";


export function Footer() {

    return (

        <footer>
            <Sfondo />

            <div className='flexFirst'>
                <button>SING-UP NOW!</button>
                <div className="FlexSocial">
                    <p>FOLLOW US</p>
                    <img src={Facebook} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={YouTube} alt="" />
                    <img src={Pintarest} alt="" />
                    <img src={Location} alt="" />
                </div>
            </div>

        </footer>



    )
}