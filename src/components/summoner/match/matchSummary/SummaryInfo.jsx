import React from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

import DoughnutGraph from "./DoughnutGraph";

const SummaryInfoWrap = styled.div`
  padding: 16px 24px;
  border-right: 1px solid #cdd2d2;
`;

const WinLossRatioWrap = styled.div`
  font-size: 12px;
  color: #666;
  text-align: center;
`;

const GraphWrap = styled.div`
  margin-top: 14px;
  width: 90px;
  height: 90px;
`;

const SummaryInfo = ({ summary }) => {
  const { wins, losses, kills, deaths, assists } = summary;
  const games = wins + losses;

  return (
    <SummaryInfoWrap>
      <WinLossRatioWrap>
        {games}전 {wins}승 {losses}패
        <GraphWrap>
          <DoughnutGraph {...{ wins, losses }} />
        </GraphWrap>
      </WinLossRatioWrap>
    </SummaryInfoWrap>
  );
};

export default SummaryInfo;
