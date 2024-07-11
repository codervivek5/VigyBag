// SearchBar.jsx
import React, { useState, useEffect }   from 'react';
import { FaSearch } from 'react-icons/fa';
import Fuse from 'fuse.js'
import axios from "axios";

// const SearchBar = ({ }) => {
const SearchBar = () => {

  const [results, setResults] = useState([]); // Initialize as an array
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]); 



  useEffect(() => {
    // Fetch data from API when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term) {
      const fuse = new Fuse(data, {
        keys: ['title',
          'category'
        ],
        includeScore: true,
      });
      const fuseResults = fuse.search(term).map(result => result.item);
      setResults(fuseResults);
    } else {
      setResults([]);
    }
  };

  return (
    <>
      <div className="flex items-center rounded-full border-green-800 border-2 bg-gray-200 px-4 py-2 w-72">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full text-green-700"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch className="text-green-800" />
      </div>
      <div className='bg-[#ecd5c5]' style={{
        position: "absolute", 
        zIndex: "100",
        top:"62px", 
        left:"0px", 
        right:"0px"
      }}>
      {results.length > 0 && (
        <div>
          {results.map((item, index) => (
             <a
             key={index}
             href={`/popularCategories/furnitureDecor`}
             className="block py-2 px-4 hover:bg-gray-100"
           >
             {item.title}
           </a>
          ))}
        </div>
      )}
      </div>
      
    </>
  )
};

export default SearchBar;