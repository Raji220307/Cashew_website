import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
import Loading from "./components/Loading";
import ProductForm from "./components/ProductForm";
import Login from "./Login";
import Register from "./components/Register"; 
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";

// ✅ Admin components
import AdminNavbar from "./components/AdminNavbar";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminUsers from "./pages/admin/AdminUsers";

function App() {
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || "");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  const isAdmin = userRole && userRole.trim().toLowerCase() === "admin";

  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        {/* ✅ Role-based navbar */}
        {isAdmin ? <AdminNavbar /> : <Navcashew userRole={userRole} />}

        <div className="flex-grow-1" style={{ marginTop: "80px" }}>
          <Routes>
            {/* ✅ USER ROUTES */}
            {!isAdmin && (
              <>
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
                <Route path="/checkout" element={<CheckoutPage />} />
              </>
            )}

            {/* ✅ AUTH ROUTES */}
            <Route path="/login" element={<Login setUserRole={setUserRole} />} />
            <Route path="/register" element={<Register />} />

            {/* ✅ ADMIN ROUTES */}
            {isAdmin && (
              <>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/admin/orders" element={<AdminOrders />} />
                <Route path="/admin/users" element={<AdminUsers />} />
                <Route path="/admin/add-product" element={<ProductForm />} />
              </>
            )}

            {/* 🚫 Fallback if route doesn’t exist */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>

        {!isAdmin && <Footer />}
      </Router>
    </div>
  );
}

export default App;
