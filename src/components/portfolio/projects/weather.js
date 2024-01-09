import { useState, useEffect } from "react";
import Image from "next/image";
const Weather = (props) => {
  let test = true;
  let fake =
    '{"location":{"name":"Flint","region":"Michigan","country":"United States of America","lat":43.01,"lon":-83.69,"tz_id":"America/Detroit","localtime_epoch":1687637380,"localtime":"2023-06-24 16:09"},"current":{"last_updated_epoch":1687636800,"last_updated":"2023-06-24 16:00","temp_c":27.8,"temp_f":82.0,"is_day":1,"condition":{"text":"Partly cloudy","icon":"//cdn.weatherapi.com/weather/64x64/day/116.png","code":1003},"wind_mph":4.3,"wind_kph":6.8,"wind_degree":320,"wind_dir":"NW","pressure_mb":1012.0,"pressure_in":29.89,"precip_mm":0.0,"precip_in":0.0,"humidity":56,"cloud":25,"feelslike_c":28.3,"feelslike_f":83.0,"vis_km":16.0,"vis_miles":9.0,"uv":8.0,"gust_mph":5.4,"gust_kph":8.6}}';
  let [weatherapi, setWeatherapi] = useState();
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!test) weatherFetcher();
    fakeWeatherFetcher();
  }, []);

  async function weatherFetcher() {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${props.weatherLocation}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7e2e9ff602msh7861dca4289d591p1b05e6jsn339e0893dfcd",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const results = await response.text();
      setWeatherapi(JSON.parse(results));
      setLoaded(!loaded);
      // console.log(results, locationToUpperCase);
      console.log(weatherapi.current.condition.icon)
    } catch (error) {
      console.error(error);
    }
  }

  function fakeWeatherFetcher() {
    setWeatherapi(JSON.parse(fake));
    setLoaded(!loaded);
    console.log(fake);
  }

  return (
    <div>
      <div id="weatherAPI">
        {loaded && (
          <div className="weatherData">
            <h1 className="weatherLocation">{props.weatherLocation}</h1>
            <p>{weatherapi.current.temp_f}</p>
            <p>{weatherapi.current.condition.text}</p>
            <Image
              width={64}
              height={64}
              alt="a rain cloud, sun or other weather images"
              src={`https:${weatherapi.current.condition.icon}`}
            />
          </div>
        )}
        {!loaded && (
          <div>
            <h1>Error!</h1>
            <p>Failed To load</p>
          </div>
        )}
      </div>
      <div id="weatherBox">

        {/* <h2 id="weatherTitle" className="weatherTitle"></h2> */}
        {/* <Image id="pic" visability="hidden" /> */}
      </div>
    </div>
  );
};

export default Weather;
