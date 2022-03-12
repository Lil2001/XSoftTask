import Button from "../Button/Button"
import DivComponent from "../DivComponent/DivComponent"
import Text from "../Text/Text"
import "../ImageCompMin/ImageCompMin.css"

const ImageCompMin = (props) => {
    return (
        <DivComponent className={props.className}>
            <DivComponent className="divImageMin">
                <Text className="textHeading">{props.text}</Text>
                <DivComponent className="buttonComponent">
                    <Button className="greenButtonMin">FROM 25.00$</Button>
                </DivComponent>
            </DivComponent>
        </DivComponent>
    )
}

export default ImageCompMin