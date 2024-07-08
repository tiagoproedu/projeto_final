import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;