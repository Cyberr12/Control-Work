import "./style.scss"
import About from "./About"
import { Routes, Route } from "react-router-dom";
import Ecs from "./Ecs"

function AllComponents() {
    return ( 
        <Routes>
            <Route path="/" element={<About />}>
                <Route index element={<Ecs />} />
                <Route path="/about" element={<Ecs />} />
            </Route>
        </Routes>
     );
}

export default AllComponents;