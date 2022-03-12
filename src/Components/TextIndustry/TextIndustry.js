import DivComponent from "../DivComponent/DivComponent"
import Text from "../Text/Text"
import Logo from "../Logo/Logo"
import "../TextIndustry/TextIndustry.css"

const TextIndustry = () => {
    return (
        <DivComponent className="indDiv">
                <Text>The Online Printing Company Trusted By Industry Leaders</Text>
                <DivComponent className="indImgDiv">
                     <Logo src="./Images/Logo/logo6.svg" />
                     <Logo src="./Images/Logo/logo7.svg" />
                     <Logo src="./Images/Logo/logo8.svg" />
                     <Logo src="./Images/Logo/logo9.svg" />
                     <Logo src="./Images/Logo/logo10.svg" />
                     <Logo src="./Images/Logo/logo12.svg" />
                </DivComponent>
        </DivComponent>
    )
}

export default TextIndustry