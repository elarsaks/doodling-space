import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUndo,
  faRedo,
  faBan,
  faHandPaper,
  faPencilAlt,
  faEraser,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

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
    transform: translateX(0%) translateY(-50%);
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
  font-size: 1.2em; /* Adjust this to change the icon size */

  &:hover {
    background-color: #777;
  }
`;

const RightCenterMenu: React.FC = () => {
  return (
    <MenuDiv>
      <MenuButton>
        <FontAwesomeIcon icon={faUndo} />
      </MenuButton>
      <MenuButton>
        <FontAwesomeIcon icon={faRedo} />
      </MenuButton>
      <MenuButton>
        <FontAwesomeIcon icon={faBan} />
      </MenuButton>
      <MenuButton>
        <FontAwesomeIcon icon={faHandPaper} />
      </MenuButton>
      <MenuButton>
        <FontAwesomeIcon icon={faPencilAlt} />
      </MenuButton>
      <MenuButton>
        <FontAwesomeIcon icon={faEraser} />
      </MenuButton>
      <MenuButton>
        <FontAwesomeIcon icon={faPalette} />
      </MenuButton>
    </MenuDiv>
  );
};

export default RightCenterMenu;
