import Wrapper from "../Wrapper/Wrapper";
import Logo from "../Logo/Logo";
import DivComponent from "../DivComponent/DivComponent";
import {Link} from "react-router-dom";
import Text from "../Text/Text";

const FooterLastComponent = () => {
    return (
        <Wrapper className="footerLastComponet">
            <Logo src="./Images/Pictures/footerlastlogos.png" />
            <DivComponent>
                <Link to="/"> Learning Center </Link>
                <Link to="/"> FAQ </Link>
                <Link to="/"> Blog </Link>
                <Link to="/"> Privacy Policy </Link>
                <Link to="/"> TOS </Link>
                <Link to="/"> Sitemap </Link>
            </DivComponent>
            <Text> © 4OVER4.com 1999 - 2020. All rights reserved. </Text>
        </Wrapper>
    )
}

export default FooterLastComponent