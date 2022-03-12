import { Link } from "react-router-dom"
import BusinesListItem from "../BusinesListItem/BusinesListItem"
import DivComponent from "../DivComponent/DivComponent"
import Logo from "../Logo/Logo"
import List from "../List/List"
import "../BusinessBasic/BusinessBasic.css"

const BusinessBasic = () => {
    return (
     
         <DivComponent className="ListStyle">
             <DivComponent className="basic">
             <DivComponent> 
                 <Logo src="./Images/Logo/star.svg" />
                 <Link to="/">Business Basic</Link>
                 </DivComponent>
                     <Logo src="./Images/Logo/arrowgreen.svg" />
                 
             </DivComponent>
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
      
    )
}

export default BusinessBasic