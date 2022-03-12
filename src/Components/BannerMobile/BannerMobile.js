import DivComponent from "../DivComponent/DivComponent"
import Text from "../Text/Text"
import "../BannerMobile/BannerMobile.css"
import Button from "../Button/Button"
import Logo from "../Logo/Logo"
const BannerMobile = () => {
    return (
            <DivComponent className="mobileText">
                   <Text className="firstTextMob"> Let Them Know You Are Back In Business. </Text>
                   <Text className="secondTextMob"> Let Them Know You Are <br/> Back In Business. </Text>
                   <Text className="grayTextMob"> CLICK AND BUY. FREE PRE-DESIGNED TEMPLATES </Text>
                   <Button>SHOP NOW
                   <Logo src="./Images/Logo/playorange.svg" /> 
                   </Button>
            </DivComponent>
        
    )
}
export default BannerMobile