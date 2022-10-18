import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import socket from "socket.io-client";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import "react-toastify/dist/ReactToastify.css";

socket.connect("http://localhost:5000");

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
