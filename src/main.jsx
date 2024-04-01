import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";

import "./styles.scss";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
