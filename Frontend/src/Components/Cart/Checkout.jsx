import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Casual Sneakers",
      size: "42",
      color: "White",
      price: 75,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 195,
};

const Checkout = () => {
    const navigate = useNavigate()
    const [checkoutID, setcheckoutID] = useState(null)
    const [shippingAddress, setshippingAddress] = useState({
        firstname: '',
        lastname: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        phone: ''
    })

    function handleCreateCheckout(e){
        e.preventDefault()
        setcheckoutID(123)
    }
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
        {/* Left Section */}
        <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl uppercase mb-6">Checkout</h2>
            <form onSubmit={handleCreateCheckout}>
                <h3 className="text-lg mb-4">Contact Details</h3>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" value='user@example.com' className='w-full p-2 border rounded' disabled />
                </div>
                <h3 className='text-lg mb-4'>Delivery</h3>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">First Name</label>
                        <input type="text" value={shippingAddress.firstname} onChange={(e) => setshippingAddress({...shippingAddress, firstname: e.target.value})} className='w-full p-2 border rounded' required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Last Name</label>
                        <input type="text" value={shippingAddress.lastname} onChange={(e) => setshippingAddress({...shippingAddress, lastname: e.target.value})} className='w-full p-2 border rounded' required />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Address</label>
                    <input type="text" value={shippingAddress.address} onChange={(e) => setshippingAddress({...shippingAddress, address: e.target.value})} className='w-full p-2 border rounded' required/>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">City</label>
                        <input type="text" value={shippingAddress.city} onChange={(e) => setshippingAddress({...shippingAddress, city: e.target.value})} className='w-full p-2 border rounded' required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Postal Code</label>
                        <input type="text" value={shippingAddress.postalCode} onChange={(e) => setshippingAddress({...shippingAddress, postalCode: e.target.value})} className='w-full p-2 border rounded' required />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Country</label>
                    <input type="text" value={shippingAddress.country} onChange={(e) => setshippingAddress({...shippingAddress, country: e.target.value})} className='w-full p-2 border rounded' required/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Phone Number</label>
                    <input type="tel" value={shippingAddress.phone} onChange={(e) => setshippingAddress({...shippingAddress, phone: e.target.value})} className='w-full p-2 border rounded' required/>
                </div>
                <div className="mt-6">
                    {!checkoutID ? (
                        <button type='submit' className='w-full bg-black text-white py-3 rounded'>Continue to Payment</button>
                    ) : (
                        <div>
                            <h3 className="text-lg mb-4">Pay with PayPal</h3>
                            {/* PayPal Component */}
                        </div>
                    )}
                </div>
            </form>
        </div>
    </div>
  )
}

export default Checkout