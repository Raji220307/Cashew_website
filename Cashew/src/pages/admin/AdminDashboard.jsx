import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../../components/ProductForm.jsx";

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch products from your deployed backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://cashew-backend-1.onrender.com/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to load products:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete product
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`https://cashew-backend-1.onrender.com/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProducts(products.filter((p) => p._id !== id));
      alert("Product deleted successfully!");
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Error deleting product.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-5">Loading products...</p>;

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold" style={{ color: "#4B352A" }}>
          📊 Admin Dashboard
        </h2>
        <button
          className="btn btn-success"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Hide Form" : "➕ Add Product"}
        </button>
      </div>

      {showForm && (
        <div className="mb-5">
          <ProductForm fetchProducts={fetchProducts} />
        </div>
      )}

      <h4 className="mt-4 mb-3" style={{ color: "#4B352A" }}>
        🛍️ All Products
      </h4>

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div key={product._id} className="col-md-4 mb-4">
              <div
                className="card shadow-sm"
                style={{ border: "none", borderRadius: "10px" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text mb-1">
                    <strong>Quantity:</strong> {product.quantity}
                  </p>
                  <p className="card-text">
                    <strong>Price:</strong> ₹{product.price}
                  </p>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
