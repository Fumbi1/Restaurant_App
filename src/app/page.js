"use client";
import "./page.css";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const [classPd, setClassPd] = React.useState(true);
  const Routerr = useRouter()

  const Change = () => {
    setClassPd(!classPd);
  };

  function handleGoBack() {
    Routerr.back();
  }

  return (
    <div>
      <main className="background_image">
        <div className="header">
          <p className="header_text" onClick={() => {
            Routerr.push("/");
          }}>nique.</p>
        </div>

        <div className="intro">
          <p className="intro_text1">
            The pure taste of <br/><span className="span1">Thailand</span>
          </p>

          <p className="intro_text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="options">
          <div className="option_tn">
          
            <img src="/clock.png" alt="" onClick={handleGoBack} />
          
          </div>

          <div className="option_tn">
            <Link className="options_text" href="/menu">
              Menu
            </Link>
          </div>

          <div className="option_tn">
            <Link className="options_text" href="/blog">
              Blog
            </Link>
          </div>

          <div className="option_tn">
            <Link className="options_text" href="/classes">
              Classes
            </Link>
          </div>

          <div className={classPd ? "option_tn2" : "option_tn22"} onClick={Change}>
            <p className="option_text2">BOOK A TABLE</p>
          </div>

          <div className={classPd ? "option_hover1" : "option_hover21"}>
            <p className="opening">Opening Hours</p>
            <div className="hover_div">
              <p>Mon</p>
              <p>closed</p>
            </div>
            <div className="hover_div">
              <p>Tue - Fri</p>
              <p>4pm - 8pm</p>
            </div>
            <div className="hover_div">
              <p>Sat- Sun</p>
              <p>5pm - 11pm</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Home;
