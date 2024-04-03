import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './shared/components/Navbar/Navbar';
import Footer from './shared/components/Footer/Footer';
import AppRoutes from "./services/Router/RouteConfig";
import Cdash from "./modules/canteen/CDashboard/cdash";
import Topbar from "./modules/canteen/CDashboard/shared/Topbar";
import Sidebar from "./modules/canteen/CDashboard/shared/Sidebar"
import Dashboardroutes from "./modules/canteen/CDashboard/Router/Dashboardroutes";
// import Additems from "./modules/canteen/CDashboard/pages/Additems";
// import Cancelledorders from "./modules/canteen/CDashboard/pages/Cancelledorders";
// import Dashboard from "./modules/canteen/CDashboard/pages/Dashboard";
// import Inventory from "./modules/canteen/CDashboard/pages/Inventory";
// import Neworders from "./modules/canteen/CDashboard/pages/Neworders";
// import Ongoingorders from "./modules/canteen/CDashboard/pages/Ongoingorders";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <AppRoutes />
              <Footer />
            </>
          }
        />
        <Route
          path="/d/*"
          element={
            <>
              <Topbar />
              <div className="app">
                <Sidebar>
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/neworders" element={<Neworders />} />
                    <Route path="/ongoingorders" element={<Ongoingorders />} />
                    <Route path="/cancelledorders" element={<Cancelledorders />} />
                    <Route path="/additems" element={<Additems />} />
                    <Route path="/inventory" element={<Inventory />} />
                  </Routes>
                </Sidebar>
              </div>
              <Cdash />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;





{/* <Topbar />
              <div className="app">
                <Sidebar>
                  <Dashboardroutes />
                </Sidebar>
              </div> */}