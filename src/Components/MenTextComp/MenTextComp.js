import DivComponent from "../DivComponent/DivComponent"
import Logo from "../Logo/Logo"
import Text from "../Text/Text"
import "../MenTextComp/MenTextComp.css"

const MenTextComp = (props) => {
    return (
        <DivComponent className="menTextDiv">
            <DivComponent className="headingTxt">
                <Text>  {props.textName}  </Text>
            </DivComponent>
            <DivComponent className="MentxtImg">
                <Logo src={props.src} />
            </DivComponent>
            <DivComponent className="mentxtGray">
                <Text>{props.textFirstMen}</Text>
                <Text>{props.textSecondMen}</Text>
            </DivComponent>
        </DivComponent>
    )
}

export default MenTextComp