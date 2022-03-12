import DivComponent from "../DivComponent/DivComponent"
import List from "../List/List"
import Item from "../Item/Item"
import { Link } from "react-router-dom"
import Button from "../Button/Button"
import Logo from "../Logo/Logo"
import "../BusinessBanner/BusinessBanner.css"

const BusinessBanner = () => {
    return (
        <DivComponent className="busnComp">
            <List>
                <Item>
                      <Link to="/"> Appointment Cards </Link>
                </Item>
                <Item>
                      <Link to="/">  Business Cards </Link>
                </Item>
                <Item>
                      <Link to="/"> Carbonless Forms </Link>
                </Item>
                <Item>
                      <Link to="/">  Letterhead </Link>
                </Item>
                <Item>
                      <Link to="/"> Envelopes </Link>
                </Item>
                <Item>
                      <Link to="/">  Notepads  </Link>
                </Item>
                <Item>
                      <Link to="/"> Pocket Folders </Link>
                </Item>
                <Item>
                      <Link to="/"> Post-its </Link>
                </Item>
                <Item>
                      <Link to="/">  Rubber Stamps </Link>
                </Item>
                <Item>
                      <Link to="/">  Sales Sheets  </Link>
                </Item>
                <Item>
                      <Link to="/"> Shipping & Mailing Labels </Link>
                </Item>
                <Item>
                      <Link to="/">  Statement Stuffers </Link>
                </Item>
                <Item>
                      <Button>SHOP ALL BUSINESS BASICS 
                          <Logo src="./Images/Logo/arrowgreey.svg" />
                           </Button>
                </Item>
                
            </List>
        </DivComponent>
    )
}

export default BusinessBanner