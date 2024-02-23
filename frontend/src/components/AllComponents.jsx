import "./style.scss"
import Navigation from "./Navigation"
import { Routes, Route } from "react-router-dom";
import Ecs from "./Ecs"
import NoPage from "./NoPage"
import Countries from "./Countries";
import About from "./About"
import Kndr from "./Kndr"
import Iraq from "./Iraq"
import Syriya from "./Syriya"
import Afgan from "./Afgan"
import Place from "./Place"
import Haiti from "./Haiti";
import Gory from "./Gory";
import Developers from "./Ecs/Developers";
import ElonMusk from "./Ecs/Developers/ElonMusk"
import Niger from "./Ecs/Developers/Niger"
import Sigma from "./Ecs/Developers/Sigma"
import Gigachad from "./Ecs/Developers/Gigachad"
import Registration from "./Registaition"

function AllComponents() {
    return ( 
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Ecs />} />
                <Route path="/ecs" element={<Ecs />} /> 
                <Route path="/countries" element={<Countries />} />
                <Route path="/about" element={<About />} />
                <Route path="/kndr" element={<Kndr />} />
                <Route path="/iraq" element={<Iraq />} />
                <Route path="/syriya" element={<Syriya />} />
                <Route path="/afgan" element={<Afgan />} />
                <Route path="/haiti" element={<Haiti />} />
                <Route path="/gory" element={<Gory />} />
                <Route path="/ecs/developers" element={<Developers />} />
                <Route path="/ElonMusk" element={<ElonMusk />} />
                <Route path="/Niger" element={<Niger />} />
                <Route path="/Sigma" element={<Sigma />} />
                <Route path="/Place" element={<Place />} />
                <Route path="/Gigachad" element={<Gigachad />} />
                <Route path="/Registration" element={<Registration />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
     );
}

export default AllComponents;