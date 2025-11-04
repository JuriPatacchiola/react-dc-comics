import BigLogo from '../assets/img/dc-logo-bg.png'



export function Sfondo() {


    return (

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
    )
}