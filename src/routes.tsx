import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home/index';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<span>About</span>} />
                <Route path="/users" element={<span>Users</span>} />
            </Routes>
        </BrowserRouter>
    );
}
