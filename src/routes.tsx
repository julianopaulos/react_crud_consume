import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home/index';
import Register from './Pages/Register/index';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/users" element={<span>Users</span>} />
            </Routes>
        </BrowserRouter>
    );
}
