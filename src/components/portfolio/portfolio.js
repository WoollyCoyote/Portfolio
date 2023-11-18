"use client";
import { useState, useEffect } from "react";
import "./portfolio.css";
import { BsCaretUpFill } from "react-icons/bs"
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
        <div className="card">
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
          {!pageDetails.getWeather && (
            <div>

            <BsCaretUpFill />
            <p className="fw-normal">
  enter your town or city to get the weather
</p>

            </div>
)}
        </div>

        <div className={"project"}>
          <PortfolioEle />
        </div>
    </div>
  );
};

export default Portfolio;
