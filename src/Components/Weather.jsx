import React, { useRef, useState } from "react";
import axios from 'axios'

const Weather = () => {
  const [city, setcity] = useState('');
  const [weather, setweather] = useState('')
  const handleChange = (event) => {
    setcity(event.target.value);
  };
  const handlerSubmit=async()=>{
    const res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6d209411cbb7a0d88b97563111221d8&units=metric`)
    console.log(res);
    
    setweather(res)
    

  }
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
              name=""
              value={city}
              onChange={handleChange}
              placeholder="ENTER CITY NAME"
              className="w-1/2 px-4 py-3 mx-4 my-4 text-3xl border-4 border-blue-800"
            />
            <span>
              <button onClick={handlerSubmit} className="p-4 bg-green-600 text-white font-bold border-2 border-black hover:bg-green-800 text-xl">
                GET WEATHER
              </button>
            </span>
          </div>
          {
            weather&&(
                <>
                 <h1 className="text-6xl text-center">{weather.data.name}</h1>
                 <p className="text-6xl font-bold text-orange-600 text-center mt-7">TEMP IS {weather.data.main.temp}</p>
                 <p className="text-6xl font-bold text-blue-900 text-center mt-7">{weather.data.weather[0].description}</p>
                 </>
                 
            )
          }
        </div>
      </div>
    </>
  );
};

export default Weather;
