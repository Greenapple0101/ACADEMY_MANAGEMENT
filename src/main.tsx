import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ✅ 여기서는 <App />만 렌더링
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
