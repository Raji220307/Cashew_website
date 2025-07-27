import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navcashew from "./components/Navcashew";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductPage from "./ProductPage";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import HealthBenefits from "./HealthBenfits"; 
import CashewFarming from "./CashewFarming";
import Processing from "./Processing";
import ExportTrade from "./ExportTrade";
import Cart from "./Cart";
import Loading from "./components/Loading";
import ProductForm from "./components/ProductForm";
import Login from "./Login";
import Register from "./components/Register"; 

function App() {
  const [loading, setLoading] = useState(true);
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Navcashew />

        <div className="flex-grow-1" style={{ marginTop: "80px" }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Testimonials />
                  <Contact />
                </>
              }
            />

            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/health" element={<HealthBenefits />} />
            <Route path="/farming" element={<CashewFarming />} />
            <Route path="/processing" element={<Processing />} />
            <Route path="/export" element={<ExportTrade />} />
            <Route path="/cart" element={<Cart />} />

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/*  Admin Route with Role Check */}
            <Route
              path="/admin/add-product"
              element={
                userRole === "admin" ? (
                  <ProductForm />
                ) : (
                  <div className="container mt-5 text-center">
                    <h2 className="text-danger">Access Denied</h2>
                    <p>You must be an admin to access this page.</p>
                  </div>
                )
              }
            />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
