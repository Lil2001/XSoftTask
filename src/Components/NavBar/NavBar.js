import Wrapper from "../Wrapper/Wrapper" 
import NavTop from "../NavTop/NavTop"
import NavCenter from "../NavCenter/NavCenter"
import NavBottom from "../NavBottom/NavBottom"
import "../NavBar/NavBar.css"
import NavBarMobile from "../NavBarMobile/NavBarMobile"
const NavBar = () =>{
  return(
  <Wrapper className="navbars">
      <NavTop />
      <NavCenter />
      <NavBottom />
      <NavBarMobile />
  </Wrapper>
  )
}

export default NavBar