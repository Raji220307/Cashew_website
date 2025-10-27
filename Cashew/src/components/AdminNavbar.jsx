import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h4 className="text-light">🌰 Admin Dashboard</h4>
      <div>
        <Link to="/" className="btn btn-outline-light mx-2">Dashboard</Link>
        <Link to="/admin/orders" className="btn btn-outline-light mx-2">Orders</Link>
        <Link to="/admin/users" className="btn btn-outline-light mx-2">Users</Link>
        <Link to="/admin/add-product" className="btn btn-success mx-2">Add Product</Link>
        <button className="btn btn-danger" onClick={() => {
          localStorage.removeItem("userRole");
          window.location.href = "/login";
        }}>Logout</button>
      </div>
    </nav>
  );
}

export default AdminNavbar;
