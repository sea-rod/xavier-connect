import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './shared/components/Navbar/Navbar';
import Footer from './shared/components/Footer/Footer';
import AppRoutes from "./Router/RouteConfig";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
