import List from "../List/List";
import DivComponent from "../DivComponent/DivComponent";
import Logo from "../Logo/Logo";
import Wrapper from "../Wrapper/Wrapper";
import Text from "../Text/Text";
import "./LeftSideBar.css"
import LeftSideFirstComponent from "../LeftSideFirstComponent/LeftSideFirstComponent";
import LeftSideNoLogoComponent from "../LeftSideNoLogoComponent/LeftSideNoLogoComponent";
import LeftSideTwoLogoComponent from "../LeftSideTwoLogoComponent/LeftSideTwoLogoComponent";


const LeftSideBar = () => {
    return (
        <Wrapper className="leftSideBar">
            <Wrapper className="leftSideBarOn">
                <DivComponent className="leftSideHeading">
                    <Logo src="./Images/Logo/star.svg"  />
                    <Text> All Products </Text>
                </DivComponent>
                <List>
                    <LeftSideFirstComponent src = "./Images/Logo/newgreen.svg">
                        Adhesive Vinyls
                    </LeftSideFirstComponent>
                    <LeftSideNoLogoComponent> Aluminum Signs </LeftSideNoLogoComponent>
                    <LeftSideFirstComponent src="./Images/Logo/newgreen.svg">
                        Appointment Cards
                    </LeftSideFirstComponent>
                    <LeftSideFirstComponent src="./Images/Logo/computer.svg" className="LeftSideBold">
                        Banners
                    </LeftSideFirstComponent>
                    <LeftSideNoLogoComponent>
                        Banner Stands
                    </LeftSideNoLogoComponent>
                    <LeftSideTwoLogoComponent srcfirst="./Images/Logo/book.svg" srcsecond="./Images/Logo/newgreen.svg">
                        Booklets
                    </LeftSideTwoLogoComponent>
                    <LeftSideNoLogoComponent> Bookmarks </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Boxes </LeftSideNoLogoComponent>
                    <LeftSideFirstComponent src="./Images/Logo/brocher.svg" className="LeftSideBold">
                        Brochures
                    </LeftSideFirstComponent>
                    <LeftSideNoLogoComponent> Buttons </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Calendars </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Canvas Prints </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Catalogs </LeftSideNoLogoComponent>
                    <LeftSideFirstComponent src="./Images/Logo/newgreen.svg">
                        Car Magnets
                    </LeftSideFirstComponent>
                    <LeftSideNoLogoComponent> CD Products </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Coroplast Signs </LeftSideNoLogoComponent>
                    <LeftSideFirstComponent src="./Images/Logo/corona.svg" className="LeftSideBold">
                        Covid-19 Products
                    </LeftSideFirstComponent>
                    <LeftSideNoLogoComponent> Carbonless Forms </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Counter Cards </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Door Hangers </LeftSideNoLogoComponent>
                    <LeftSideFirstComponent src="./Images/Logo/cutting.svg" className="LeftSideBold">
                        Die-Cutting
                    </LeftSideFirstComponent>
                    <LeftSideNoLogoComponent> Dry Erase Collection </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Envelopes </LeftSideNoLogoComponent>
                    <LeftSideFirstComponent src="./Images/Logo/newgreen.svg">
                        Event Badges
                    </LeftSideFirstComponent>
                    <LeftSideNoLogoComponent> Event Tents </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Event Tickets  </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Flags </LeftSideNoLogoComponent>
                    <LeftSideFirstComponent src="./Images/Logo/flyers.svg" className="LeftSideBold">
                        Flyers
                    </LeftSideFirstComponent>
                    <LeftSideNoLogoComponent> Floor Advertising </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Gift Certificates </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Greeting Cards </LeftSideNoLogoComponent>
                    <LeftSideFirstComponent src="./Images/Logo/newgreen.svg">
                        Hang Tags
                    </LeftSideFirstComponent>
                    <LeftSideNoLogoComponent> Invitations </LeftSideNoLogoComponent>
                    <LeftSideFirstComponent src="./Images/Logo/sale.svg" className="LeftSideBold">
                        Labels
                    </LeftSideFirstComponent>
                    <LeftSideNoLogoComponent> Lanyards </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Letterheads </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Magnets </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Menus </LeftSideNoLogoComponent>
                    <LeftSideFirstComponent src="./Images/Logo/newgreen.svg">
                        Mousepads
                    </LeftSideFirstComponent>
                    <LeftSideNoLogoComponent> Mugs </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Notepads </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Packaging Tape </LeftSideNoLogoComponent>
                    <LeftSideTwoLogoComponent srcfirst="./Images/Logo/product.svg" srcsecond="./Images/Logo/newgreen.svg">
                        Packaging Products
                    </LeftSideTwoLogoComponent>
                    <LeftSideFirstComponent src="./Images/Logo/postcard.svg" className="LeftSideBold">
                        Postcards
                    </LeftSideFirstComponent>
                    <LeftSideFirstComponent src="./Images/Logo/newgreen.svg">
                        Pop-Up Displays
                    </LeftSideFirstComponent>
                    <LeftSideNoLogoComponent> Post-its </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Presentation Folders </LeftSideNoLogoComponent>
                    <LeftSideFirstComponent src="./Images/Logo/promotional.svg" className="LeftSideBold">
                        Promotional Items
                    </LeftSideFirstComponent>
                    <LeftSideTwoLogoComponent srcfirst="./Images/Logo/plasticcard.svg" srcsecond="./Images/Logo/newgreen.svg">
                        Plastic Cards
                    </LeftSideTwoLogoComponent>
                    <LeftSideNoLogoComponent> Rackcards </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Real Estate Products </LeftSideNoLogoComponent>
                    <LeftSideFirstComponent src="./Images/Logo/newgreen.svg">
                        Sales Sheets
                    </LeftSideFirstComponent>
                    <LeftSideNoLogoComponent> Save the Date Cards </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Sidewalk Signs </LeftSideNoLogoComponent>
                    <LeftSideFirstComponent src="./Images/Logo/signing.svg" className="LeftSideBold">
                        Signs
                    </LeftSideFirstComponent>
                    <LeftSideFirstComponent src="./Images/Logo/sticker.svg" className="LeftSideBold">
                        Stickers
                    </LeftSideFirstComponent>
                    <LeftSideNoLogoComponent> T-Shirts </LeftSideNoLogoComponent>
                    <LeftSideFirstComponent src="./Images/Logo/comingsoon.svg">
                        Table Tents
                    </LeftSideFirstComponent>
                    <LeftSideNoLogoComponent> Thank You Cards </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Tissue Paper </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Tote Bags </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Trading Cards </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Window Clings </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Wall Art </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Wrapping Paper </LeftSideNoLogoComponent>
                    <LeftSideNoLogoComponent> Yard Signs </LeftSideNoLogoComponent>
                </List>
                <DivComponent className="leftSideSee">
                    <Logo src="./Images/Logo/see.svg" />
                    <Text className="leftSideLastText"> See All Products </Text>
                </DivComponent>
            </Wrapper>
            <DivComponent className="leftSideSee leftSideFooter">
                <Logo src="./Images/Logo/arrowbold.svg" />
                <Text className="leftSideLastText"> Yard Signs </Text>
            </DivComponent>
        </Wrapper>
    )
}



export  default  LeftSideBar