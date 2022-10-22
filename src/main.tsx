import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import NotificationsContextProvider from "./NotificationsContextProvider"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NotificationsContextProvider>
      <App />
    </NotificationsContextProvider>
  </React.StrictMode>,
)
