import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import LoginForm from "../../pages/Login/loginForm";
import Events from "../../modules/events/pages/Events";
// import Library from "../../modules/Library_Page/Library";
import SubEvents from "../../modules/events/pages/SubEvents";
import Canteen from "../../modules/canteen/pages/MainPage/Canteen";
import CheckOut from "../../modules/canteen/pages/Cart/CheckOut";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/SubEvent" element={<SubEvents />} />
        {/* <Route path="/Library" element={<Library />} /> */}
        <Route path="/Canteen" element={<Canteen />} />
        <Route path="/Cart" element={<CheckOut />} />
        <Route path="/BtoCanteen" element={<Canteen />} />
      </Routes>
    </>
  );
}
