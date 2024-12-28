import React, { useState } from 'react';

function App() {
  const [isSignup, setisSignup] = useState(false)

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
      {/* Tabs */}
      <div className="flex justify-around mb-4">
        <button className={`w-1/2 py-2 ${!isSignup ?'bg-blue-500':'bg-gray-300'}`} onClick={()=>setisSignup(false)}>Login</button>
        <button className={`w-1/2 py-2 ${isSignup ?'bg-blue-500':'bg-gray-300'}`} onClick={()=>setisSignup(true)}>Signup</button>
      </div>
      <div>
      { //! SIGNUP PAGE
      isSignup ? (
        <div>
          <h2 className="text-center text-2xl font-bold mb-4">Signup Form</h2>
          <form>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
            >
              Signup
            </button>
          </form>
        </div>
      ):( //!LOGIN PAGE
         <div className="mt-6">
          <h2 className="text-center text-2xl font-bold mb-4">Login Form</h2>
          <form>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
            >
              Login
            </button>
          </form>
        </div>)
  
        
     }
      </div>

    
    </div>
  </div>

  );
}

export default App;
