import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/login" Component={Login}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;