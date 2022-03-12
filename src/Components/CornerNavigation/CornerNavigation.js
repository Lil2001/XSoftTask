import { Link } from "react-router-dom"
import DivComponent from "../DivComponent/DivComponent"
import Item from "../Item/Item"
import List from "../List/List"
import Logo from "../Logo/Logo"
import "../CornerNavigation/CornerNavigation.css"

const CornerNavigation = () => {
    return (
        <DivComponent className="CornerNavDiv">
              <List>
                  <Item className="selected">
                     
                      <Link to="/" className="selected">
                      <Logo src="./Images/Logo/designtamplate.svg" /> 
                          Design Templates</Link>
                  </Item>
                  <Item>
                      
                      <Link to="/">
                      <Logo src="./Images/Logo/blank.svg" /> 
                           Blank Print Templates</Link>
                  </Item>
              </List>
        </DivComponent>
    )
}

export default CornerNavigation