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
import Haiti from "./Haiti";

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
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
     );
}

export default AllComponents;