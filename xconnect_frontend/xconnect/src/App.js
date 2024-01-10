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
        <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/Home'element={<Home />}/>
        <Route path='/Login' element={<LoginForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
