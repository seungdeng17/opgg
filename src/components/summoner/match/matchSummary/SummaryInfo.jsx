import React from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

const SummaryInfoWrap = styled.div`
  padding: 16px 24px;
  border-right: 1px solid #cdd2d2;
`;

const WinLossRatioWrap = styled.div`
  font-size: 12px;
  color: #666;
  text-align: center;
`;

const DoughnutWrap = styled.div`
  margin-top: 14px;
  width: 90px;
  height: 90px;
`;

const SummaryInfo = ({ summary }) => {
  const { wins, losses, kills, deaths, assists } = summary;
  const games = wins + losses;

  const options = {
    cutoutPercentage: 70,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    tooltips: {
      enabled: false,
    },
  };

  const colors = ["#ee5a52", "#1f8ecd"];

  const data = {
    datasets: [
      {
        data: [losses, wins],
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };

  return (
    <SummaryInfoWrap>
      <WinLossRatioWrap>
        {games}전 {wins}승 {losses}패
        <DoughnutWrap>
          <Doughnut data={data} options={options} />
        </DoughnutWrap>
      </WinLossRatioWrap>
    </SummaryInfoWrap>
  );
};

export default SummaryInfo;
