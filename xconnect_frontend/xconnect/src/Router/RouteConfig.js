import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import LoginForm from "../components/loginForm"
import Events from "../pages/Events_Page/Events"
import Library from "../pages/Library_Page/Library"
import SubEvents from "../pages/Events_Page/SubEvents";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Login' element={<LoginForm />} />
                <Route path='/Events' element={<Events />} />
                <Route path='/Library' element={<Library />} />
                <Route path='/SubEvents' element={<SubEvents />} />
            </Routes>
        </>
    );
}