import React, { useEffect, useState } from "react";

const MyOrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shipAddress: {
            city: "New York",
            country: "USA",
          },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "54321",
          createdAt: new Date(),
          shipAddress: {
            city: "New York",
            country: "USA",
          },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
      ];

      setOrders(mockOrders);
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full border-collapse text-left text-gray-600">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3">Shipping Address</th>
              <th className="px-4 py-3">Item</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                  </td>

                  <td className="px-4 py-4 font-semibold text-gray-900">
                    #{order._id}
                  </td>

                  <td className="px-4 py-4">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>

                  <td className="px-4 py-4">
                    {order.shipAddress.city}, {order.shipAddress.country}
                  </td>

                  <td className="px-4 py-4">{order.orderItems.length}</td>

                  <td className="px-4 py-4">${order.totalPrice}</td>

                  <td className="px-4 py-4">
                    <span
                      className={`px-2 py-1 rounded-md text-sm font-medium ${
                        order.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-6 text-center text-gray-500">
                  You Have No Orders!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderPage;
