
"use client";
import "./classes.css"
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Classes = () => {
  const [classPd, setClassPd] = React.useState(true);
  const Routerr = useRouter();

  function handleGoBack() {
    Routerr.back();
  }

  const Change = () => {
    setClassPd(!classPd);
  };

  return (
    <div>
      <main className="background_image2">
        <div className="header">
          <p className="header_text" onClick={() => {
            Routerr.push("/");
          }}>nique.</p>
        </div>

        <div className="intro">
          <p className="intro_text1">
            Coming <br/><span className="span1">Soon...</span>
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

          <div className="option_tn2" onClick={Change}>
            <p className="option_text2">BOOK A TABLE</p>
          </div>

          <div className={classPd ? "option_hover" : "option_hover2"}>
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
export default Classes;
