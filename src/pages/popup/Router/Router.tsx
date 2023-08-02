import { HashRouter, Route, Routes } from "react-router-dom";
import CreateAccount from "../pages/createAccount/Index";
// import CreatePassword from "../pages/create-password/create-password";
// import HeaderLanding from "../shared/Components/header-Landing";
import CreatePassword from "../pages/create-password/createPassword";
import SrpIntro from "../pages/srpIntro/srpIntro";
import Srp from "../pages/SRP/srp";
import SrpTest from "../pages/SRPtest/srpTest";

const Routers = () => {
  console.log("Router");
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CreateAccount />}></Route>
        <Route path="/CreatePassword" element={<CreatePassword />}></Route>
        <Route path="/srpIntro" element={<SrpIntro />}></Route>
        <Route path="/Srp" element={<Srp />}></Route>
        <Route path="/SrpTest" element={<SrpTest />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Routers;
