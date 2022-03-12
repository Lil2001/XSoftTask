import Button from "../Button/Button"
import DivComponent from "../DivComponent/DivComponent"
import Logo from "../Logo/Logo"
import Text from "../Text/Text"
import "../ImageComponent/ImageComponent.css"

const ImageComponent = (props) => {
    return (
        <DivComponent className={props.className}>
            <DivComponent className="divImage">
                <Text className="textHeading">{props.text}</Text>
                <DivComponent className="buttonComponent">
                    <Button className="greenButton">FROM 25.00$</Button>
                    <Button className="orangeButton">SHOP NOW 
                        <Logo src="./Images/Logo/arrowwhite.svg" />
                    </Button>
                </DivComponent>
            </DivComponent>
        </DivComponent>
    )
}

export default ImageComponent