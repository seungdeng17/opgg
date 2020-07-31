import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Loading from "@components/common/Loading";

const LoadingWrap = styled.div`
  width: 690px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MatchInfo = ({ type }) => {
  const { matchData, error } = useSelector(({ match }) => match);

  if (!matchData || error)
    return (
      <LoadingWrap>
        <Loading size={100} />
      </LoadingWrap>
    );

  return <div></div>;
};

export default MatchInfo;
