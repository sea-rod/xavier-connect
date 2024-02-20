import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/loginForm";
import Navbar from "./shared/components/Navbar/Navbar";
import Footer from "./shared/components/Footer/Footer";
import Home from "./pages/Home/Home";
import Events from "./modules/events/Events";
import CheckOut from "./modules/canteen/pages/Cart/CheckOut";
import Canteen from "./modules/canteen/pages/MainPage/Canteen";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Canteen" element={<Canteen />} />
          <Route path="/Cart" element={<CheckOut />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
