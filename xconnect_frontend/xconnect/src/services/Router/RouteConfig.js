import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import LoginForm from "../../pages/Login/loginForm";
import Events from "../../modules/events/pages/Events";
//import Library from "../../modules/Library_Page/Library";
import SubEvents from "../../modules/events/pages/SubEvents";
import Canteen from "../../modules/canteen/pages/MainPage/Canteen";
import CheckOut from "../../modules/canteen/pages/Cart/CheckOut";
import SignUp from "../../pages/Sign up/SignUp" 

import Calendar from "../../modules/calendar/calendar";
import Admin from "../../modules/canteen/Admin/admin";
import Cdash from "../../modules/canteen/CDashboard/cdash";
import HelpLine from "../../modules/helpLine/helpline";

export default function AppRoutes() {
    return (
      <>
        <Routes>
                <Route path='/d' element={<Cdash />} />
          <Route path="/" element={<Home />} />
          <Route path="/a" element={<Admin />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/SubEvents" element={<SubEvents />} />
          {/* <Route path='/Library' element={<Library />} /> */}
          <Route path="/Canteen" element={<Canteen />} />
          <Route path="/Cart" element={<CheckOut />} />
          <Route path="/BtoCanteen" element={<Canteen />} />
          <Route path='/Calendar' element={<Calendar />} />
          <Route path='/HelpLine' element={<HelpLine />} />
        </Routes>
      </>
    );
}