import Wrapper from "../Wrapper/Wrapper";
import DivComponent from "../DivComponent/DivComponent";
import Text from "../Text/Text";
import {Link} from "react-router-dom";
import Logo from "../Logo/Logo";

const FooterCenterComponent = () => {
    return (
        <Wrapper className="footerCenterComponent">
            <DivComponent className="footerCenterColumn">
                <Text className="footerCenterHeading"> Shop </Text>
                <Link to="/"> Business Basics </Link>
                <Link to="/"> Marketing Essentials </Link>
                <Link to="/"> Packaging & Retail </Link>
                <Link to="/"> Promotional & Event items </Link>
                <Link to="/"> Real Estate Products </Link>
                <Link to="/"> Signs, Banners & Displays </Link>
                <Link to="/"> Stickers & Labels </Link>
                <Link to="/"> Trade Show Products </Link>
            </DivComponent>
            <DivComponent className="footerCenterColumn">
                <Text className="footerCenterHeading"> Creative Corner </Text>
                <Link to="/"> Product Templates </Link>
                <Link to="/"> Logos Web </Link>
                <Link to="/"> Web Graphics </Link>
            </DivComponent>
            <DivComponent className="footerCenterColumn">
                <Text className="footerCenterHeading"> Content Hub </Text>
                <Link to="/"> Stories  </Link>
                <Link to="/"> Images </Link>
                <Link to="/"> Videos </Link>
                <Link to="/"> Listicles </Link>
            </DivComponent>
            <DivComponent>
                <DivComponent className="footerCenterColumn">
                    <Text className="footerCenterHeading"> Business Resources </Text>
                    <Link to="/"> Listicles </Link>
                    <Link to="/"> Listicles </Link>
                    <Link to="/"> Listicles </Link>
                    <Link to="/"> Listicles </Link>
                </DivComponent>
                <DivComponent className="footerCenterColumn">
                    <Text className="footerCenterHeading"> Community </Text>
                    <Link to="/" > Services </Link>
                </DivComponent>
            </DivComponent>
            <DivComponent className="footerCenterColumn footerlastcolumn">
                <Logo src="./Images/Logo/foreverfooter.svg" />
                <DivComponent className="footerlogos">
                    <Link to="/"> <Logo src="./Images/Logo/footerfbicon.svg" /> </Link>
                    <Link to="/"> <Logo src="./Images/Logo/twitter1.svg" /> </Link>
                    <Link to="/"> <Logo src="./Images/Logo/instagram1.svg" /> </Link>
                    <Link to="/">  <Logo src="./Images/Logo/pinterest.svg" /> </Link>
                    <Link to="/"> <Logo src="Images/Logo/linkedin.svg" /> </Link>
                </DivComponent>
                <DivComponent className="footercontacts">
                    <Logo  src="./Images/Logo/phone.svg" />
                    <Text> 718 - 932 - 2700 </Text>
                </DivComponent>
                <DivComponent className="footercontacts">
                    <Logo src="./Images/Logo/headphones.svg" />
                    <Text> Print Help Center </Text>
                </DivComponent>
            </DivComponent>
        </Wrapper>
    )
}

export default  FooterCenterComponent