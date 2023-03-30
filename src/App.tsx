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
import LoadingOverlay from "react-loading-overlay-ts";
import { useSelector } from "react-redux";
import { getShowLoader } from "./redux/selectors";

function App() {
  const showLoader = useSelector(getShowLoader);
  return (
    <BrowserRouter>
      <Header />
      <LoadingOverlay
        active={showLoader}
        text=""
        styles={{
          overlay: (base) => ({
            ...base,
            background: "rgba(0, 0, 0, 0.3)",
          }),
        }}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/add-document" element={<AddDocument />}></Route>
          <Route path="/edit-document/:id" element={<AddDocument />}></Route>
          <Route path="/view-document/:id" element={<ViewDocument />}></Route>
        </Routes>
      </LoadingOverlay>
    </BrowserRouter>
  );
}

export default App;
