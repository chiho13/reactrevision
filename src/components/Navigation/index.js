import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #333;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;

  @media (min-width: 700px) {
    .Nav_title {
      margin: 0;
      color: #ffffff;
      display: flex;
      align-items: center;
      margin-left: 20px;
    }
  }
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
  width: 30px;
  margin-right: 10px;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    background-color: #fff;
    border-radius: 3px;
    width: 100%;
    height: 3px;
  }

  &::before {
    transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "")};
  }

  &::after {
    transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "")};
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

const Menu = styled.ul`
  background-color: #333;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: calc(100% - 60px);
  z-index: 998;

  @media (min-width: 700px) {
    display: flex;
    background-color: transparent;
    position: static;
    height: auto;
    width: auto;
    flex-direction: row;
  }
`;

const MenuItem = styled.li`
  color: #fff;
  padding: 10px;
  text-align: center;
  width: 100%;

  &:hover {
    background-color: #444;
  }

  @media (min-width: 700px) {
    width: auto;
    padding: 10px 20px;
  }
`;

const NavigationHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Hamburger isOpen={isOpen} onClick={toggleMenu} />
      <h1 class="Nav_title">Coin Watcher</h1>
      <Menu isOpen={isOpen}>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </Nav>
  );
};

export default NavigationHeader;
