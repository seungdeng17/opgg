import React from "react";
import styled from "styled-components";

import SummaryInfo from "./SummaryInfo";
import ChampionsInfo from "./ChampionsInfo";
import PositionsInfo from "./PositionsInfo";

const MatchSummaryWrap = styled.div`
  width: 690px;
  height: 158px;
  background-color: #ededed;
  border: 1px solid #cdd2d2;
  border-top: none;
  margin-bottom: 16px;
  display: flex;
`;

const MatchSummary = ({ matchData }) => {
  const { summary, champions, positions } = matchData;

  return (
    <MatchSummaryWrap>
      <SummaryInfo {...{ summary }} />
      <ChampionsInfo {...{ champions }} />
      <PositionsInfo {...{ positions }} />
    </MatchSummaryWrap>
  );
};

export default MatchSummary;
