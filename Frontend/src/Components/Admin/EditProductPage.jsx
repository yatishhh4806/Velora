import React, { useState } from "react";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/150?random=1",
      },
      {
        url: "https://picsum.photos/150?random=2",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setProductData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setProductData((prev) => ({
      ...prev,
      images: [...prev.images, { url: imageUrl }],
    }));
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-8">Edit Product</h2>

      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-3"
            required
          ></textarea>
        </div>

        {/* Price & Stock */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Count In Stock
            </label>
            <input
              type="number"
              name="countInStock"
              value={productData.countInStock}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3"
              required
            />
          </div>
        </div>

        {/* SKU */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            SKU
          </label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3"
            required
          />
        </div>

        {/* Category & Brand */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={productData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3"
            />
          </div>
        </div>

        {/* Collection & Material */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-2">
              Collection
            </label>
            <input
              type="text"
              name="collections"
              value={productData.collections}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Material
            </label>
            <input
              type="text"
              name="material"
              value={productData.material}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3"
            />
          </div>
        </div>

        {/* Gender */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Gender
          </label>

          <select
            name="gender"
            value={productData.gender}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3"
          >
            <option value="">Select Gender</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>

        {/* Sizes */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Sizes (comma-separated)
          </label>

          <input
            type="text"
            value={productData.sizes.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value
                  .split(",")
                  .map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-3"
          />
        </div>

        {/* Colors */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Colors (comma-separated)
          </label>

          <input
            type="text"
            value={productData.colors.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value
                  .split(",")
                  .map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-3"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Upload Images
          </label>

          <input
            type="file"
            onChange={handleImageUpload}
            className="w-full border border-gray-300 rounded-md p-3"
          />

          <div className="flex flex-wrap gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.url}
                  alt="Product"
                  className="w-32 h-32 object-cover rounded-lg shadow"
                />

                <button
                  type="button"
                  onClick={() =>
                    setProductData({
                      ...productData,
                      images: productData.images.filter(
                        (_, i) => i !== index
                      ),
                    })
                  }
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6"
                >
                  x
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;