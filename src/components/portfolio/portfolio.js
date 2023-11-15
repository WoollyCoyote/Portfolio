"use client";
import { useState, useEffect } from "react";
import "./portfolio.css";
import PortfolioEle from "./portfolioEle";
import Weather from "./projects/weather";

const Portfolio = () => {
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
    <div>
      <div className="grid-layout">
        <div className={"input-container project"}>
          {pageDetails.getWeather && (
            <Weather
              weatherLocation={pageDetails.weatherLocation.toUpperCase()}
            />
          )}
          <input
            id="textInput"
            hidden={pageDetails.inputVis}
            type="text"
            placeholder="City, town, zip"
            className="input"
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
        <div className={"project"}>
          <PortfolioEle />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
