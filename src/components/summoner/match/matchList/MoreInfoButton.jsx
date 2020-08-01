import React from "react";
import styled from "styled-components";

const MoreInfoButtonWrap = styled.div`
  position: absolute;
  width: 30px;
  height: 96px;
  top: -1px;
  right: -1px;
  box-sizing: border-box;
  border: 1px solid;
  &.win-game {
    background-color: #7fb0e1;
    border-color: #549dc7;
  }
  &.lose-game {
    background-color: #e89c95;
    border-color: #c8817c;
  }
  &.re-game {
    background-color: #a7a7a7;
    border-color: #999;
  }
`;

const MoreInfoButton = ({ resultClassName }) => {
  return <MoreInfoButtonWrap className={resultClassName}></MoreInfoButtonWrap>;
};

export default MoreInfoButton;
