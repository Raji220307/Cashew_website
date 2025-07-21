import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navcashew from "./components/Navcashew";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductPage from "./ProductPage";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import HealthBenefits from "./HelathBenefits"; 
import CashewFarming from "./CashewFarming";
import Processing from "./Processing";
import ExportTrade from "./ExportTrade";
import Cart from "./Cart";
// import ProductForm from "./components/ProductForm"; 

function App() {
  const userRole = localStorage.getItem("userRole"); 

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
            <Route
              path="/admin/add-product"
              element={
                userRole === "admin" ? (
                  <ProductForm addProduct={() => {}} />
                ) : (
                  <p className="text-center mt-5">Access Denied: Admins only</p>
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
