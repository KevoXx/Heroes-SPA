import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "../auth/context";
import { LoginPage } from "../auth/pages/LoginPage";
import { DcPage, MarvelPage, SearchPage, HeroPage } from "../heroes";
import { HeroesApp } from "../HeroesApp";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    

    const router = createBrowserRouter([
        {
            path: "login",
            element: <PublicRoute><LoginPage /></PublicRoute>,
        },
        {
            path: "/",
            element: <HeroesApp />,
            children: [
                {
                    path: "/",
                    element: <Navigate to={"/marvel"} />,
                },
                {
                    path: "marvel",
                    element: <MarvelPage />,
                },
                {
                    path: "dc",
                    element: <DcPage />,
                },
                {
                    path: "search",
                    element: <SearchPage />,
                },
                {
                    path: "hero/:id",
                    element: <HeroPage />,
                },
            ],
        },
        {
            path: "*",
            element: <Navigate to={"/login"} />,
        },
    ]);
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
};
