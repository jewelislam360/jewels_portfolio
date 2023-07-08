import Aboutme from "../Aboutme/Aboutme";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Aboutme></Aboutme>
            <Services></Services>
            <Skills></Skills>
            <Projects></Projects>
            <ContactMe></ContactMe>
            
        </div>
    );
};

export default Home;