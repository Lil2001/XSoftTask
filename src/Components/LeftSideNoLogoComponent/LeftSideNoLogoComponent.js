import Item from "../Item/Item";
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";

const LeftSideNoLogoComponent = (props) => {
    return (
        <Item>
            <Link to="/">
                {props.children}
            </Link>
            <Logo src="./Images/Logo/nextgray.svg" className="nextgray" />
        </Item>
    )
}

export  default  LeftSideNoLogoComponent