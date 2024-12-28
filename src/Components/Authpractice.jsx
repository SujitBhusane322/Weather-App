import React, { useState } from "react";

const Authpractice = () => {
  const [isSignUp, setisSignUp] = useState(false);
  return (
    <>
      <div className="h-screen bg-blue-400 flex items-center justify-center">
        <div className="h-[450px] w-96 bg-white">
          <div className="flex justify-around">
            <button
              className={`text-2xl h-10  w-full border-2 border-black ${
                !isSignUp ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setisSignUp(false)}
            >
              LOGIN
            </button>
            <button
              className={`text-2xl h-10  w-full border-2 border-black ${
                isSignUp ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setisSignUp(true)}
            >
              SIGNUP
            </button>
          </div>
          <div>
        {isSignUp ? (
          <div>
            <h2 className="text-center text-2xl font-bold mb-4">Signup Form</h2>
            <form>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              /> <br/>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              /><br/>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              /><br/>
              <button
                type="submit"
                className="w-full py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
              >
                Signup
              </button>
            </form>
          </div>
        ) : (
          <div className="mt-6">
            <h2 className="text-center text-2xl font-bold mb-4">Login Form</h2>
            <form>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              /><br/>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              /><br/>
              <button
                type="submit"
                className="w-full py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
              >
                Login
              </button>
            </form>
          </div>
        )}
      </div>
        </div>
      </div>
      
    </>
  );
};

export default Authpractice;
