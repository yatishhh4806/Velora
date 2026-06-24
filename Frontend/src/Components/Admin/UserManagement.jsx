import React, { useState } from "react";

const UserManagement = () => {
  const users = [
    {
      _id: 123123,
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
    },
  ];

  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setformData({
      name: "",
      email: "",
      password: "",
      role: "customer",
    });
  };

  const handleRoleChange = (userId, newRole) => {
    console.log({
      id: userId,
      role: newRole,
    });
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      console.log("Deleting user with ID:", userId);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8">User Management</h2>

      {/* Add User Form */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-6">Add New User</h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Add User
          </button>
        </form>
      </div>

      {/* User List */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Role</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {user.name}
                </td>

                <td className="px-6 py-4">{user.email}</td>

                <td className="px-6 py-4">
                  <select
                    value={user.role}
                    onChange={(e) =>
                      handleRoleChange(user._id, e.target.value)
                    }
                    className="p-2 border rounded-lg"
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>

                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;