import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      const initializedCart = storedCart.map((item) => ({
        ...item,
        quantity:
          Number.isInteger(item.quantity) && item.quantity > 0
            ? item.quantity
            : 1,
      }));
      setCartItems(initializedCart);
    };

    loadCart();

    window.addEventListener("storage", loadCart);
    window.addEventListener("cartUpdated", loadCart);

    return () => {
      window.removeEventListener("storage", loadCart);
      window.removeEventListener("cartUpdated", loadCart);
    };
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated")); // trigger UI sync
  };

  const handleQuantityChange = (id, qty) => {
    if (qty < 1) return;
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: qty } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated")); // trigger UI sync
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const getItemTotal = (item) => Number(item.rate) * Number(item.quantity);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + getItemTotal(item),
    0
  );

  return (
    <div className="container py-5" style={{ marginTop: "80px" }}>
      <h2 className="mb-4 text-center">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.product}
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.product}</h5>
                    <p className="card-text">
                      <strong>Size:</strong> {item.size || "500g"}
                    </p>
                    <p className="card-text">
                      <strong>Rate:</strong> ₹{item.rate}
                    </p>
                    <p className="card-text">
                      <strong>Quantity:</strong>{" "}
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, parseInt(e.target.value))
                        }
                        style={{ width: "60px" }}
                      />
                    </p>
                    <p className="card-text">
                      <strong>Total:</strong> ₹{getItemTotal(item)}
                    </p>

                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-3">
            <h4>Total: ₹{totalAmount}</h4>
            <button className="btn btn-success mt-2" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
