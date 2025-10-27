import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/orders"); // ✅ match your backend route
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
      alert("Failed to load orders.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center mt-5">Loading orders...</p>;

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">📦 All Orders</h2>

      {orders.length === 0 ? (
        <p className="text-center">No orders placed yet.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Payment</th>
                <th>Total (₹)</th>
                <th>Date</th>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.shipping?.name}</td>
                  <td>
                    {order.shipping?.address}, {order.shipping?.city},{" "}
                    {order.shipping?.state} - {order.shipping?.zip}
                  </td>
                  <td>{order.paymentMethod?.toUpperCase()}</td>
                  <td>{order.totalAmount}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td>
                    <ul className="mb-0">
                      {order.cart?.map((item, i) => (
                        <li key={i}>
                          {item.product} ({item.quantity}x)
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminOrders;
