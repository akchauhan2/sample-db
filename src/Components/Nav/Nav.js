import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BsChatLeftText } from "react-icons/bs";
import { BiBomb } from "react-icons/bi";
import { FiSettings, FiUsers } from "react-icons/fi";
// import { ThemeContext } from "../../context/ThemeContext";
import "./Nav.css";
function Nav({ randomize }) {
  const clickHandler = () => {
    randomize();
  };
  // const theme = useContext(ThemeContext);
  const initialIcons = [
    {
      name: "chat",
      icon: <BsChatLeftText />,
      link: "#",
    },
    {
      name: "people",
      icon: <FiUsers />,
      link: "#",
    },
    {
      name: "bomb",
      icon: <BiBomb />,
      link: "#",
    },
    {
      name: "settings",
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
      {icons.map(({ name, link, icon }) => (
        <div onClick={() => clickHandler()} key={name}>
          <Icon>{icon}</Icon>
        </div>
      ))}
    </div>
  );
}

export default Nav;

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
