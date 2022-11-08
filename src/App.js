import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/partials/Layout";
import Home from "./components/home/Home";
import ProductServices from "./components/product-services/ProductServices";
import About from "./components/about/About";
import ContactUs from "./components/contacts/ContactUs";
import Login from "./components/login/Login";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product-services" element={<ProductServices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
