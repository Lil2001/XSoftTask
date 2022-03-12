
import DivComponent from "../DivComponent/DivComponent"
import Logo from "../Logo/Logo"
import BusinesListItem from "../BusinesListItem/BusinesListItem"
import { Link } from "react-router-dom"
import List from "../List/List"
import Item from "../Item/Item"
import Button from "../Button/Button"
import "../BusinessBasicMobile/BusinessBasicMobile.css"

const BusinessBasicMobile = () => {
    return (
        <DivComponent className="busMov">
             <DivComponent className="basicMob">
             <DivComponent> 
                 <Logo src="./Images/Logo/star.svg" />
                 <Link to="/">Business Basic</Link>
                 </DivComponent>
                     <Logo src="./Images/Logo/Vector213.svg" />
                  </DivComponent>
                  <DivComponent className="busnCompMob">
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
                  <DivComponent className="ListStyleMob">
                  <List>
                 <BusinesListItem 
                 src="./Images/Logo/market.svg"
                 text="Market Essentials" />
                 <BusinesListItem 
                 src="./Images/Logo/packagegray.svg"
                 text="Packaging & Retail" />
                 <BusinesListItem 
                 src="./Images/Logo/promo.svg"
                 text="Promotional & Events " />
                 <BusinesListItem 
                 src="./Images/Logo/real.svg"
                 text="Real Estate Products" />
                 <BusinesListItem 
                 src="./Images/Logo/signsgray.svg"
                 text=" Signs, Banners & Displays" />
                 <BusinesListItem 
                 src="./Images/Logo/stickergray.svg"
                 text="Stickers & Labels" />
             </List>
                  </DivComponent>
        </DivComponent>
    )
}

export default BusinessBasicMobile