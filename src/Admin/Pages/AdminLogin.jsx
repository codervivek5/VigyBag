import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AdminLogin = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [message, setMessage] = useState("");
 const navigate = useNavigate();


 const handleSubmit = async (event) => {
   event.preventDefault();
   // console.log("Email:", email);
   // console.log("Password:", password);
   try {
     const response = await axios.post("https://vigybag-backend.onrender.com/api/admin", { email, password });
     setMessage(response.data.message);
     if (response.status === 200) {
        // console.log("Login successful");
        navigate("/loggedin");
      }
    } catch (error) {
      console.error("Error details:", error);
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };
 
 
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            className="border-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className="border-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
         />
       </div>
       <button className="bg-green-900 text-white p-2" type="submit">Login</button>
     </form>
     {message && <p>{message}</p>}
   </div>
 );
};


export default AdminLogin;


 