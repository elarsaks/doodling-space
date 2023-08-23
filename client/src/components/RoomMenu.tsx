import React from "react";
import styled from "styled-components";

const CornerDiv = styled.div`
  position: absolute;
  top: 1vh;
  right: 1vw;
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 0.5em;
  background-color: #333;
  color: #fff;
`;

const UpperLeftCornerComponent: React.FC = () => {
  return <CornerDiv>Doodle Tool</CornerDiv>;
};

export default UpperLeftCornerComponent;
