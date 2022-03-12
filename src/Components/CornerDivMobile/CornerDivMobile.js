import { Link } from "react-router-dom"
import DivComponent from "../DivComponent/DivComponent"
import Logo from "../Logo/Logo"
import "../CornerDivMobile/CornerDivMobile.css"
import CornerDivItem from "../CornerDivItem/CornerDivItem"

const CornerDivMobile = () => {
return (
    <DivComponent className="CornerMobileDiv">
         <Link className="LinkMobcorner" to="/"> <Logo src="./Images/Logo/designtamplate.svg" />Products</Link>
        <DivComponent className="CornerMobileFirst">
        <CornerDivItem 
              src = "./Images/Pictures/Rectangle402.jpg"
              textcFirst= "Stickers"
              textcSecond = "10 Templates"
            />
             <CornerDivItem 
              src = "./Images/Pictures/Rectangle402.jpg"
              textcFirst= "Flyer"
              textcSecond = "10 Templates"
            />
            </DivComponent>

            <DivComponent className="CornerMobileFirst">
            <CornerDivItem 
              src = "./Images/Pictures/Rectangle402.jpg"
              textcFirst= "Stickers"
              textcSecond = "10 Templates"
            />
             <CornerDivItem 
              src = "./Images/Pictures/Rectangle402.jpg"
              textcFirst= "Flyer"
              textcSecond = "10 Templates"
            />
            </DivComponent>
            <DivComponent className="Linkcorner">
             <Link to="/">SEE ALL PRODUCT TEMPLATES
              <Logo src="./Images/Logo/arrowgreey.svg" />
             </Link>
             </DivComponent>
    </DivComponent>
)
}

export default CornerDivMobile