import { Outlet } from "react-router-dom";
import { PrivateRoute } from "./router/PrivateRoute";

import { Navbar } from "./ui";

export const HeroesApp = () => {
    return (
        <PrivateRoute>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </PrivateRoute>
    );
};
