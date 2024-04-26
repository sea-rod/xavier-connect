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
import Announcement from "../../modules/calendar/AnnoucementDetails";
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
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/events" element={<Events />} />
        <Route path="/subEvents" element={<SubEvents />} />
        <Route path="/library" element={<Library />} />
        <Route path="/canteen" element={<Canteen />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<CheckOut />} />
        <Route path="/helpLine" element={<HelpLine />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/timeTable" element={<TimeTable />} />
        <Route path="/library" element={<CombinedComponent />} />
        <Route path="/reserveBook" element={<ReserveBook />} />
        <Route path="/newpage" element={<Newpage />} />
        <Route path="/reset-form" element={<ResetPasswordEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}
