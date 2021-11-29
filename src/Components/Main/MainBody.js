import React, { useEffect, useState } from "react";
import styled from "styled-components";

function MainBody({ number }) {
  const generateRandomNumber = () => (Math.random() * 1000).toFixed();
  const generateRandomBoolean = () => !Math.round(Math.random());

  const initialItems = [
    {
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=80",
      on: generateRandomBoolean(),
      h4: generateRandomNumber() + " Members",
      h2: "Cuisine",
    },
    {
      img: "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=80",
      on: generateRandomBoolean(),
      h4: generateRandomNumber() + " Members",
      h2: "Workout",
    },
    {
      img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=80",
      on: generateRandomBoolean(),
      h4: generateRandomNumber() + " Members",
      h2: "Gaming",
    },
    {
      img: "https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=80",
      on: generateRandomBoolean(),
      h4: generateRandomNumber() + " Members",
      h2: "Hiking",
    },
    {
      img: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=80",
      on: generateRandomBoolean(),
      h4: generateRandomNumber() + " Members",
      h2: "Yoga",
    },
    {
      img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=80",
      on: generateRandomBoolean(),
      h4: generateRandomNumber() + " Members",
      h2: "Music",
    },
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=240&q=60",
      on: generateRandomBoolean(),
      h4: generateRandomNumber() + " Members",
      h2: "Tech",
    },
    {
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=80",
      on: generateRandomBoolean(),
      h4: generateRandomNumber() + " Members",
      h2: "Food",
    },
  ];
  const [items, setItems] = useState([]);
  useEffect(() => {
    initialItems.sort(() => 0.5 - Math.random());
    setItems(initialItems);
  }, [number]);
  return (
    <Cards>
      {items.map(({ img, h4, h2, on }) => (
        <Card key={h2}>
          {on && <On />}
          <Header>
            <Img src={img} alt="" />
          </Header>
          <Body>
            <H2>{h2}</H2>
            <H4>{h4}</H4>
          </Body>
        </Card>
      ))}
    </Cards>
  );
}

export default MainBody;
const Cards = styled.div`
  border-radius: 10px;
  display: flex; 
  margin: 15px 0;
  align-items: center; 
  flex-wrap: wrap;
  gap:1em
`;
const Card = styled.div`
  border-radius: 10px; 
  position:relative;
  display: flex;
  flex:1;
  min-width: 170px;
  max-width: 170px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #1a2036;
  padding: 2.5em 1.5em; 
`;
const Header = styled.div`
  width: 60px;
  height: 60px;
`;
const Img = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
  background-position: center center;
`;
const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
`;
const H2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column; 
  font-size:22px
`;
const H4 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 15px;
`;
const On = styled.div`
  position: absolute;
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #8e66ff;
  top: 10%;
  right: 10%;
`;