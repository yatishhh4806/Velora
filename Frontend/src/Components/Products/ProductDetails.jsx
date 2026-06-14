import React, { useEffect, useState } from "react";
import { toast } from 'sonner'
const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish Jacket perfect for any occasion",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket 2",
    },
  ],
};

const ProductDetails = () => {

  const [mainImage, setmainImage] = useState('')
  const [selectedSize, setselectedSize] = useState('')
  const [selectedColor, setselectedColor] = useState('')
  const [quantity, setquantity] = useState(1)
  const [isButtonDisabled, setisButtonDisabled] = useState(false)

  useEffect(() => {
    if(selectedProduct?.images?.length>0){
      setmainImage(selectedProduct.images[0].url)
    }
  }, [selectedProduct])

  function handleQuanityChange(action){
    if(action === 'plus'){
      setquantity((prev) => prev + 1)
    } else if(action === 'minus' && quantity > 1){
      setquantity((prev) => prev - 1)
    }
  }

  function handleAddToCart(){
    if(!selectedSize || !selectedColor){
      toast.error("Please select a size and a color before adding to cart")
    }
  }


  return (
    <div className="p-6">
      <div className="max-w-6xl bg-white p-8 rounded-lg mx-auto">
        <div className="flex flex-col md:flex-row">
          
          {/* Desktop Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index + 1}`}
                className={`w-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url? 'border-black' : 'border-gray-300' }`}
                onClick={() => setmainImage(image.url)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Mobile Thumbnails */}
            <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || `Thumbnail ${index + 1}`}
                  className={`w-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url? 'border-black' : 'border-gray-300' }`}
                  onClick={() => setmainImage(image.url)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>

            <p className="text-lg text-gray-600 mb-1 line-through">
              ${selectedProduct.originalPrice}
            </p>

            <p className="text-xl text-gray-900 font-medium mb-2">
              ${selectedProduct.price}
            </p>

            <p className="text-gray-600 mb-4">
              {selectedProduct.description}
            </p>

            {/* Colors */}
            <div className="mb-4">
              <p className="text-gray-700 font-medium">Color:</p>

              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setselectedColor(color)}
                    className={`w-8 h-8 rounded-full border cursor-pointer ${setselectedColor === color? 'border-4 border-black' : 'border-gray-300' }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-4">
              <p className="text-gray-700 font-medium">Size:</p>

              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key = {size}
                    onClick = {() => setselectedSize(size)}
                    className = {`border px-4 py-2 rounded hover:bg-gray-100 ${selectedSize === size ? 'bg-black text-white' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand & Material */}
            <div className="space-y-2 mb-6">
              <p>
                <span className="font-medium">Brand:</span>{" "}
                {selectedProduct.brand}
              </p>

              <p>
                <span className="font-medium">Material:</span>{" "}
                {selectedProduct.material}
              </p>
            </div>
            
            {/* Quantity */}
            <div className="mb-6">
                <p className="text-gray-700">Quantity:</p>
                <div className="flex items-center space-x-4 mt-2">
                  <button onClick={() => handleQuanityChange('minus')} className="px-2 py-1 bg-gray-200 rounded text-lg">
                    -
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button onClick={() => handleQuanityChange('plus')} className="px-2 py-1 bg-gray-200 rounded text-lg">
                    +
                  </button>
                </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;