import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

const fetchUsers = async () => {
  try {
    const token = localStorage.getItem("token"); 

    const res = await axios.get("http://localhost:5000/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setUsers(res.data);
  } catch (err) {
    console.error("Error fetching users:", err.response?.data || err.message);
    alert("Failed to load users.");
  } finally {
    setLoading(false);
  }
};


  if (loading) return <p className="text-center mt-5">Loading users...</p>;


 return (
  <div className="container py-5">
    <h2 className="mb-4 text-center">👥 Registered Users</h2>

    {users.length === 0 ? (
      <p className="text-center">No users found.</p>
    ) : (
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Registered On</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span
                    className={`badge ${
                      user.role === "admin" ? "bg-danger" : "bg-success"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);

}

export default AdminUsers;
