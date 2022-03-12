import { Link } from "react-router-dom"
import DivComponent from "../DivComponent/DivComponent"
import Item from "../Item/Item"
import List from "../List/List"
import Logo from "../Logo/Logo"
import "../CornerMobNav/CornerMobNav.css"

const CornerMobNav= () => {
    return (
        <DivComponent className="CornerNavDivMob">
              <List>
                  <Item>
                      
                      <Link to="/">
                      <Logo src="./Images/Logo/blank.svg" /> 
                           Blank Print Templates</Link>
                  </Item>
                  <Item>
                      
                      <Link to="/">
                      <Logo src="./Images/Logo/four.svg" /> 
                           Logos</Link>
                  </Item>
                  <Item>
                      
                      <Link to="/">
                      <Logo src="./Images/Logo/ad11.svg" /> 
                           Banner & Adds</Link>
                  </Item>
              </List>
        </DivComponent>
    )
}

export default CornerMobNav