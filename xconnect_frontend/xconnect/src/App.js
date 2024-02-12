import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './components/loginForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from "./pages/Events";
import Canteen from "./pages/Canteen";
import CheckOut from "./components/Cartitem/CheckOut";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/Login' element={<LoginForm />} />
        <Route path='/Events' element={<Events />}/>
        <Route path='/Canteen' element={<Canteen />}/>
        <Route path='/Cart' element={<CheckOut />}/>
        <Route path='/BtoCanteen' element={<Canteen />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
