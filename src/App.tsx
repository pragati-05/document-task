import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AddDocument from "./pages/AddDocument";
import ViewDocument from "./pages/ViewDocument";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/add-document" element={<AddDocument />}></Route>
        <Route path="/edit-document/:id" element={<AddDocument />}></Route>
        <Route path="/view-document/:id" element={<ViewDocument />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
