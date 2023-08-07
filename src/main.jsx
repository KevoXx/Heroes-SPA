import ReactDOM from "react-dom/client";
import { AuthProvider } from "./auth/context";

import { AppRouter } from "./router/AppRouter";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>

    <AppRouter />

    // </React.StrictMode>
);
