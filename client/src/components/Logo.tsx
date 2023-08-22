import React from 'react';
import styled from 'styled-components';

const CornerDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;  // You can adjust the size as needed
  height: 50px; // You can adjust the size as needed
  background-color: #333; // You can adjust the color as needed
  color: #fff; // Text color, adjust as needed
`;

const UpperLeftCornerComponent: React.FC = () => {
  return <CornerDiv>Content</CornerDiv>;
};

export default UpperLeftCornerComponent;
