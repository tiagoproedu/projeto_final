import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login.jsx";
import Admin from "./pages/Admin/Admin";
import Cadastro from "./pages/Cadastro/Cadastro";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/admin" Component={Admin} />
        <Route path="/cadastro" Component={Cadastro} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
