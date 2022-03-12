import DivComponent from "../DivComponent/DivComponent"
import Logo from "../Logo/Logo"
import Text from "../Text/Text"
import "../MenDiv/MenDiv.css"

const MenDiv = (props) => {
    return (
        <DivComponent className={props.className}>
            <DivComponent className="compFirstDiv">
                 <Logo className="imgmen" src={props.src} alt="picture" />
                 <DivComponent className="starCompGreen">
                     <Text>{props.textFirst}</Text>
                     <Logo src="./Images/Logo/star.svg" />
                     <Logo src="./Images/Logo/star.svg" />
                     <Logo src="./Images/Logo/star.svg" />
                     <Logo src="./Images/Logo/star.svg" />
                     <Logo src="./Images/Logo/star.svg" />
                 </DivComponent>
            </DivComponent >
                     
            <DivComponent className="compDivSecond">
            <Text className="green">{props.textGreen}</Text>
             <Text className="grey">{props.textGray}</Text>
            </DivComponent>
        </DivComponent>
    )
}

export default MenDiv