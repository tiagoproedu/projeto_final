import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import Admin from "./pages/Admin/Admin";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/login" Component={Login}/>
                <Route path="/admin" Component={Admin}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;