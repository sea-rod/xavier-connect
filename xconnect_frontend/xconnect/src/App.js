import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "./pages/Library";
import LoginForm from './components/loginForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Events from "./pages/Events";
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/Login' element={<LoginForm />} />
        <Route path='/Events' element={<Events />}/>
        <Route path='/Library' element={<Library />}/>

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
