import { render, screen } from "@testing-library/react";
import { createBrowserRouter, MemoryRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth/context";
import { PublicRoute } from "../../src/router/PublicRoute";

describe("Pruebas en <PublicRoute/>", () => {
    test("debe de mostrar el children si no esta autenticado", () => {
        const contextValue = {
            logged: false,
        };
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <span>PublicRoute</span>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText("PublicRoute")).toBeTruthy();
    });

    test("debe de redireccionar al login si esta autenticado", () => {
        const contextValue = {
            logged: true,
            user: {
                name: "test",
                id: "123",
            },
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['login']}>
                    <Routes>
                        <Route path="login" element={<PublicRoute><h1>Ruta publica</h1></PublicRoute>} />
                        <Route path="marvel" element={<h1>Marvel page</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        screen.debug();
    });
});
