import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEraser,
  faHandPaper,
  faPalette,
  faPencilAlt,
  faRecycle,
  faRedo,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";

const MenuDiv = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  right: 1vw;
  transform: translateY(-50%);
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.5em;
  border: 2px solid rgba(3, 14, 33, 1);
  border-radius: 0.5em;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  gap: 0.5em;

  @media (max-width: 768px) {
    right: -95%;
    bottom: 10%;
    transform: translateX(0%) translateY(-50%);
  }
`;

const MenuButton = styled.button`
  padding: 0.5em 1em;
  border: 1px solid #fff;
  border-radius: 0.3em;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 0.7em; /* Adjust this to change the icon size */

  &:hover {
    background-color: rgba(1, 14, 33, 0.7);
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
        <FontAwesomeIcon icon={faRecycle} />
      </MenuButton>

      <MenuButton>
        <FontAwesomeIcon icon={faHandPaper} />
      </MenuButton>

      <MenuButton>
        <FontAwesomeIcon icon={faPencilAlt} />
      </MenuButton>

      <MenuButton>
        <FontAwesomeIcon icon={faPalette} />
      </MenuButton>

      <MenuButton>
        <FontAwesomeIcon icon={faEraser} />
      </MenuButton>
    </MenuDiv>
  );
};

export default RightCenterMenu;
