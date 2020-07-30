import React from "react";
import styled from "styled-components";
import { calculateRate, getKdaScoreColor } from "@utils/util";

const ChampWinRateItem = styled.li`
  padding: 4px 15px;
  border-bottom: 1px solid #cdd2d2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: #879292;

  :last-child {
    border-bottom: none;
  }
`;

const ChampImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
`;

const InfoText = styled.div`
  width: ${({ width }) => `${width}px`};
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: ${({ align }) => align};

  .top {
    color: ${({ kdaColor }) => (kdaColor ? kdaColor : "#5e5e5e")};
    font-size: 13px;
    font-weight: 600;
    cursor: default;
  }

  div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  :last-child {
    margin-right: 0;
  }
`;

const ChampWinRate = ({ champions }) => {
  const championsSort = champions.sort((a, b) => b.games - a.games);

  const champList = [];
  const champWinRateList = championsSort.map((data) => {
    const { cs, games, key, name, imageUrl } = data;
    if (champList.includes(key)) return null;
    champList.push(key);

    const { csRate, killRate, assistRate, deathRate, kdaScore, winRate } = calculateRate(data);
    const kdaColor = getKdaScoreColor(+kdaScore);

    console.log(kdaColor);

    return (
      <ChampWinRateItem key={key}>
        <ChampImg src={imageUrl} alt="champ-img" />
        <InfoText width={68} align={"left"}>
          <div className="top" title={name}>
            {name}
          </div>
          <div>
            CS {cs} ({csRate})
          </div>
        </InfoText>
        <InfoText width={88} align={"center"} kdaColor={kdaColor}>
          <div className="top">{kdaScore}:1 평점</div>
          <div>
            {killRate} / {deathRate} / {assistRate}
          </div>
        </InfoText>
        <InfoText width={40} align={"center"}>
          <div className="top">{winRate}%</div>
          <div>{games}게임</div>
        </InfoText>
      </ChampWinRateItem>
    );
  });

  return <ul>{champWinRateList}</ul>;
};

export default ChampWinRate;
