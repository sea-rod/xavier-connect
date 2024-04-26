import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import LoginForm from "../../pages/Login/loginForm";
import Events from "../../modules/events/pages/Events";
import Library from "../../modules/Library_Page/Library";
import SubEvents from "../../modules/events/pages/SubEvents";
import Canteen from "../../modules/canteen/pages/MainPage/Canteen";
import Order from "../../modules/canteen/pages/Order/Order";
import CheckOut from "../../modules/canteen/pages/Cart/CheckOut";
import SignUp from "../../pages/Sign up/SignUp";
import Calendar from "../../modules/calendar/Calendar";
import HelpLine from "../../modules/helpLine/helpline";
import TimeTable from "../../modules/timetable/TTGenerator";
import CombinedComponent from "../../modules/Library_Page/Library";
import ReserveBook from "../../modules/Library_Page/ReserveBook";
import Newpage from "../../modules/Library_Page/Newpage";
import ResetPassword from "../../pages/ResetPassword/resetPassword";
import ResetPasswordEmail from "../../pages/ResetPassword/resetPassowordEmail";
export default function RouterClientConfig() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/SubEvents" element={<SubEvents />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/Canteen" element={<Canteen />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Cart" element={<CheckOut />} />
        <Route path="/HelpLine" element={<HelpLine />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/TimeTable" element={<TimeTable />} />
        <Route path="/ReserveBook" element={<ReserveBook />} />
        <Route path="/Newpage" element={<Newpage />} />
        <Route path="/reset-form" element={<ResetPasswordEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}
