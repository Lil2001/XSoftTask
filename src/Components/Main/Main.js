import DivComponent from "../DivComponent/DivComponent"
import Heading from "../Heading/Heading"
import ImageCompMin from "../ImageCompMin/ImageCompMin"
import ImageComponent from "../ImageComponent/ImageComponent"
import Text from "../Text/Text"
import "../Main/Main.css"
import TextIndustry from "../TextIndustry/TextIndustry"
import MenDiv from "../MenDiv/MenDiv"
import Products from "../Products/Products"
import ImageCompPrint from "../ImagesCompPrint/ImageCompPrint"
import Button from "../Button/Button"
import BusinessBanner from "../BusinessBanner/BusinessBanner"
import BusinessBasic from "../BusinessBasic/BusinessBasic"
import MenTextComp from "../MenTextComp/MenTextComp"
import FirstBannerDiv from "../FirstBannerDiv/FirstBannerDiv"
import SecondBannerDiv from "../SecondBannerDiv/SecondBanner"
import MinNavigation from "../MinNavigation/MinNavigation"
import CornerNavigation from "../CornerNavigation/CornerNavigation"
import CornerDiv from "../CornerDiv/CornerDiv"
import IconsDiv from "../Iconsdiv/Iconsdiv"
import CornerDivMobile from "../CornerDivMobile/CornerDivMobile"
import CornerMobNav from "../CornerMobNav/CornerMobNav"
import BusinessBasicMobile from "../BusinessBasicMobile/BusinessBasicMobile"
import FirstBannerDivMobile from "../FirstBannerDivMobile/FirstBannerDivMobile"

