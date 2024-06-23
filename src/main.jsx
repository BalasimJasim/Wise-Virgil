import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BookStoreProvider from "./context/BookProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BookStoreProvider>
    <App />
  </BookStoreProvider>
);
