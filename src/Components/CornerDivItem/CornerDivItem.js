import DivComponent from "../DivComponent/DivComponent"
import Logo from "../Logo/Logo"
import Text from "../Text/Text"
import "../CornerDivItem/CornerDivItem.css"

const CornerDivItem = (props) => {
    return (
        <DivComponent className="cornerDiv">
            <Logo className="cornerimg" src={props.src} />
            <DivComponent className="txtcornerItem">
                <Text className="textcFirst">{props.textcFirst}</Text>
                <Text className="textcSecond">{props.textcSecond}</Text>
            </DivComponent>
        </DivComponent>
    )
}

export default CornerDivItem