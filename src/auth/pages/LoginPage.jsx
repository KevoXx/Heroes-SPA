import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PublicRoute } from "../../router/PublicRoute";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
    const navigate = useNavigate();

     const {login} = useContext(AuthContext);
    const onLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';
        login('Kevin');
        navigate(lastPath, {
            replace: true,
        });

    };
    return (
        <PublicRoute>
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button className="btn btn-primary" onClick={onLogin}>
                Login
            </button>
        </div>
        </PublicRoute>
    );
};
