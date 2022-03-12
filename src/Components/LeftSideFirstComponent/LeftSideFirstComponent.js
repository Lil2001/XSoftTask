import Item from "../Item/Item";
import {Link} from "react-router-dom";
import Text from "../Text/Text";
import Logo from "../Logo/Logo";

const LeftSideFirstComponent = (props) => {
    return (
        <Item className={props.className}>
            <Link to="/" >
                <Text> {props.children} </Text>
                <Logo src={props.src}  />
            </Link>
            <Logo src="./Images/Logo/nextgray.svg" className="nextgray" />
        </Item>
    )
}

export default LeftSideFirstComponent