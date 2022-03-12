import DivComponent from "../DivComponent/DivComponent"
import Text from "../Text/Text"
import "../Banner/Banner.css"
import Logo from "../Logo/Logo"
import Button from "../Button/Button"
const Banner = () => {
    return (
        <DivComponent className="banner">
            <DivComponent className="textbanner">
                  <Text className="firstText"> Business Cards For Every Occasion </Text>
                  <Text className="grayText"> THE LARGEST SELECTION ANYWHERE </Text>
                  <Text className="minText"> Over 100 Paper Types & Specialized Finishes <br/> 
                  Extreme Custom Cards Is Our Specialty
                  </Text>
                  <Button> SHOP NOW 
                      <Logo src="./Images/Logo/arrowwhite.svg" /> 
                  </Button>
            </DivComponent>
        </DivComponent>
    )
}
export default Banner