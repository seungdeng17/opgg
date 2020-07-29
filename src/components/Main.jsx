import React from "react";
import styled from "styled-components";

import Header from "@components/header/Header";

const MainWrap = styled.div`
  width: 1440px;
  margin: 0 auto;
`;

const Main = () => {
  return (
    <MainWrap>
      <Header />
    </MainWrap>
  );
};

export default Main;
