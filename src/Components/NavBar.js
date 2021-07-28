import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const NavBar = ({ Home, HowToPlay }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/how-to-play">How To Play</Link>
    </nav>
  );
};

export default NavBar;
