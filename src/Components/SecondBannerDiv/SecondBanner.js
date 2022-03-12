import DivComponent from "../DivComponent/DivComponent"
import Text from "../Text/Text"
import Button from "../Button/Button"
import Logo from "../Logo/Logo"
import "../SecondBannerDiv/SecondBannerDiv.css"

const SecondBannerDiv = () => {
    return (
        <DivComponent className="bannerSecondDiv">
                    <Text className="FirstTextBanner">Get your Free Sample Pack!</Text>
                    <Text className="GreyTXTBanner">Our sample pack includes a wide range of paper types, finishes and custom printing options.</Text>
                    <Button className="greenbButton">GET FREE SAMPLES
                        <Logo src="./Images/Logo/Vector209.svg" />
                    </Button>
        </DivComponent>
    )
}

export default SecondBannerDiv