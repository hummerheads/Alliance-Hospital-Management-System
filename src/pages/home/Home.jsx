

import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Doctors from "./Doctors.Jsx";
import Contact from "./Contact";


const Home = () => {
    return (
        <div className=" md:mb-20 mb-10">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Doctors></Doctors>
            <Contact></Contact>

        </div>
    );
};

export default Home;