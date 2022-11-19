import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Projects from "./Projects";

export const Navbar = () => {
  const Nav = styled.nav`
    .navbar {
      position: sticky;
      top: 0;
    }
    .navContainer {
      background-color: ;
      height: 80px;
    }
    .navWrapper {
      width: 75vw;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      height: 100%;
    }
    .navOptions {
      display: flex;
      gap: 10px;
    }
  `;
  return (
    <Nav className="navbar">
      <div className="navContainer">
        <div className="navWrapper">
          <div className="navLogo">Logo</div>
          <div className="navOptions">
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Skills</h4>
            <h4>Projects</h4>
            <h4>Contact</h4>
            <h4>Resume</h4>
          </div>
        </div>
      </div>
    </Nav>
  );
};