const Main = (props) => {
    return (
        <DivComponent className={props.className}>
            <Heading
                text = "Featured Products"
            />  
            <DivComponent className="Imgcomp">
                <ImageComponent
                className="imgBack  imgFirst"
                 text="Business Cards" />
                 <ImageCompMin 
                 className="imgBackMin first"
                 text="Stickers"  />
                 <ImageCompMin 
                 className="imgBackMin second"
                 text="Postcards"  />
            </DivComponent>
            <DivComponent className="Imgcomp compSecond">
                 <ImageCompMin 
                 className="imgBackMin firstimg"
                 text="Poster"  />
                 <ImageCompMin 
                 className="imgBackMin secondimg"
                 text="Floor Graphics"  />
                  <ImageCompMin 
                 className="imgBackMax"
                 text="Direct Mail Postcards"  />

            </DivComponent>
                   <TextIndustry/>
                   <Heading
                text = "New Products"
            />  
            <DivComponent className="Imgcomp">
            <ImageCompMin 
                 className="imgBackMedium firstMed"
                 text="Raised Foil Business Cards"  />
            <ImageCompMin 
                 className="imgBackMedium secondMed"
                 text="Straight Tube Displays"  />
            <ImageCompMin 
                 className="imgBackMedium thirthMed"
                 text="Edge Painted Business Cards"  />
            </DivComponent>
            <Heading
                text = "Trusted By Fortune 500 Companies, Small Businesses, Non-Profits, and Start-Ups Across the US "
            />  
            <DivComponent className="menDiv">
                <MenDiv
                     src="./Images/Pictures/Ellipse 25.png"
                     textFirst = "“A business card is the first thing sees of my business, and 4OVER4’s second to none.”"
                     textGreen = "Pansiee Van Meter"
                     textGray = "Tattoo Artist and Designer, UK"
                     className="MenDivComp  MenChild3"
                />
                 <MenDiv
                     src="./Images/Pictures/Ellipse 26.png"
                     textFirst = "“As always, excellent service and professionalism. They expedited an order for me at no extra charge.”"
                     textGreen = "Pansiee Van Meter"
                     textGray = "Tattoo Artist and Designer, UK"
                     className="MenDivComp Menchild1"
                />
            </DivComponent>
            <DivComponent className="Minbanner">
               <FirstBannerDiv />
            </DivComponent>
            <DivComponent className="BannerMobFirst">
            <FirstBannerDivMobile />
            </DivComponent>
            <Heading 
            text = "Top Rated"
            />
            <DivComponent className="prodDiv">
                <Products 
                 src="./Images/Pictures/image 219.jpg"
                 textfirst = "Post-its"
                 className="productsDiv"
                />

                <Products 
                 src="./Images/Pictures/image 220.jpg"
                 textfirst = "Soft Touch Business Cards"
                 className="productsDiv child3"
                />
                 <Products 
                 src="./Images/Pictures/image 241.jpg"
                 textfirst = "Hangtags"
                 className="productsDiv child2"
                />
                 <Products 
                 src="./Images/Pictures/Rectangle 1101.jpg"
                 textfirst = "Spot Uv Business Cards"
                 className="productsDiv  child1"
                />
            </DivComponent>
            <Heading
                text="Most Popular Products"
            />

            <DivComponent className="MostpopProd">
            <ImageComponent
                className="imgBack"
                 text="Business Cards" />
                 <ImageCompMin 
                 className="imgBackMax"
                 text="Direct Mail Postcards"  />
            </DivComponent>
            <DivComponent className="MostPopMob">
            <ImageCompMin 
                 className="imgBackMob"
                 text="Direct Mail Postcards"  />
            </DivComponent>
            <DivComponent className="txtHeading">
                <Text className="print">4OVER4: The Easy Way to Do Your Printing Online</Text>
                <DivComponent className="forprint">
                <Heading
                 text = "4OVER4: The Easy Way to Do Your Printing Online"
                />
                </DivComponent>
            </DivComponent>
            <DivComponent className="printComp">
                <ImageCompPrint 
                text="Table Throws"
                className="imagePrint  firstPrint" />
                <ImageCompPrint
                text="Event Tents"
                className="imagePrint  secondPrint" />
                <ImageCompPrint
                text="Framed Posters"
                className="imagePrint  thirthPrint" />
                <Button className="printButton">Show All New!</Button>
            </DivComponent>
            <DivComponent className="txtHeading">
                <Text>Browse by Category</Text>
            </DivComponent>
            <DivComponent className="Business">
                <BusinessBasic />
                <BusinessBanner />
                <BusinessBasicMobile />
            </DivComponent>
            <DivComponent className="txtHeading">
                <Text>Why 4OVER4?</Text>
            </DivComponent>
            <DivComponent className="foreverTxt">
                 <MenTextComp 
                 textName = "Looking For An Online Printer?"
                 src = "./Images/Pictures/Group.png"
                 textFirstMen = "Needed it printed by yesterday? Well, that time machine we ordered hasn’t arrived yet. However, we do offer same day print turnaround for most of our print products. If you live or work in the area and you place your order before noon EST, you can even pick it up at our facility by the afternoon. That’s right, ready when you need it."
                 textSecondMen = "If you need it printed fast, then you’ve come to the right place."
                 />
                  <MenTextComp 
                 textName = "Personalized Printing: We Put The Custom In Customer"
                 src = "./Images/Pictures/Group1.png"
                 textFirstMen = "Custom printing means if you can imagine it, we can print it. What do you have in mind? We can print anything from precision die cut business cards to sprawling banners. Feel free to try out our Instant Price Calculator at the top right corner of every page. It’s designed to help you create a print product to meet your exact specifications—with no surprises."
                 textSecondMen = "Looking for more custom options? No matter the size, material, or finish, we’ll go the extra mile for you and find a way to make every corner and surface come to life."
                 />
                 <MenTextComp 
                 textName = "Green Printing Online: FSC Certified And Environmentally Approved"
                 src = "./Images/Pictures/Group2.png"
                 textFirstMen = "We print with vegetable based (soy) inks with low VOC emissions and offer remarkable paper options ranging from 30% post-consumer waste to 100% recycled. Our paper is chlorine free and certified by the Forest Stewardship Council (FSC)."
                 textSecondMen = "Satisfying our customers while protecting the environment is a top priority. That’s why we implement sustainable practices on all stages of our printing process. Because glamorous and green are not mutually exclusive, we have over 50 standard and novelty paper stock options that look as elegant as they feel, from shimmering metallic pearl to classic nude. And since they’re more forest friendly, we don’t have to sacrifice our environment to achieve the look you need."
                 />
            </DivComponent>

            <DivComponent className="Minbanner next">
                <SecondBannerDiv />
            </DivComponent>
            <MinNavigation />
            <DivComponent className = "corner">
                <CornerNavigation />
                <CornerDiv />
                <CornerDivMobile />
                <CornerMobNav />
            </DivComponent>
            <IconsDiv />
        </DivComponent>


    )
}

export default Main