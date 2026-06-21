import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: {
        city: "New York",
        country: "USA",
      },
      orderItems: [
        {
          productId: "1",
          name: "Jacket",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/200/200?random=1",
        },
        {
          productId: "2",
          name: "Shirt",
          price: 150,
          quantity: 1,
          image: "https://picsum.photos/200/200?random=2",
        },
      ],
    };

    setOrderDetails(mockOrderDetails);
  }, [id]);

  if (!orderDetails) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <p className="text-center text-gray-500">Loading Order Details...</p>
      </div>
    );
  }

  const orderTotal = orderDetails.orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Order Details
      </h2>

      <div className="bg-white border rounded-xl shadow-sm p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h3 className="text-xl font-semibold">
              Order ID: #{orderDetails._id}
            </h3>
            <p className="text-gray-500">
              {new Date(orderDetails.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span
              className={`px-4 py-1 rounded-full text-sm font-medium text-center ${
                orderDetails.isPaid
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {orderDetails.isPaid ? "Paid" : "Unpaid"}
            </span>

            <span
              className={`px-4 py-1 rounded-full text-sm font-medium text-center ${
                orderDetails.isDelivered
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {orderDetails.isDelivered ? "Delivered" : "Pending Delivery"}
            </span>
          </div>
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h4 className="text-lg font-semibold mb-3">
              Payment Information
            </h4>
            <p>
              <span className="font-medium">Method:</span>{" "}
              {orderDetails.paymentMethod}
            </p>
            <p>
              <span className="font-medium">Status:</span>{" "}
              {orderDetails.isPaid ? "Paid" : "Unpaid"}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">
              Shipping Information
            </h4>
            <p>
              <span className="font-medium">Method:</span>{" "}
              {orderDetails.shippingMethod}
            </p>
            <p>
              <span className="font-medium">Address:</span>{" "}
              {orderDetails.shippingAddress.city},{" "}
              {orderDetails.shippingAddress.country}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">
              Order Summary
            </h4>
            <p>
              <span className="font-medium">Items:</span>{" "}
              {orderDetails.orderItems.length}
            </p>
            <p>
              <span className="font-medium">Total:</span> ${orderTotal}
            </p>
          </div>
        </div>

        {/* Products */}
        <h4 className="text-xl font-semibold mb-4">Products</h4>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="text-left px-4 py-3">Product</th>
                <th className="text-center px-4 py-3">Price</th>
                <th className="text-center px-4 py-3">Quantity</th>
                <th className="text-center px-4 py-3">Total</th>
              </tr>
            </thead>

            <tbody>
              {orderDetails.orderItems.map((item) => (
                <tr
                  key={item.productId}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover border"
                      />

                      <Link
                        to={`/product/${item.productId}`}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {item.name}
                      </Link>
                    </div>
                  </td>

                  <td className="text-center px-4 py-4">
                    ${item.price}
                  </td>

                  <td className="text-center px-4 py-4">
                    {item.quantity}
                  </td>

                  <td className="text-center px-4 py-4 font-medium">
                    ${item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Back Button */}
        <div className="mt-6">
          <Link
            to="/my-orders"
            className="text-blue-600 hover:underline font-medium"
          >
            ← Back To My Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;