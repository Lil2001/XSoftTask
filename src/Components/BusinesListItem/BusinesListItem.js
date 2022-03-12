import { Link } from "react-router-dom"
import Item from "../Item/Item"
import Logo from "../Logo/Logo"

const BusinesListItem = (props) => {
  return (
      <Item>
          <Logo src={props.src} />
          <Link to="/"> {props.text} </Link>
      </Item>
  )
}

export default BusinesListItem