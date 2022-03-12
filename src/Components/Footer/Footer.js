import DivComponent from "../DivComponent/DivComponent";
import Text from "../Text/Text";
import InputElement from "../InputElement/InputElement";
import Button from "../Button/Button";
import "./Footer.css"
import FooterCenterComponent from "../FooterCenterComponent/FooterCenterComponent";
import FooterLastComponent from "../FooterLastComponent/FooterLastComponent";

const Footer = () => {
    return (
        <footer>
            <DivComponent className="footerTop">
                <Text> <span className="footertopbolder"> Be the first to know. </span>  Get Exclusive News and Savings! </Text>
                <DivComponent>
                    <InputElement children="Enter Email Address..." />
                    <Button> SUBSCRIBE </Button>
                </DivComponent>
            </DivComponent>
            <FooterCenterComponent />
            <FooterLastComponent  />
        </footer>
    )
}

export default Footer