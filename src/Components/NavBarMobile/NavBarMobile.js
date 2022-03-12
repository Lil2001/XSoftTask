import DivComponent from "../DivComponent/DivComponent"
import Logo from "../Logo/Logo"
import "../NavBarMobile/NavBarMobile.css"
const NavBarMobile = () => {
    return (
        <DivComponent className="mobileNav">
            <Logo src="./Images/Logo/forever.svg" />
            <DivComponent className="logos">
                <Logo src ="./Images/Logo/greensearch.svg" />
                <Logo src ="./Images/Logo/greenkor.svg" />
                <Logo src ="./Images/Logo/mobilemenu.svg" />
            </DivComponent>
        </DivComponent>
    )
}
export default NavBarMobile