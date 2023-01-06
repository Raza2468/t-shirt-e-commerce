import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, Button, Divider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./NavBar.css"
import bannerImg from '../Images/banner-img.png'
import Svg from '../Images/header-logo-1.svg'
import TShirt from '../Images/trending-product-1.png'
import Boxer from '../Images/boxers-img.png'
import Crown from '../Images/crown-img.png'
import GroupImage from '../Images/Group-img.png'
import jusdevoyage from '../Images/jusdevoyage-img.png'
import Siora from '../Images/siora-img.png'
import Member1 from '../Images/member-1.png'
import Member2 from '../Images/member-2.jpg'
import Member3 from '../Images/member-3.jpg'

import HomeHat from '../Images/home-hat.png'
import HomeHoodies from '../Images/home-hoodies.png'
import HomeJoggers from '../Images/home-joggers.png'
import HomeShorts from '../Images/home-shorts.png'
import HomeTShirt from '../Images/home-tshirt.png'
import { ShoppingCartOutlined } from '@ant-design/icons';
import Carousel from "react-elastic-carousel";


export default function NavBar() {

  const [isVisible, setIsVisible] = useState(false);

  const showDrawer = () => {
    setIsVisible(true);
  };

  const closeDrawer = () => {
    setIsVisible(false);
  };
  const styles = {
    button: {

      background: "transparent",
      outline: "none",
      color: "black",
      border: "none",
      fontSize: 26
    },
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];



  return (
    <>
      <header id="header" class="fixed-top">
        <div class="container -d-flx aling-item-center">
          <h3 class="teck-header-text"> Spend $50 for free shipping </h3>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light" id="navbarLogo">
          <div class="container-fluid">
            <nav>
              <Button shape="circle" style={styles.button} onClick={showDrawer}>
                <MenuOutlined style={{ color: "white" }} />
              </Button>
            </nav>
            <span class-="text-center"><img src={Svg} /></span>

            <div class="d-flex align-items-center">
              <a class="text-reset me-3" href="#" >
                <ShoppingCartOutlined style={{ fontSize: "33px" }} />
                <span class="badge rounded-pill badge-notification bg-danger">1</span>
              </a>

              {/* <!-- Avatar --> */}

              <div class="dropdown">
                <a
                  class="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                    class="rounded-circle"
                    height="45"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Order
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Membership
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

      </header>

      {/* <!-- Navbar --> */}
      <Drawer
        visible={isVisible}
        placement="left"
        onClose={closeDrawer}
        title="My Drawer"

      >
        {/* <button type="button" class="btn-close text-reset" onClick={closeDrawer} data-bs-dismiss="offcanvas" aria-label="Close"></button> */}

        {/* <Divider /> */}
        <p id="nav-item">Home</p>
        <Divider />
        <p id="nav-item">About Us</p>
        <Divider />
        <p id="nav-item">Collection</p>
        <Divider />
        <p id="nav-item">Subcription</p>
        <Divider />
        <p id="nav-item">Contact Us</p>
      </Drawer>

      <div>
        <section id="hero" class="hero d-flex align-items-center">
          <div class="container">
            <div class="row gy-4 d-flex justify-content-between">
              <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h2 data-aos="fade-up">Do Well, Live Well & Dress Really Well</h2>
                <p data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tempus augue, id convallis est. Nulla neque sapien,
                  mattis at molestie id, auctor faucibus ligula. Pellentesque laoreet luctus erat, at ullamcorper neque feugiat id.</p>
                <a class="teck-banner-btn" href="collection.html" role="button">SHOP NOW!</a>
              </div>

              <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                <img src={bannerImg} class="img-fluid mb-3 mb-lg-0" alt="" />
              </div>
            </div>
          </div>
        </section>


        <br />
        <br />
        <br />
        <br />

        <div className="">
          <h1 class="text-center">Best Selling Product </h1>
          <br />

          <div class="selling-product-text text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              a tempus augue, id convallis est. Nulla neque sapien,mattis
              at molestie id, auctor faucibus ligula. Pellentesque laoreet
              luctus erat, at ullamcorper neque feugiat id.
            </p>
          </div>

          <br />
          <Carousel breakPoints={breakPoints}>

            <div id="">
              <div class="content-with-image">
                <div class="image">
                  <img src={TShirt} class="carousal-img img-fluid" />
                </div>

                <div class="desc text-center">
                  <h2 >Menace Shirt Design</h2>
                </div>
              </div>

              <div class="member-text text-center">
                <h4>Menace Shirt Design</h4>
                <p class="over-line">Retail: $90.00</p>
                <p>3 For $30 (B1G2)</p>
              </div>

              <div class="member-link text-center">
                <a href="#">NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>
              </div>
            </div>
            <div id="">
              <div class="content-with-image">
                <div class="image">
                  <img src={TShirt} class="carousal-img img-fluid" />
                </div>

                <div class="desc text-center">
                  <h2 >Menace Shirt Design</h2>
                </div>
              </div>

              <div class="member-text text-center">
                <h4>Menace Shirt Design</h4>
                <p class="over-line">Retail: $90.00</p>
                <p>3 For $30 (B1G2)</p>
              </div>

              <div class="member-link text-center">
                <a href="#">NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>
              </div>
            </div>
            <div id="">
              <div class="content-with-image">
                <div class="image">
                  <img src={TShirt} class="carousal-img img-fluid" />
                </div>

                <div class="desc text-center">
                  <h2 >Menace Shirt Design</h2>
                </div>
              </div>

              <div class="member-text text-center">
                <h4>Menace Shirt Design</h4>
                <p class="over-line">Retail: $90.00</p>
                <p>3 For $30 (B1G2)</p>
              </div>

              <div class="member-link text-center">
                <a href="#">NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>
              </div>
            </div>
            <div id="">
              <div class="content-with-image">
                <div class="image">
                  <img src={TShirt} class="carousal-img img-fluid" />
                </div>

                <div class="desc text-center">
                  <h2 >Menace Shirt Design</h2>
                </div>
              </div>

              <div class="member-text text-center">
                <h4>Menace Shirt Design</h4>
                <p class="over-line">Retail: $90.00</p>
                <p>3 For $30 (B1G2)</p>
              </div>

              <div class="member-link text-center">
                <a href="#">NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>
              </div>
            </div>
            <div id="">
              <div class="content-with-image">
                <div class="image">
                  <img src={TShirt} class="carousal-img img-fluid" />
                </div>

                <div class="desc text-center">
                  <h2 >Menace Shirt Design</h2>
                </div>
              </div>

              <div class="member-text text-center">
                <h4>Menace Shirt Design</h4>
                <p class="over-line">Retail: $90.00</p>
                <p>3 For $30 (B1G2)</p>
              </div>

              <div class="member-link text-center">
                <a href="#">NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>
              </div>
            </div>
            <div id="">
              <div class="content-with-image">
                <div class="image">
                  <img src={TShirt} class="carousal-img img-fluid" />
                </div>

                <div class="desc text-center">
                  <h2 >Menace Shirt Design</h2>
                </div>
              </div>

              <div class="member-text text-center">
                <h4>Menace Shirt Design</h4>
                <p class="over-line">Retail: $90.00</p>
                <p>3 For $30 (B1G2)</p>
              </div>

              <div class="member-link text-center">
                <a href="#">NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>
              </div>
            </div>
          </Carousel>
        </div>

        <div class="btn-selling">
          <button type="button" class="btn btn-outline-dark">SHOP NOW!</button>
        </div>


        <section id="call-to-action" class="call-to-action">
          <div class="container" data-aos="fade-up">
            <div class="row justify-content-center">
              <div class="col-lg-6 text-center">
                <h3 id="bannerText">Your Choice Counts</h3>
                <p id="bannerTextParagraf">Choose what design you'd like to see us add an d get an extra special discount.</p>
                <div class="btn-selling">
                  <button type="button" class="btn btn-outline-white" id="">Continoue</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />


        <section id="teck-about-section" class="teck-about-section">

          <div class="container">

            <div class="row">

              <h3>About Tatsu Threads</h3>
              <div class="col-lg-7  teck-boxers-img">
                <img src={Boxer} class="boxers-img img-fluid" alt="" />
                <div class="group-img">
                  {/* <a href="#">
                    <img src={GroupImage} class="img-fluid" alt="" />
                  </a> */}
                </div>
              </div>

              <div class="col-lg-5 col-md-12 col-sm-12  teck-siora-img">
                <img src={Siora} class="siora img-fluid" alt="" />
                <p>

                  lorem ipsum dolor sit amet, consectetur adipiscing elit.

                  sed euismod libero nec arcu vehicula congue. pellentesque lacinia

                  lobortis efficitur. mauris vel ipsum mi. mauris lacus tellus.

                </p>
              </div>
              <div class="row">
                <div class="col-lg-6 teck-man-img">
                  <img src={jusdevoyage} class="jusdevoyage-img img-fluid" alt="" />
                  <div class="group-img">
                    <a href="#"> <img src={GroupImage} class=" img-fluid" alt="" /> </a>
                  </div>

                </div>

                <div class="col-lg-6 teck-crown-img">

                  <img src={Crown} class="crown-img img-fluid" alt="" />

                </div>

              </div>

            </div>
          </div>
        </section>

        <br />
        <br />
        <br />


        <section id="trending-sec" class="teck-trending-">

          <div class="container">

            <div class="row">
              <br />
              <h1 class="text-center" id="trending-sec">Trending Now </h1>
              <div class="selling-product-text text-center">
                <p id="trending-secParagraf">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  a tempus augue, id convallis est. Nulla neque sapien,mattis
                  at molestie id, auctor faucibus ligula. Pellentesque laoreet
                  luctus erat, at ullamcorper neque feugiat id.
                </p>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div class="buy-now">
                  <img src={Member1} class="buy-now-img img-fluid" alt="" />
                  <div class="shop-btn buy-me-now">
                    {/* <a href="#">
                      <img src={GroupImage} class="buy-now-btn img-fluid" alt="" />
                    </a> */}
                  </div>
                </div>
                <br />
                <div class="trending-member text-center">
                  <h4>Menace Shirt Design</h4>
                  <p class="over-line">Retail: $90.00</p>
                  <p>3 For $30 (B1G2)</p>
                </div>

                <div class="trending-link text-center">
                  <a href="#">NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>
                </div>

              </div>

              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 cap-boy">
                <div class="buy-now">
                  <img src={Member2} class="buy-now-img img-fluid" alt="" />
                  <div class="shop-btn">
                    <a href="#">
                      {/* <img src={GroupImage} class="buy-now-btn img-fluid" alt="" /> */}
                    </a>
                  </div>
                </div>

                <div class="trending-member text-center">
                  <br />
                  <h4>Menace Shirt Design</h4>
                  <p class="over-line">Retail: $90.00</p>
                  <p>3 For $30 (B1G2)</p>
                </div>

                <div class="trending-link text-center">
                  <a href="#">NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>
                </div>

              </div>

              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">

                <div class="buy-now">

                  <img src={Member3} class="buy-now-img img-fluid" alt="" />
                  <div class="shop-btn buy-me-now">
                    <a href="#">
                      {/* <img src={GroupImage} class="buy-now-btn img-fluid" alt="" /> */}
                    </a>
                  </div>
                </div>
                <br />
                <div class=" trending-member text-center">
                  <h4>Menace Shirt Design</h4>
                  <p class="over-line">Retail: $90.00</p>
                  <p>3 For $30 (B1G2)</p>
                </div>
                <div class="trending-link text-center">
                  <a href="#">NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>

          </div>

        </section>

        <br />
        <br />
        <br />
        <section id="teck-colllection-text" class="teck-collection-text">

          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <h3>
                  Once Again tatsuthreads defies the odds with the 2k22 Collection
                </h3>
              </div>

              <div class="col-lg-6 col-md-12 col-sm-12 2k22-Collection-content">
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  sed euismod libero nec  arcu vehicula congue. pellentesque
                  lacinia lobortis efficitur. mauris vel ipsum mi . mauris lacus
                  tellus.lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  sed  euismod libero nec arcu vehicula congue.
                </p>

                <a class=" teck-btn-discover-as" href="about-us.html" role="button">DISCOVER US</a>

              </div>
            </div>
            <div class="teck-hr">
              <hr />
            </div>
          </div>
        </section>


        <br />
        <br />
        <br />
        <section id="our-collection">

          <div class="container">

            <div class="row d-flex justify-content-around">
 
              <h1>Our Collection</h1>

              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 ">
                <a href="collection.html#t-shirt">
                  <div class="tatsu-collection">
                    <img src={HomeTShirt} class="img-fluid" />
                  </div>
                  <div class="product-name">
                    <h4>T-Shirt</h4>
                  </div>
                </a>
              </div>

              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 ">
                <a href="collection.html#hats">
                  <div class="tatsu-collection">
                    <img src={HomeHat} class="img-fluid" />
                  </div>
                  <div class="product-name">
                    <h4>Hats</h4>
                  </div>
                </a>

              </div>

              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 ">
                <a href="collection.html#hoodies">
                  <div class="tatsu-collection">
                    <img src={HomeHoodies} class="img-fluid" />
                  </div>

                  <div class="product-name">
                    <h4>Hoodies</h4>
                  </div>
                </a>
              </div>

              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 ">
                <a href="collection.html#joggers">
                  <div class="tatsu-collection">
                    <img src={HomeJoggers} class="img-fluid" />
                  </div>
                  <div class="product-name">
                    <h4>Joggers</h4>
                  </div>
                </a>
              </div>

              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 ">
                <a href="collection.html#shorts">
                  <div class="tatsu-collection">
                    <img src={HomeShorts} class="img-fluid" />
                  </div>
                  <div class="product-name">
                    <h4>Shorts</h4>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
