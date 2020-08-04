import React from "react";
import styled from "styled-components";

import SearchAutoComplete from "./SearchAutoComplete";
import SearchHistory from "./SearchHistory";

const SearchFormModalWrap = styled.div`
  position: absolute;
  top: 36px;
  left: 0;
  width: 100%;
  min-height: 127px;
  border-radius: 2px;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
`;

const SearchFormModal = ({ value }) => {
  const modalContent = value ? <SearchAutoComplete {...{ value }} /> : <SearchHistory />;

  return <SearchFormModalWrap>{modalContent}</SearchFormModalWrap>;
};

export default SearchFormModal;
