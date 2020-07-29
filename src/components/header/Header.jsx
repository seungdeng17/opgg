import React from "react";
import styled from "styled-components";

import SearchForm from "./SearchForm";

const HeaderWrap = styled.div`
  position: relative;
  width: 100%;
  height: 97px;
  background-color: #1ea1f7;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <SearchForm />
    </HeaderWrap>
  );
};

export default Header;
