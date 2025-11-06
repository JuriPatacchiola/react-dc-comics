import BigLogo from '../assets/img/dc-logo-bg.png'

export function Sfondo() {
    const dcComics = [
        "Characters",
        "Comics",
        "Movies",
        "TV",
        "Games",
        "Videos",
        "News"
    ]

    const shop = [
        "Shop DC",
        "Shop DC Collectibles"
    ]

    const dc = [
        "Terms Of Use",
        "Privacy Policy (New)",
        "Ad Choices",
        "Advertising",
        "Jobs",
        "Subscription",
        "Talent Workshops",
        "CPSC Certificates",
        "Ratings",
        "Shop Help",
        "Contact Us"
    ]

    const sites = [
        "DC",
        "MAD Magazine",
        "DC Kids",
        "DC Universe",
        "DC Power Visa"
    ]

    return (
        <div className='sfondo'>
            <div className='containerFlex'>
                <div>
                    <h2>DC COMICS</h2>
                    {dcComics.map((item, index) => (
                        <a key={index} href="#" className="no-deco">{item}</a>
                    ))}

                    <h2>SHOP</h2>
                    {shop.map((item, index) => (
                        <a key={index} href="#" className="no-deco">{item}</a>
                    ))}
                </div>

                <div>
                    <h2>DC</h2>
                    {dc.map((item, index) => (
                        <a key={index} href="#" className="no-deco">{item}</a>
                    ))}
                </div>

                <div>
                    <h2>SITES</h2>
                    {sites.map((item, index) => (
                        <a key={index} href="#" className="no-deco">{item}</a>
                    ))}
                </div>
            </div>

            <img src={BigLogo} alt="DC background logo" />
        </div>
    )
}
