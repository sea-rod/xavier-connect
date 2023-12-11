import './App.css';
import LoginForm from './components/loginForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <h2 className="textstyle">Welcome to XConnect</h2>
      <LoginForm />
      <Footer />
    </>
  );
}

export default App;
