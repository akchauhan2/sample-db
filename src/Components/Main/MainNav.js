import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BsMenuButtonWide } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import styled from "styled-components";

function MainNav() {
  return (
    <Root>
      <RootLeft>
        <BiLeftArrowAlt style={{ fontSize: "1.3em" }} />
        Groups
      </RootLeft>
      <RootRight>
        <Icon>
          <CgMenuGridO />
        </Icon>
        <Icon>
          <BsMenuButtonWide />
        </Icon>
      </RootRight>
    </Root>
  );
}

export default MainNav;

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  color: #b1b9d8;
`;
const RootLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size:1.3em
`;

const RootRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 1px solid #1a2036;
  background: #15202b;
  border-radius: 3px;
`;
