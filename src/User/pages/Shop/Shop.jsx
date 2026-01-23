import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { products } from '../../../data/products';
import { manageCartItem } from '../../../redux/cartSlice';

const Shop = () => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(manageCartItem({ product, quantity: 1 }));
    alert(`${product.title} added to cart!`);
  };

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 pt-24 text-[#282c34]">Shop Our Collection</h1>
      
      {categories.map(category => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-200">{category}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.filter(p => p.category === category).map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
                
                <div className="relative h-64 overflow-hidden group">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-gray-700 font-medium text-sm mb-2 line-clamp-2 min-h-[40px]">
                    {product.title}
                  </h3>
                  
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <span className="text-xl font-bold text-gray-900">${product.price}</span>
                      {product.oldPrice && (
                        <span className="text-sm text-gray-400 line-through ml-2">${product.oldPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center bg-yellow-100 px-1.5 py-0.5 rounded">
                      <FaStar className="text-yellow-400 text-xs mr-1" />
                      <span className="text-xs font-bold text-yellow-700">{product.rating}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => addToCart(product)}
                    className="mt-auto w-full bg-[#1a1a2e] text-white py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-[#2e2e4a] transition-colors duration-300"
                  >
                    <FaShoppingCart className="text-sm" />
                    <span className="text-sm font-medium">Add to cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;