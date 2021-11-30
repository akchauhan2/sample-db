import React, { useEffect, useState } from "react";
import {  BsPlusCircle } from "react-icons/bs";
import { FaRegTimesCircle } from "react-icons/fa";
import styled from "styled-components";
import {Zoom} from "react-reveal";
function MainBody({ name }) {
  const generateRandomNumber = () => (Math.random() * 100).toFixed();
  const generateRandomBoolean = () => !Math.round(Math.random());

  const addNew = ({ h2, img }, reset) => {
    setItems((items) => {
      return [
        ...items,
        {
          img,
          h2,
          on: generateRandomBoolean(),
          h4: generateRandomNumber() + " Members",
        },
      ];
    });
    reset(true);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addNew(
      {
        h2: e.currentTarget.name.value,
        img: e.currentTarget.image.value,
      },
      function (res) {
        if (res) {
          e.currentTarget.reset();
          setAdd(false);
        }
      }
    );
  };

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
  const [add, setAdd] = useState(false);
  const [items, setItems] = useState(initialItems);
  useEffect(() => {
    setItems([...items].sort(() => 0.5 - Math.random()));
  }, [name]);


  return (
    <Cards>
      {add && (
        <NewCard>
          <Cancel onClick={() => setAdd(false)}>
            <FaRegTimesCircle />
          </Cancel>
          <Form onSubmit={(e) => submitHandler(e)}>
            <H2>Add New</H2>
            <Input name="name" type="text" required placeholder="Name" />
            <Input name="image" type="text" required placeholder="Image Url" />
            <RightAlign>
              <Button type="submit" />
            </RightAlign>
          </Form>
        </NewCard>
      )}
      {!add && (
        <Card>
          <Body>
            <A onClick={() => setAdd(true)}>
              <BsPlusCircle className="icon-100" />
            </A>
            <H4>Add New</H4>
          </Body>
        </Card>
      )}
      {items.map(({ img, h4, h2, on }) => (
        <Card key={h2}>
          <Zoom>
            <>
              {on && <On />}
              <Header>
                <Img src={img} alt="" />
              </Header>
              <Body>
                <H2>{h2}</H2>
                <H4>{h4}</H4>
              </Body>
            </>
          </Zoom>
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
  gap: 1em;
  padding: 5px;
  flex: 1;
  justify-content: space-evenly;
  overflow: auto;
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;
const Card = styled.div`
  border-radius: 10px;
  position: relative;
  display: flex;
  flex: 1;
  min-width: 170px;
  max-width: 170px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #1a2036;
  padding: 2em 1.5em;
  @media (max-width: 768px) {
    max-width: 200%;
  }
`;
const NewCard = styled.div`
  border-radius: 10px;
  position: relative;
  display: flex;
  flex: 1;
  min-width: 170px;
  max-width: 170px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #1a2036;
  padding: 1.5em 1.5em .5em;
`;
const Header = styled.div`
  width: 80px;
  height: 63px;
  margin: 0 auto;
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
const A = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 35px;
  text-align: center;
  margin-bottom: 0.5em;
  color: #fff;
  cursor: pointer;
`;
const H2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 22px;
  color: #fff;
`;
const H4 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 15px;
  color: #fff;
`;
const On = styled.div`
  position: absolute;
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #8e66ff;
  top: -1em;
  right: -1em;
`;

const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  padding: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;
const Input = styled.input`
  box-sizing: border-box;
  max-width: 80%;
  border-radius: 0.3em;
  padding: 5% 6px;
  outline: none;
  border: none;
`;
const Button = styled.input`
  padding: 0.5em 1em;
  background: #8e66ff;
  outline: none;
  border: none;
  border-radius: 0.25em;
`;
const RightAlign = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
`;
const Cancel = styled.div`
  position: absolute;
  top: .5em;
  right: 0.3em;
  font-size: 1.5em;
  color: #fff;
  cursor: pointer;
`;
