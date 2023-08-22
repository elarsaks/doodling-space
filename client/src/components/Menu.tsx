import React from "react";
import styled from "styled-components";

const MenuDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  right: 1vw;
  transform: translateY(-50%);
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 0.5em;
  background-color: #333;
  color: #fff;

  @media (max-width: 768px) {
    right: -95%;
    bottom: 10%;
    transform: translateX(0%);
  }
`;

const MenuButton = styled.button`
  margin: 0.5em 0;
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.5em;
  background-color: #555;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #777;
  }
`;

const RightCenterMenu: React.FC = () => {
  return (
    <MenuDiv>
      <MenuButton>Undo</MenuButton>
      <MenuButton>Redo</MenuButton>
      <MenuButton>Clear</MenuButton>
      <MenuButton>Pencil</MenuButton>
      <MenuButton>Eraser</MenuButton>
      <MenuButton>Color</MenuButton>
    </MenuDiv>
  );
};

export default RightCenterMenu;
