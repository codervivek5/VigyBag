import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { manageCartItem } from '../../redux/cartSlice';

function ProductGrid({ products }) {
  return (
    <div className="w-full lg:w-3/4 lg:ml-auto">
      <h1 className='mb-5 ' style={{ fontSize: '23px' }}>Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

function ProductCard({ product }) {

  const dispatch = useDispatch();

  const onAddToCart = (product) => {
    const quantity = 1;
    dispatch(manageCartItem({product, quantity}))
    alert("Item successfully added to cart!")
  }
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain p-4" />
      <div className="p-4">
        <h3 className="font-bold text-sm h-12 overflow-hidden">{product.title}</h3>
        <p className="text-gray-600 text-lg font-semibold mt-2">${product.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          {[...Array(Math.round(product.rating.rate))].map((_, i) => (
            <span key={i} className="text-yellow-400">⭐</span>
          ))}
          <span className="text-gray-500 ml-1">({product.rating.count})</span>
        </div>
        <button
          className="mt-4 bg-[#166635ff] text-white px-4 py-2 rounded text-sm w-full hover:bg-[#3d9970ff] transition-colors"
          onClick={() => { onAddToCart(product) }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductGrid
