"use client";
import "./blog.css";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Log = () => {

    const [classPd, setClassPd] = React.useState(true);
    const Routerr = useRouter();

    const Change = () => {
    setClassPd(!classPd);
    };

    function handleGoBack() {
      Routerr.back();
    }

    const blogs = [
        {
            image: "/gats.png",
            date: "September 19, 2022",
            blog_title: "Gatsby Night",
            blog_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.",
        },
        {
            image: "/gifts.png",
            date: "September 19, 2022",
            blog_title: "Gift Card Standard",
            blog_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.",
        },
        {
            image: "/new.png",
            date: "September 19, 2022",
            blog_title: "New Restaurant",
            blog_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.",
        },
        {
            image: "/romantic.png",
            date: "September 19, 2022",
            blog_title: "Romantic Dinner",
            blog_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.",
        },
        {
            image: "/rand.png",
            date: "September 19, 2022",
            blog_title: "Brand New Kitchen",
            blog_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.",
        },
    ]

  return <div>
    <main className="menu_page">
        <div className="menu_left3">
            <div className="header">
                <p className="header_text" onClick={() => {
            Routerr.push("/");
          }}>nique.</p>
            </div>

            <div className="menu">
                <p className="menu_text1">
                Blog<br />
                <span className="span2">Latest News</span>
                </p>
            </div>

            <div className="optionss">
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
                <Link className="options_text" href="">
                    Classes
                </Link>
                </div>

                <div className={classPd ? "option_tn27" : "option_tn28"} onClick={Change}>
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

          <div className={classPd ? "option_tn27" : "option_tn28"} onClick={Change}>
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

        <div className="blog_right">
        {
            blogs.map((item, index) => {
                return(
                <div key={index} className="blog_opt">
                    <div className="image_container">
                        <img src={item.image} alt="" className="blog_image"/>
                    </div>
                    <div className="blog_news">
                        <p className="date">{item.date}</p>
                        <p className="blog_title">{item.blog_title}</p>
                        <p className="blog_content">{item.blog_content}</p>
                    </div>
                </div>)
            })
        }

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
  </div>;
};
export default Log;
