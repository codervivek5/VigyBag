// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Home from './pages/Home'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Home/>
        
//     </>
//   )
// }

// export default App





import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';

import Home from './pages/Home';








const router=createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true,element:<Home/>},
      ,
 
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ScrollToTopOnRefresh />
    <RouterProvider router={router}/>
  </React.StrictMode>
);


