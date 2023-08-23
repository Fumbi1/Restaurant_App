"use client";
import "./reservation.css";
import Link from "next/link";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Swal from 'sweetalert2';

const Reservation = ({ params }) => {
  const [classPd, setClassPd] = React.useState(true);

  const Change = () => {
    setClassPd(!classPd);
  };

  //another way of using params instead of passing params as an parameter
  const param = useParams();

  //to automatically change routes
  const route = useRouter();

  const TakenOrder = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Table has been booked! 😉",
      text: "You'd be redirected to the home page",
      icon: "success",
      confirmButtonText: "Cool",
      background: "black",
      color: "white",
      timer: 3250,
    });
    setTimeout(() => {
      route.push("/");
    }, 3000);
  };

  return (
    <div>
      <main
        className="menu_page"
        onLoad={() => {
          console.log(param.reservation);
          console.log(params);
        }}
      >
        <div className="menu_left2">
          <div className="header">
            <p className="header_text">nique.</p>
          </div>

          <div className="menu">
            <p className="menu_text1">
              Book a table <br />
              <span className="span2">Reservation</span>
            </p>
          </div>

          <div className="options">
            <div className="option_tn">
              <Link href="/">
                <img className="clock" src="/clock.png" alt="" />
              </Link>
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
              <Link className="options_text" href="">
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
        </div>

        <div className="form_left">
          <form onSubmit={TakenOrder}>
            <p className="book_table">Book a table</p>
            <p className="desc">
              Our dining atmosphere is casual and comfortable. To <br />
              reflect this environment, we maintain a formal dress.
            </p>

            <div className="guests">
              <label for="" className="tittle">
                Name
              </label>
              <br />
              <input type="text" placeholder="name" required />
            </div>
            <div className="guests">
              <label for="" className="tittle">
                Number of guests
              </label>
              <br />
              <input type="text" placeholder="2" required />
            </div>

            <div className="guests_flex">
              <div>
                <label for="" className="tittle">
                  Date
                </label>
                <br />
                <input type="text" placeholder="19.08.22" required />
              </div>

              <div>
                <label for="" className="tittle">
                  Time
                </label>
                <br />
                <input type="text" placeholder="6:00pm" required />
              </div>
            </div>

            <button type="submit">Book a table</button>
          </form>
        </div>
      </main>
    </div>
  );
};
export default Reservation;
