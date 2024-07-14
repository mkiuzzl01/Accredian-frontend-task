import FAQ from "../FAQ/FAQ";
import Get_In_Touch from "../Get_In_Touch/Get_In_Touch";
import Hero from "../Hero/Hero";
import Refer from "../Refer/Refer";
import Refer_Benefits from "../Refer_Benefits/Refer_Benefits";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Refer></Refer>
            <Refer_Benefits></Refer_Benefits>
            <FAQ></FAQ>
            <Get_In_Touch></Get_In_Touch>
        </div>
    );
};

export default Home;