import { Link } from "react-router-dom"
import DivComponent from "../DivComponent/DivComponent"
import List from "../List/List"
import Item from "../Item/Item"
import "../NavBottom/NavBottom.css"

const NavBottom = () => {
    return(
        <DivComponent className="navbarDiv">
            <List>
                <Item>
                    <Link to="/"> All Products </Link>
                </Item>
                <Item>
                    <Link to="/"> Business Basics </Link>
                </Item>
                <Item>
                    <Link to="/"> Marketing Essentials </Link>
                </Item>
                <Item>
                    <Link to="/"> Packaging & Retail </Link>
                </Item>
                <Item>
                    <Link to="/"> Promotional & Events </Link>
                </Item>
                <Item>
                    <Link to="/"> Signs, Banners & Displays </Link>
                </Item>
                <Item>
                    <Link to="/"> Stickers & Labels </Link>
                </Item>
                <Item>
                    <Link to="/"> Real Estate Product </Link>
                </Item>
                <Item>
                    <Link to="/"> Trade Show Products </Link>
                </Item>
            </List>
        </DivComponent>
    )
}

export default NavBottom