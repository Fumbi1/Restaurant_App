"use client";
import "./reservation.css";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Reservation = ({ params }) => {
  const [classPd, setClassPd] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
    //another way of using params instead of passing params as an parameter
    const param = useParams();
    // const abortControllerRef = useRef(null);

    //to automatically change routes
  const route = useRouter();

  function handleGoBack() {
    route.back();
  }

  const TakenOrder = () => {

    Swal.fire({
      title: "Check your mail for your unique code! 😉",
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

  const reserveSchema = z.object({
    name: z.string().min(2, { message: "Name must be more than 2 characters" }),
    email: z.string().email(),
    guest_number: z.string().min(1, {message: "Please specify the numer of guests"}).max(1,{message: "A maximum of 9 guests are allowed"}),
    // chosenMenu: z.string().min().max(),
    date: z.string(),
    time: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // getValues, => used to ensure password is the same as confirmPassword
  } = useForm({
    resolver: zodResolver(reserveSchema),
    defaultValues: {
      chosenMenu: param.reservation,
    },
  });

  const Change = () => {
    setClassPd(!classPd);
  };



  

  const onSubmit = async (data) => {
    console.log(data);
    const String = JSON.stringify(data);
    console.log(String);
    const mainUrl = "https://restaurant-u8pf.onrender.com";
    const Menu = `${mainUrl}/restaurant/`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // signal: abortControllerRef.current?.signal,
    };

    // abortControllerRef.current?.abort();
    // abortControllerRef.current = new AbortController();
    setLoading(true)

    try {
      const response = await fetch(Menu, options);
      console.log(response);
      TakenOrder();
      reset();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "An Error occurred  😢",
        text: "Please try again",
        icon: "error",
        confirmButtonText: "I no dey give up",
        background: "red",
        color: "white",
        timer: 3250,
      });
      reset();
      // if (error.name === "AbortError") {
      //   console.log("Aborted");
      //   return;
      // }
    } finally {
      reset();
      setLoading(false)
    }
  }


  


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
            <p className="header_text" onClick={() => {
            route.push("/");
          }}>nique.</p>
          </div>

          <div className="menu">
            <p className="menu_text1">
              Book a table <br />
              <span className="span2">Reservation</span>
            </p>
          </div>

          <div className="optionsaa">
            <div className="option_tn">
              
                <img className="clock" src="/clock.png" alt=""onClick={handleGoBack} />
              
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

            <div className={classPd ? "option_tn23" : "option_tn24"} onClick={Change}>
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

        <div className="optionsaltt">
          <div className="option_tn">
            
            <img className="clock" src="/clock.png" alt="" onClick={handleGoBack}/>
            
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

          <div className={classPd ? "option_tn23" : "option_tn24"} onClick={Change}>
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

        <div className="form_left">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="book_table">Book a table</p>
            <p className="desc">
              Our dining atmosphere is casual and comfortable. To <br />
              reflect this environment, we maintain a formal dress.
            </p>

            <div className="guests">
              <label className="tittle">
                Name
              </label>
              <br />
              <input
                {...register("name")}
                type="text"
                placeholder=""
              
              />
              {errors.name && (
                <p className="tittle">{`${errors.name?.message}`}</p>
              )}
            </div>

            <div className="guests">
              <label className="tittle">
                Email
              </label>
              <br />
              <input
                {...register("email")}
                type="email"
                placeholder="wagmi@gmail.com"
                id="email"
              />
              {errors.email && (
                <p className="tittle">{`${errors.email?.message}`}</p>
              )}
            </div>

            <div className="guests">
              <label htmlFor="chosenMenu" className="tittle">
                Menu
              </label>
              <br />
              <input
                {...register("chosenMenu")}
                type="text"
                disabled
                id="chosenMenu"
              />
            </div>

            <div className="guests">
              <label htmlFor="guest_number" className="tittle">
                Number of guests
              </label>
              <br />
              <input
                {...register("guest_number", {
                  type: "guest_number",
                })}
                type="number"
                id="guest_number"
              />
              {errors.guest_number && (
                <p className="tittle">{`${errors.guest_number?.message}`}</p>
              )}
            </div>

            <div className="guests_flex">
              <div>
                <label htmlFor="date" className="tittle">
                  Date
                </label>
                <br />
                <input
                  {...register("date")}
                  type="date"
                  placeholder="19.08.22"
                  id="date"
                />
              </div>

              <div>
                <label htmlFor="time" className="tittle">
                  Time
                </label>
                <br />
                <input
                  {...register("time")}
                  type="time"
                  placeholder="6:00pm"
                  id="time"
                />
              </div>
            </div>

            <button type="submit"disabled={loading}>{loading? "loading..." : "Book a table" }</button>
          </form>
        </div>
      </main>
    </div>
  );
};
export default Reservation;
