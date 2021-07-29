import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

const NavBar = ({ Home, HowToPlay }) => {
  return (
    <Wrapper>
      <ULWrapper>
        <NavLink to="/" activeClassName="current" exact>
          <li>Home</li>
        </NavLink>
        <NavLink to="/how-to-play" activeClassName="current" exact>
          <li>How to Play</li>
        </NavLink>
      </ULWrapper>
    </Wrapper>
  );
};

export default NavBar;
const Wrapper = styled.div`
  flex: 1;
  height: 50px;
  background-color: lavender;
`;
const ULWrapper = styled.ul`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: #0093e9;
  height: inherit;
  a {
    text-decoration: none;
    height: auto;
    padding: 10px;
  }
  li {
    color: black;
    margin: 0 0.08rem;
    font-size: 1rem;
    list-style: none;
    height: auto;
    &:hover {
      color: deeppink;
    }
  }
  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
`;
