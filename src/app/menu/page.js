"use client";
import "./menu.css";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Menu = () => {
  const [classPd, setClassPd] = React.useState(true);
  const Routerr = useRouter()

  const Change = () => {
    setClassPd(!classPd);
  };

  function handleGoBack() {
    Routerr.back();
  }

  const menuList = [
    {
      title: "Starters",
      image: "/tomato_toast.png",
      meal: "Tomato-Toast",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      oldPrice: "$35.00",
      price: "$29",
    },
    {
      title: "",
      image: "/noodle_soup.png",
      meal: "Noodle-Soup",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      oldPrice: "$8.00",
      price: "$5.00",
    },
    {
      title: "",
      image: "/pumpki.png",
      meal: "Pumpkin-Soup",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      oldPrice: "$11.00",
      price: "$5.00",
    },
    {
      title: "",
      title: "Breakfast",
      image: "/pancakes.png",
      meal: "Delicious-Pancakes",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      oldPrice: "$8.00",
      price: "$5.00",
    },
    {
      title: "",
      image: "/heaven.png",
      meal: "Sweet-Heaven",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      oldPrice: "$8.00",
      price: "$5.00",
    },
    {
      title: "",
      image: "/oatmeal.png",
      meal: "Oatmeal-Spirit",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      oldPrice: "$8.50",
      price: "$5.00",
    },
    {
      title: "",
      image: "/avocado.png",
      meal: "Avocado-Smash",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      oldPrice: "$10.00",
      price: "$5.00",
    },
    {
      title: "Dinner",
      image: "/italian_pizza.png",
      meal: "Italian-Pizza",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      oldPrice: "$8.00",
      price: "$5.00",
    },
    {
      title: "",
      image: "/curry.png",
      meal: "Sea-Curry",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      oldPrice: "$9.50",
      price: "$5.00",
    },
    {
      title: "",
      image: "/vegan.png",
      meal: "Vegan-Burger",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      oldPrice: "$8.00",
      price: "$5.00",
    },
    {
      title: "",
      image: "/noodle.png",
      meal: "Noodle-Bowl",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      oldPrice: "$8.00",
      price: "$5.00",
    },
    {
      title: "Drinks",
      image: "/panthouse.png",
      meal: "Panthouse-Tonic",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      oldPrice: "$8.00",
      price: "$5.00",
    },
    {
      title: "",
      image: "/apple_drink.png",
      meal: "Apple-Breeze",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      oldPrice: "$8.00",
      price: "$5.00",
    },
    {
      title: "",
      image: "/frenchman.png",
      meal: "Frenchman-Blitz",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      oldPrice: "$8.00",
      price: "$5.00",
    },
  ];

  return (
    <div>
      <main className="menu_page">
        <div className="menu_left">
          <div className="header">
            <p className="header_text" onClick={() => {
            Routerr.push("/");
          }}>nique.</p>
          </div>

          <div className="menu">
            <p className="menu_text1">
              Check Out <br />
              <span className="span2">Our Menus</span>
            </p>
          </div>

          <div className="optionsa">
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

            <div className={classPd ? "option_tn25" : "option_tn26"} onClick={Change}>
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

        <div className="optionsalt">
          <div className="option_tn">
            
            <img className="clock" src="/clock.png" alt="" onClick={handleGoBack} />
            
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

          <div className={classPd ? "option_tn25" : "option_tn26"} onClick={Change}>
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

        <div className="menu_right">
          {menuList.map((item, index) => {
            return (
              <div className="menu_opt" key={index}>
                <div className={item.title == "" ? "title" : "title2"}>
                  <p>{item.title}</p>
                </div>
                <Link className="links" href={"/menu/" + (item.meal)}>
                  <div className="content">
                    <div>
                      <img className="mealimage" src={item.image} alt="" />
                    </div>
                    <div className="meal">
                      <p className="meal_name">{item.meal}</p>
                      <p className="meal_desc">{item.desc}</p>
                    </div>
                    <div>
                      <p className="meal_price">
                        <span className="old_price">{item.oldPrice}</span>
                        {item.price}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}

          <div className="footer">
            <div>
              <p className="footer_logo">nique.</p>
              <p className="footer_opts">
                By Pawel Gola
                <br />
                Powered by c9micer
              </p>
            </div>
            <div>
              <p className="footer_title">Pages</p>
              <p className="footer_opts">Menu</p>
              <p className="footer_opts">Restaurant</p>
              <p className="footer_opts">Classes</p>
              <p className="footer_opts">Book a Table</p>
              <p className="footer_opts">Contact</p>
              <p className="footer_opts">Blog</p>
              <p className="footer_opts">Shop</p>
            </div>
            <div>
              <p className="footer_title">Utility Pages</p>
              <p className="footer_opts">Styleguide</p>
              <p className="footer_opts">Licensing</p>
              <p className="footer_opts">Changelog</p>
              <p className="footer_opts">404 Page</p>
              <p className="footer_opts">Password Protected</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Menu;
