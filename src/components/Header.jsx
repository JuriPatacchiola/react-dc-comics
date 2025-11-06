import Logo from '../assets/img/dc-logo.png'
import NavBar from './NavBar'

export function Header() {



    return (
        <header>
            <img src={Logo} alt="logo" />
            <NavBar />


        </header>
    )
}