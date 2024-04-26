"use client";
import { useState, useEffect } from "react";
import { FaGithubAlt } from "react-icons/fa";
import Link from "next/link";
import "./portfolio.css";
import Weather from "./weather";
import Chat from "../chat"
import OilLife from "./oilLife";
import Blog from "./blog";




export default function Portfolio () {



  let [pageDetails, setPageDetails] = useState({
    btn: "Enter",
    inputVis: false,
    getWeather: false,
    weatherLocation: "",
  });

  const handleBtnClick = () => {
    setPageDetails((prevDetails) => ({
      ...prevDetails,
      btn: prevDetails.btn === "Enter" ? "Reset" : "Enter",
      inputVis: !prevDetails.inputVis,
      getWeather: !prevDetails.getWeather,
    }));
    document.getElementById("textInput").value = "";
  };

  useEffect(() => {
    console.log(pageDetails.weatherLocation);
  }, [pageDetails.location]);

  return (
    <div className="center container">

      <OilLife />
<Blog/>

<div className="card oilAppBox">
<Chat/>
</div>

      <div className="card weatherBox">
      <h2 className="title">Weather app</h2>
        <h3 className="subTitle">API app rebuilt as a React Component</h3>
        {pageDetails.getWeather && (
          <Weather
            weatherLocation={pageDetails.weatherLocation.toUpperCase()}
          />
        )}
<div className="btninputlink center">
       <div className="weatherInputBox center">
        <input
          id="textInput"
          hidden={pageDetails.inputVis}
          type="text"
          placeholder="City, town, zip"
          className="weatherInput"
          onChange={(event) => {
            setPageDetails({
              ...pageDetails,
              weatherLocation: event.target.value,
            });
          }}
          />
        <button
          onClick={() => {
            handleBtnClick();
          }}
          id="clickToEnter"
          className="wthrbtn"
          >
          {pageDetails.btn}
        </button>
        </div>
        {!pageDetails.getWeather && (
          <div>
          </div>
        )}
           <div id="githubLink" className="oilLinkGit">
            <FaGithubAlt />
            <Link href="https://github.com/WoollyCoyote/Portfolio/blob/192fcd8c60bcd7c5c421ae4e9c8bd18fdf118a4f/src/components/portfolio/weather.js">
              Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
