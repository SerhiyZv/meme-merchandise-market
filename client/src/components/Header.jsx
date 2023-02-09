import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
// import "../style/Header.css";
import "../style/Header.css";

import Auth from "../utils/auth";

const Header = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <header>
      <body>
        <nav class="navbar">
          <img
            class="navbar-img-container navbar-img-container-left"
            src="client\public\img\shiba-inu-icon.png">
            <div class="navbar-img"></div>
          </img>
          <div class="navbar-title">Shiba Inu Meme Merchandise</div>
          <div class="navbar-img-container navbar-img-container-right">
            <div class="navbar-img"></div>
          </div>
          <button class="navbar-login-btn">Login</button>
        </nav>
      </body>
    </header>
  );
};

export default Header;
