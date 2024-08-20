import { NavLink } from "react-router-dom";
import Pagenav from "../../src/components/Pagenav/Pagenav";

function Homepage(){
    return (
        <div>
            <Pagenav />
            <h1>worldTravel</h1>

            <NavLink to="/app">Go to the app</NavLink> 
        </div>
    )
}

export default Homepage;