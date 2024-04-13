import AboutMe from "./AboutMe"
import ContactMe from "./ContactMe"
import Footer from "./Footer"
import Header from "./Header"
import MyServices from "./MyServices"
import NavBar from "./NavBar"
import Portfolio from "./Portfolio"
import Testimonial from "./Testimonial"
import WorkWithMe from "./WorkWithMe"

export default function Main() {
    return (
        <>
            <NavBar />
            <Header />
            <AboutMe />
            <MyServices />
            <Portfolio />
            <WorkWithMe />
            <Testimonial />
            <ContactMe />
            <Footer />
        </>
        
    )
}