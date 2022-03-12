import DivComponent from "../DivComponent/DivComponent"
import Text from "../Text/Text"
import Button from "../Button/Button"
import Logo from "../Logo/Logo"
import "../FirstBannerDiv/FirstBannerDiv.css"

const FirstBannerDiv = () => {
    return (
        <DivComponent className="bannerFirstDiv">
                    <Button className="Firstbgreen">FROM 25.00$ </Button>
                    <Text>Aluminum Sign Panels</Text>
                    <Button className="orangebButton">Shop Now 
                        <Logo src="./Images/Logo/Vector208.svg" />
                    </Button>
        </DivComponent>
    )
}

export default FirstBannerDiv