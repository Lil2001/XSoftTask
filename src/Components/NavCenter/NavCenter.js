import "../NavCenter/NavCenter.css"
import DivComponent from "../DivComponent/DivComponent"
import Logo from "../Logo/Logo"
import Button from "../Button/Button"
import Text from "../Text/Text"
import InputElement from "../InputElement/InputElement"

const NavCenter = () => {
    return (
       <DivComponent className="navCenter">
           <DivComponent>
                <Logo className="green" src="./Images/Logo/green.svg"  />
                <Logo className="forever" src="./Images/Logo/forever.svg" />
           </DivComponent>
           <DivComponent className="search">
                <InputElement type="text" placeholder="Search Products" />
                <Button>
                   <Logo src="./Images/Logo/searchgray.svg" />
               </Button>
           </DivComponent>
           <DivComponent className="signin">
                 <Logo src="./Images/Logo/sign.svg"  />
                 <DivComponent>
                 <Text> ACCOUNT </Text>
                 <DivComponent className="accsignin">
                    <Text> Sign In </Text>
                    <Logo src="./Images/Logo/arrowgray.svg"  />
                 </DivComponent>
                 </DivComponent>
           </DivComponent>
           <DivComponent>
                <Logo src="./Images/Logo/korzina.svg"  />
                <Text className="card"> CART </Text>
                <Logo src="./Images/Logo/zero.svg"  />
           </DivComponent>
       </DivComponent> 
    )
}

export default NavCenter