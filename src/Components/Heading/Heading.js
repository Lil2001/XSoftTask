import DivComponent from "../DivComponent/DivComponent"
import Text from "../Text/Text"
import Logo from "../Logo/Logo"
import "../Heading/Heading.css"

const Heading = (props) => {
    return (
        <DivComponent className="headingDiv">
            <DivComponent className="txtComp">
              <Text> {props.text} </Text>
              </DivComponent>
              <DivComponent className="headPic">
                     <Logo src="./Images/Logo/arrowwhitegreen.svg" />
                     <Logo src="./Images/Logo/arrowgreenright.svg" />
              </DivComponent>
        </DivComponent>
    )
}

export default Heading