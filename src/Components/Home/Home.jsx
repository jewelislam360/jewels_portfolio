import Aboutme from "../Aboutme/Aboutme";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Aboutme></Aboutme>
            <Services></Services>
            <Skills></Skills>
            
        </div>
    );
};

export default Home;