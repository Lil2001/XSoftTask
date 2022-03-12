import { Link } from "react-router-dom"
import "../NavTop/NavTop.css"
import DivComponent from "../DivComponent/DivComponent"
import Logo from "../Logo/Logo"
const NavTop = () => {
    return(
           <DivComponent>
               <DivComponent className="navTop">
                    <DivComponent className="firstNavTopSection">
                        <Link to="/"> Creative Corner </Link>
                        <Link to="/"> Content Hub </Link>
                        <Link to="/"> Get Free Samples </Link>
                        <Link to="/"> Custom Project </Link>
                    </DivComponent>
                    <DivComponent className="secondNavTopSection">
                         <DivComponent>
                           <Logo src="./Images/Logo/new.svg" /> 
                          <Link to="/">My Influence Rewards</Link>
                         </DivComponent>
                         <DivComponent>
                             <Logo src="./Images/Logo/free.svg" />
                             <Link to="/">Marketing Cloud</Link>
                         </DivComponent>
                         <DivComponent>
                             <Link to="/">Blank Templates</Link>
                         </DivComponent>
                         <DivComponent>
                             <Logo src="./Images/Logo/crown.svg"/>
                             <Link to="/">Go Premium</Link>
                         </DivComponent>
                         </DivComponent>
               </DivComponent>
           </DivComponent> 
        
    )
}


export default NavTop