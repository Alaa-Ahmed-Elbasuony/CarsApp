import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CarsContextProvider } from "./Context/CarsContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CarsContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CarsContextProvider>
);
