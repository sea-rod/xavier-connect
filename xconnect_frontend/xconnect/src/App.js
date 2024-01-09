import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './components/loginForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <h2 className="textstyle">Welcome to XConnect</h2>
        <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/Login' element={<LoginForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
