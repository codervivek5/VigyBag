import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import left from '../../assets/bamboo_left.png';
import right from '../../assets/bamboo_right.png';

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categoryFilter, setCategoryFilter] = useState('')
  const [priceFilter, setPriceFilter] = useState('')
  const [ratingFilter, setRatingFilter] = useState(0)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setFilteredProducts(data)
      })
  }, [])

  useEffect(() => {
    let result = products
    if (categoryFilter) {
      result = result.filter(product => product.category === categoryFilter)
    }
    if (priceFilter) {
      result = result.filter(product => product.price <= parseInt(priceFilter))
    }
    if (ratingFilter) {
      result = result.filter(product => Math.round(product.rating.rate) >= ratingFilter)
    }
    setFilteredProducts(result)
  }, [products, categoryFilter, priceFilter, ratingFilter])

  return (
    <div className="bg-[#fff5edff] min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          <Filters 
            setCategoryFilter={setCategoryFilter}
            setPriceFilter={setPriceFilter}
            setRatingFilter={setRatingFilter}
          />
          <ProductGrid products={filteredProducts} />
        </div>
      </main>
    </div>
  )
}


   

function Header() {
  return (
    <header className="bg-[#d8e0afff] shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center py-4"style={{overflow:'hidden'}}>
          {/*<img 
            src={left} 
            alt="" 
            className="absolute top-1 left-[-8vw] w-[15vw] h-[18vh] min-w-[100px] min-h-[80px] max-w-[200px] max-h-[150px] object-contain" 
          />*/}
          <div className="text-center z-10">
            <h1 className="text-lg md:text-4xl font-bold text-black mt-2">BAMBOO PRODUCTS</h1>
            <p className="text-sm text-gray-600">Home/Bamboo products</p>
          </div>
          {/*<img 
            src={right} 
            alt="" 
            className="absolute top-1 right-[-8vw] w-[15vw] h-[18vh] min-w-[100px] min-h-[80px] max-w-[200px] max-h-[150px] object-contain" 
          />*/}
        </div>
        <nav className="mt-5 w-full">
          <ul className="flex justify-center space-x-4 text-sm md:text-base overflow-x-auto pb-2"style={{scrollbar:'none'}}>
            <li><Link to="/categories/furniture" className="whitespace-nowrap hover:text-[#3d9970ff] cursor-pointer">Furniture</Link></li>
            <li><Link to="/" className="whitespace-nowrap hover:text-[#3d9970ff] cursor-pointer">Kitchen & Dining</Link></li>
            <li><Link to="/" className="whitespace-nowrap hover:text-[#3d9970ff] cursor-pointer">Home Decor</Link></li>
            <li><Link to="/" className="whitespace-nowrap hover:text-[#3d9970ff] cursor-pointer">Garden and Outdoor</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Filters({ setCategoryFilter, setPriceFilter, setRatingFilter }) {
  return (
    <aside className="w-full lg:w-1/4 bg-[#d8e0afff] p-6 rounded-lg shadow-md lg:sticky lg:top-[30vh] lg:h-fit">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="space-y-4">
        <FilterSection 
          title="Category" 
          options={['electronics', 'jewelery', "men's clothing", "women's clothing"]}
          onChange={(e) => setCategoryFilter(e.target.value)}
        />
        <FilterSection 
          title="Price" 
          options={['50', '100', '200', '500']}
          onChange={(e) => setPriceFilter(e.target.value)}
        />
        <FilterSection 
          title="Rating" 
          options={['1', '2', '3', '4']}
          onChange={(e) => setRatingFilter(parseInt(e.target.value))}
        />
      </div>
    </aside>
  )
}

function FilterSection({ title, options, onChange }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <select onChange={onChange} className="w-full p-2 border rounded">
        <option value="">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {title === 'Price' ? `Under $${option}` : option}
          </option>
        ))}
      </select>
    </div>
  )
}

function ProductGrid({ products }) {
  return (
    <div className="w-full lg:w-3/4 lg:ml-auto">
       <h1 className='mb-5 'style={{fontSize:'23px'}}>Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
       
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

function ProductCard({ product }) {
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
        <Link to="/cart" ><button className="mt-4 bg-[#166635ff] text-white px-4 py-2 rounded text-sm w-full hover:bg-[#3d9970ff] transition-colors">
          Add to Cart
        </button></Link>
      </div>
    </div>
  )
}

export default App