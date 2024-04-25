import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./services/Router/RouteConfig";
import ScrollToTop from "./modules/Scroll/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
