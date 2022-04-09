import Chirp from "./Chirp";
import Navbar from "./Navbar";
import Rain from "./Rain";
import { Grid } from "./Styles/Grid.Styled";
import Thunder from "./Thunder";
import Fan from "./Fan";
import Clock from "./Clock";
import Train from "./Train";
import Ocean from "./Ocean";
import Stadium from "./Stadium";
import Leaves from "./Leaves";
import Footer from "./Footer";

const Main = () => {
    return ( 
        <>
            <Navbar />

            <br></br>
            <br></br>
            <Grid>
                <Rain />
                <Thunder />
                <Chirp />
                <Fan />
                <Clock />
                <Train />
                <Ocean />
                <Stadium />
                <Leaves />

            </Grid>
                <Footer />
        
        </>
     );
}
 
export default Main;