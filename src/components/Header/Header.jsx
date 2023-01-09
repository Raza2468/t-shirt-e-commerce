import React, { useState } from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import { Drawer, Button, Divider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from '@ant-design/icons';
import Svg from '../Images/header-logo-1.svg'
import bannerImg from '../Images/banner-img.png';


export default function Header() {


    const [isVisible, setIsVisible] = useState(false);

    const showDrawer = () => { setIsVisible(true); };
    const closeDrawer = () => { setIsVisible(false); };

    const styles = {
        button: {
            background: "transparent",
            outline: "none",
            color: "black",
            border: "none",
            fontSize: 26
        },
    };


    return (
        <div>
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
                                <button type="button" class="btn btn-outline-white w-50 p-3" id="">SHOP NOW!</button>
                                <br />
                            </div>
                            <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                                <img src={bannerImg} class="img-fluid mb-3 mb-lg-0" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}