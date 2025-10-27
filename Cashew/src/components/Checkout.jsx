import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const [shipping, setShipping] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [payment, setPayment] = useState("cod");
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState("");

  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handleApplyCoupon = () => {
    if (coupon === "SAVE10") {
      setDiscount(0.1); // 10% discount
      alert("Coupon applied: 10% OFF!");
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  const handlePlaceOrder = () => {
    alert(`Order placed successfully with ${payment.toUpperCase()}!`);
    localStorage.removeItem("cart");
    navigate("/");
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05; // 5% tax
  const discountAmount = subtotal * discount;
  const total = subtotal + tax - discountAmount;

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2 className="mb-3">Checkout</h2>
        <p>Your cart is empty.</p>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/products")}>
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 fw-bold">Checkout</h2>
      <div className="row">
        {/* Left Side - Shipping & Payment */}
        <div className="col-md-7 mb-4">
          <div className="card shadow-sm p-4 mb-4">
            <h4 className="mb-3">Shipping Information</h4>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="form-control mb-3"
              value={shipping.name}
              onChange={handleChange}
            />
            <textarea
              name="address"
              placeholder="Full Address"
              className="form-control mb-3"
              value={shipping.address}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control mb-3"
              value={shipping.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="form-control mb-3"
              value={shipping.phone}
              onChange={handleChange}
            />
          </div>

          <div className="card shadow-sm p-4">
            <h4 className="mb-3">Payment Options</h4>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                value="cod"
                checked={payment === "cod"}
                onChange={(e) => setPayment(e.target.value)}
              />
              <label className="form-check-label">Cash on Delivery</label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                value="upi"
                checked={payment === "upi"}
                onChange={(e) => setPayment(e.target.value)}
              />
              <label className="form-check-label">UPI</label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                value="card"
                checked={payment === "card"}
                onChange={(e) => setPayment(e.target.value)}
              />
              <label className="form-check-label">Credit/Debit Card</label>
            </div>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="col-md-5">
          <div className="card shadow-sm p-4">
            <h4 className="mb-3">Order Summary</h4>
            <ul className="list-group mb-3">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <strong>₹{item.price * item.quantity}</strong>
                </li>
              ))}
            </ul>

            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                className="form-control mb-2"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button className="btn btn-outline-primary w-100" onClick={handleApplyCoupon}>
                Apply Coupon
              </button>
            </div>

            <div className="border-top pt-3">
              <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
              <p>Tax (5%): ₹{tax.toFixed(2)}</p>
              {discount > 0 && <p>Discount: -₹{discountAmount.toFixed(2)}</p>}
              <h5>Total: ₹{total.toFixed(2)}</h5>
            </div>

            <button
              className="btn btn-success w-100 mt-3 fw-bold"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
