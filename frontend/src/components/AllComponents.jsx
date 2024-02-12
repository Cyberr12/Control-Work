import "./style.scss"
import Navigation from "./Navigation"
import { Routes, Route } from "react-router-dom";
import Ecs from "./Ecs"
import Kabinet from "./Kabinet"
import NoPage from "./NoPage"
import Countries from "./Countries";
import About from "./About"
import Kndr from "./Kndr"

function AllComponents() {
    return ( 
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Ecs />} />
                <Route path="/ecs" element={<Ecs />} /> 
                <Route path="/kabinet" element={<Kabinet />} />
                <Route path="/countries" element={<Countries />} />
                <Route path="/about" element={<About />} />
                <Route path="/kndr" element={<Kndr />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
     );
}

export default AllComponents;