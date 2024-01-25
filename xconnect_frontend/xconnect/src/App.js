import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './components/loginForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Canteen from './pages/Canteen';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/Login' element={<LoginForm />} />
        <Route path='/Canteen' element={<Canteen />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
