import { Link } from "react-router-dom"
import DivComponent from "../DivComponent/DivComponent"
import "../MinNavigation/MinNavigation.css"

const MinNavigation = () => {
    return (
        <DivComponent className="MinNavDiv">
            <DivComponent className="LinkMinDiv">
            <Link to="/">Creative Corner </Link>
            <Link to="/"> Content Hub </Link>
            <Link className="navchild1" to="/">Business Resources</Link>
            <Link className="navchild1" to="/"> Community </Link>
            </DivComponent>
        </DivComponent>
    )
}

export default MinNavigation