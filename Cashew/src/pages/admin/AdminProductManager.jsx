import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminProductManager() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", image: "", quantity: "", price: "" });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://cashew-backend-1.onrender.com/api/products");
      setProducts(response.data);
    } catch (err) {
      console.error("Server error:", err);
      setMessage("⚠️ Failed to fetch products.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const url = editingId
        ? `https://cashew-backend-1.onrender.com/api/products/${editingId}`
        : "https://cashew-backend-1.onrender.com/api/products";

      const method = editingId ? "put" : "post";

      await axios[method](url, form, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessage(editingId ? "✅ Product updated!" : "✅ Product added!");
      setForm({ name: "", image: "", quantity: "", price: "" });
      setEditingId(null);
      fetchProducts();
    } catch (err) {
      console.error("Server error:", err);
      setMessage("⚠️ Failed to save product.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      image: product.image,
      quantity: product.quantity,
      price: product.price,
    });
    setEditingId(product._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await axios.delete(`https://cashew-backend-1.onrender.com/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("🗑️ Product deleted.");
      fetchProducts();
    } catch (err) {
      console.error("Server error:", err);
      setMessage("⚠️ Failed to delete product.");
    }
  };

  return (
    <div className="mt-5">
      <h3 className="mb-4 text-center">🛒 Manage Products</h3>

      {message && <div className="alert alert-info text-center">{message}</div>}

      {/* Add / Edit Form */}
      <form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow-sm"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="row g-3">
          <div className="col-md-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Product Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="image"
              className="form-control"
              placeholder="Image URL"
              value={form.image}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              name="quantity"
              className="form-control"
              placeholder="Quantity"
              value={form.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              name="price"
              className="form-control"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2 d-flex align-items-center">
            <button type="submit" className="btn btn-dark w-100" disabled={loading}>
              {loading ? "Saving..." : editingId ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </form>

      {/* Products Table */}
      <div className="table-responsive mt-4">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">
                  No products available.
                </td>
              </tr>
            ) : (
              products.map((p, index) => (
                <tr key={p._id}>
                  <td>{index + 1}</td>
                  <td>{p.name}</td>
                  <td>
                    <img
                      src={p.image}
                      alt={p.name}
                      width="50"
                      height="50"
                      style={{ borderRadius: "8px" }}
                    />
                  </td>
                  <td>{p.quantity}</td>
                  <td>₹{p.price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(p)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(p._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProductManager;
