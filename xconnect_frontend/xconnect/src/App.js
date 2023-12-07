import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <h1>St. Xavier's College Mapusa, Goa</h1>
    <h2>Connecting bla bla bla</h2>
    <img src="st-xaviers-college.jpg" class="rounded mx-auto d-block" height={250} width={500} alt=""/><br />

    <Footer/>
    </>
  );
}

export default App;
