import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BsChatLeftText } from "react-icons/bs";
import { BiBomb } from "react-icons/bi";
import { FiSettings, FiUsers } from "react-icons/fi";
// import { ThemeContext } from "../../context/ThemeContext";
import "./Nav.css";
function Nav({ randomize }) {
  const clickHandler = (name) => { 
    randomize(name);
  };
  // const theme = useContext(ThemeContext);
  const initialIcons = [
    {
      name: "Chat",
      icon: <BsChatLeftText />,
      link: "#",
    },
    {
      name: "People",
      icon: <FiUsers />,
      link: "#",
    },
    {
      name: "Bomb",
      icon: <BiBomb />,
      link: "#",
    },
    {
      name: "Settings",
      icon: <FiSettings />,
      link: "#",
    },
  ];
  const [icons, setIcons] = useState([]);
  useEffect(() => {
    setIcons(initialIcons)
  }, [])
  return (
    <div className="nav">
      <Navbar>
        {icons.map(({ name, link, icon }) => (
          <div onClick={() => clickHandler(name)} key={name}>
            <Icon>{icon}</Icon>
          </div>
        ))}
      </Navbar>
    </div>
  );
}

export default Nav;

const Navbar = styled.div`
  background: #1a2036;
  padding: 4em 10px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  @media (max-width: 900px) {
    flex-direction: row;
    height: auto;
    padding: 10px;
    flex: 1;
    width: 100%;
    justify-content: space-evenly;
  }
`;

const Icon = styled.div`
  color: #a8b0cf;
  padding: 10px;
  border-radius: 7px;
  font-size: 20px;
  cursor: pointer;
  margin: 5px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #242b42;
  }
`;
