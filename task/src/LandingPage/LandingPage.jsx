import NavBar from "../NavBar/NavBar";
import Robust from "./robust/Robust";
import Create from "./create-sell-handle/Create";
import Talktosales from "./talktosales/Talktosales";
import Trustedby from "./trustedby/Trustedby";
import Riskfree from "./riskfree/Riskfree";
import OnDemand from "./ondemand/OnDemand";
function LandingPage() {
    return ( 
        <>
        <NavBar/>
        <Robust/>
        <OnDemand/>
        <Create/>
        <Talktosales/>
        <Trustedby/>
        <Riskfree/>
        </>
     );
}

export default LandingPage;