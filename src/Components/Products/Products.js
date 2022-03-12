import DivComponent from "../DivComponent/DivComponent"
import Logo from "../Logo/Logo"
import Text from "../Text/Text"
import "../Products/Products.css"

const Products = (props) => {
    return (
        <DivComponent className={props.className} >
                 <DivComponent className="productsImgDiv">
                     <Logo src={props.src} />
                 </DivComponent>
                 <DivComponent>
                     <DivComponent className="textprodDiv">
                         <Text className="prodtext" > {props.textfirst} </Text>
                         <Text className="greenText"> FROM $79.00 </Text>
                         <DivComponent className="starComp"> 
                         <Logo src="./Images/Logo/starorange.svg" />
                         <Logo src="./Images/Logo/starorange.svg" />
                         <Logo src="./Images/Logo/starorange.svg" />
                         <Logo src="./Images/Logo/starorange.svg" />
                         <Logo src="./Images/Logo/starorange.svg" />
                         <Text>(61 Reviews)</Text>
                         </DivComponent>
                          <DivComponent className="txtCompDiv">
                                    <Text>Can you imagine a world without Post-its®? No? Neither can we!</Text>
                          </DivComponent>
                     </DivComponent>
                 </DivComponent>
        </DivComponent>
    )
}

export default Products