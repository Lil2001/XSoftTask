import DivComponent from "../DivComponent/DivComponent"
import Logo from "../Logo/Logo"
import "../Iconsdiv/Iconsdiv.css"

const IconsDiv = () => {
    return (
    <DivComponent className="Iconsdiv">
        <Logo src="./Images/Logo/Component1.svg" />
        <Logo src="./Images/Logo/Componentinst.svg" />
        <Logo src="./Images/Logo/Componentfb.svg" />
        <Logo src="./Images/Logo/Componentpint.svg" />
        <Logo src="./Images/Logo/Componentlink.svg" />
    </DivComponent>
    )
}

export default IconsDiv