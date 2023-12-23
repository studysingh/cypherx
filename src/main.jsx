import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GroupAndOrderProvider from "./store/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GroupAndOrderProvider>
      <App />
    </GroupAndOrderProvider>
  </React.StrictMode>
);
