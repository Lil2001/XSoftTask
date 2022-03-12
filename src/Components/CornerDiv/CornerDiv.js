
import CornerDivItem from "../CornerDivItem/CornerDivItem"
import DivComponent from "../DivComponent/DivComponent"
import "../CornerDiv/CornerDiv.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"


const CornerDiv = () => {
 return (
     <DivComponent className = "CornerDivAll">
         <DivComponent className="FirstCornerDiv">
            <CornerDivItem 
              src = "./Images/Pictures/Rectangle402.jpg"
              textcFirst= "Free Business Cards"
              textcSecond = "1325 Templates"
            />
            <CornerDivItem 
             src = "./Images/Pictures/ect1.jpg"
             textcFirst= "Business Cards"
             textcSecond = "2166 Templates"/>
            <CornerDivItem 
             src = "./Images/Pictures/yard14.jpg"
             textcFirst= "Letterheads"
             textcSecond = "1503 Templates"/>
            <CornerDivItem 
             src = "./Images/Pictures/Rectangle 405.jpg"
             textcFirst= "Envelopes"
             textcSecond = "2166 Templates"/>
         </DivComponent>
         <DivComponent className = "SecondCornerDiv">
             <CornerDivItem 
              src = "./Images/Pictures/Rectangle 273.jpg"
              textcFirst= "Postcards"
              textcSecond = "2166 Templates"/>
             <CornerDivItem
              src = "./Images/Pictures/Rectangle 408.jpg"
              textcFirst= "Free Business Cards"
              textcSecond = "2166 Templates" />
             <CornerDivItem
              src = "./Images/Pictures/Rectangle 398.jpg"
              textcFirst= "Vinyl Banners"
              textcSecond = "2166 Templates" />
             <CornerDivItem 
              src = "./Images/Pictures/Rectangle 395.jpg"
              textcFirst= "Invitations"
              textcSecond = "2166 Templates" />
         </DivComponent>
         <DivComponent className="Linkcorner">
             <Link to="/">SEE ALL PRODUCT TEMPLATES
              <Logo src="./Images/Logo/arrowgreey.svg" />
             </Link>
             </DivComponent>
     </DivComponent>
 )
}

export default CornerDiv