import "@unocss/reset/tailwind-compat.css";
import "virtual:uno.css";
import "../app/styles.css";
import "./styles.css";

import ReactDOM from "react-dom/client";
import { App } from "./_internal/app";

const root = document.getElementById("app") as HTMLElement;
ReactDOM.createRoot(root).render(<App />);
