import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CheckoutPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [shipping, setShipping] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCart);
  }, []);

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + Number(item.rate) * Number(item.quantity),
    0
  );

  // Handle form inputs
  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  // Place Order
  const handlePlaceOrder = async () => {
    if (
      !shipping.name ||
      !shipping.address ||
      !shipping.city ||
      !shipping.state ||
      !shipping.zip ||
      !shipping.phone
    ) {
      alert("⚠️ Please fill all shipping details before placing order.");
      return;
    }

    setIsPlacingOrder(true);

    try {
      // Send order data to backend
      const response = await axios.post("http://localhost:5000/api/orders", {
        cart: cartItems,
        shipping,
        paymentMethod,
        totalAmount,
        orderDate: new Date().toISOString(),
      });

      console.log("✅ Order response:", response.data);

      // Clear cart after successful order
      localStorage.removeItem("cartItems");

      // Navigate to confirmation page
      navigate("/order-confirmation");
    } catch (err) {
      console.error("❌ Order failed:", err);
      alert("Failed to place order. Please check your backend connection and try again.");
    } finally {
      setIsPlacingOrder(false);
    }
  };

  return (
    <div className="container py-5" style={{ marginTop: "80px" }}>
      <h2 className="mb-4 text-center">💳 Checkout</h2>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          {/* Left Column — Shipping + Payment */}
          <div className="col-md-6">
            <div className="card shadow-sm p-4 mb-4">
              <h4>Shipping Details</h4>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="form-control mb-2"
                value={shipping.name}
                onChange={handleChange}
              />
              <input
                name="address"
                type="text"
                placeholder="Address"
                className="form-control mb-2"
                value={shipping.address}
                onChange={handleChange}
              />
              <div className="row">
                <div className="col">
                  <input
                    name="city"
                    type="text"
                    placeholder="City"
                    className="form-control mb-2"
                    value={shipping.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <input
                    name="state"
                    type="text"
                    placeholder="State"
                    className="form-control mb-2"
                    value={shipping.state}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input
                    name="zip"
                    type="text"
                    placeholder="ZIP Code"
                    className="form-control mb-2"
                    value={shipping.zip}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <input
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
                    className="form-control mb-2"
                    value={shipping.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="card shadow-sm p-4">
              <h4>Payment Method</h4>
              <div className="form-check">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="form-check-input"
                />
                <label className="form-check-label">Cash on Delivery</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="form-check-input"
                />
                <label className="form-check-label">Credit / Debit Card</label>
              </div>
            </div>
          </div>

          {/* Right Column — Order Summary */}
          <div className="col-md-6">
            <div className="card shadow-sm p-4">
              <h4>Order Summary</h4>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="d-flex align-items-center border-bottom py-2"
                >
                  <img
                    src={item.image}
                    alt={item.product}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                  />
                  <div className="ms-3 flex-grow-1">
                    <h6 className="mb-0">{item.product}</h6>
                    <small>Qty: {item.quantity}</small>
                  </div>
                  <div>₹{Number(item.rate) * Number(item.quantity)}</div>
                </div>
              ))}

              <div className="mt-3">
                <h5>Total: ₹{totalAmount}</h5>
              </div>

              <button
                className="btn btn-success w-100 mt-3"
                onClick={handlePlaceOrder}
                disabled={isPlacingOrder}
              >
                {isPlacingOrder ? "Placing Order..." : "Place Order"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
