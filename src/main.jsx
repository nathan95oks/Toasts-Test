import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App.jsx'
import { ToastProvider } from './toast/ToastContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
)
