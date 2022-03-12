import Banner from "../../Components/Banner/Banner"
import BannerMobile from "../../Components/BannerMobile/BannerMobile"
import DivComponent from "../../Components/DivComponent/DivComponent"
import NavBar from "../../Components/NavBar/NavBar"
import Wrapper from "../../Components/Wrapper/Wrapper"
import "../HomePage/HomePage.css"
import Main from "../../Components/Main/Main"
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar"
import Footer from "../../Components/Footer/Footer"


const HomePage = () => {
    return(
        <Wrapper>
            <NavBar />
                 
                <Banner />
                <BannerMobile />
                <DivComponent className="all" >
                    <LeftSideBar />
                    <Main className="main" />
                  
                </DivComponent>
                <Footer />
        </Wrapper>

    )
}


export default HomePage