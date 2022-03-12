import Item from "../Item/Item";
import { Link } from "react-router-dom";
import Text from "../Text/Text";
import Logo from "../Logo/Logo";

const LeftSideTwoLogoComponent = (props) => {
    return (
        <Item className="LeftSideBold">
            <Link to="/">
                <Text> {props.children} </Text>
                <Logo src={props.srcfirst} />
                <Logo src={props.srcsecond} />
            </Link>
            <Logo src="./Images/Logo/nextgray.svg" className="nextgray" />
        </Item>
    )
}

export default LeftSideTwoLogoComponent