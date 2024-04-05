import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./services/Router/RouteConfig";

function App() {
  return (
    <Router>
      <AppRoutes/>
    </Router>
  );
}

export default App;