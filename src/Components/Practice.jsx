import React, { useRef, useState } from "react";
import axios from 'axios'

const Practice = () => {
  const cityRef=useRef()
  const [weather, setweather] = useState("");
  // const handlerChange = (e) => {
  //   setcity(e.target.value);
  // };
  const handlerSubmit = async () => {
    const city=cityRef.current.value
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6d209411cbb7a0d88b97563111221d8&units=metric`
    );
    setweather(res.data);
    console.log(res.data);
    
  };
  return (
    <>
      <div className="flex items-center h-screen">
        <div className="h-4/5 w-1/2 bg-blue-300 m-auto">
          <h1 className="text-center text-6xl font-bold text-red-600">
            WEATHER APP
          </h1>
          <div className="mt-6">
            <input
              type="text"
              ref={cityRef}
              // onChange={handlerChange}
              placeholder="ENTER CITY NAME"
              className="w-1/2 px-4 py-3 mx-4 my-4 text-3xl border-4 border-blue-800"
            />
            <span>
              <button onClick={handlerSubmit} className="p-4 bg-green-600 text-white font-bold border-2 border-black hover:bg-green-800 text-xl">
                GET WEATHER
              </button>
            </span>
          </div>
          <>
            {weather && (
              <>
                <h1 className="text-6xl text-center">{weather.name}</h1>
                <p className="text-6xl font-bold text-orange-600 text-center mt-7">
                  TEMP IS {weather.main.temp} c
                </p>
                <p className="text-6xl font-bold text-blue-900 text-center mt-7">
                  {weather.weather[0].description}
                </p>
              </>
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default Practice;
