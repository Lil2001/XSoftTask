import DivComponent from "../DivComponent/DivComponent"
import Text from "../Text/Text"
import "../ImagesCompPrint/ImagesCompPrint.css"

const ImageCompPrint = (props) => {
  return (
      <DivComponent className={props.className}>
          
              <Text> {props.text} </Text>
         
      </DivComponent>
  )
}

export default ImageCompPrint