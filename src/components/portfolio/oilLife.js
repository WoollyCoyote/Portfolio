"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa";
import OilLifeCode from "./OilLifeCode";

export default function oilLife() {
  const [showCode, setShowCode] = useState(false);
  return (
    <div className="card oilAppBox">
      <h2 className="title">Oil Life</h2>
      <h4 className="subTitle">
        NEXT.JS CRUD APP with a seperate JSON server for backend Data
      </h4>


      <div className="oilImgandDis center">
        {showCode ? (
        <div className="card  codeBox">
      <OilLifeCode />

        </div>
      ):
<Link href="https://nextcrud-sage.vercel.app">
        <Image
          className="oilAppImg"
          src="/oillifescreenshotv1.png"
          width={500}
          height={500}
          alt="Project screen shot"
        />
        </Link>
      }

        <p className="oilAppDiscription">
          Oil tracking app is for keeping a log of each of you're vehicles
          current oil use and when to change oil. The Data is stored with a Json
          server running on *Render.com* and the front end is deployed on vercel
        </p>
        <div className="Oillinks center">
            <button onClick={() => setShowCode(!showCode)}>{showCode ?  "Show Picture":"Show Code" }</button>
          <div className="oilLinkLive">
            <Link href="https://nextcrud-sage.vercel.app">
              <p>
                Click here or the pic to view the app Deployed on
              </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="-105 0 753 64"
              >
              <path
                fill="white"
                d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z"
                />
            </svg>
                </Link>
          </div>
          <div id="githubLink" className="oilLinkGit">
            <FaGithubAlt />
            <Link href="https://github.com/WoollyCoyote/nextcrud.git">
              Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
