import React, { memo } from "react";
import styled from "styled-components";
import { getGameResult } from "@utils/util";

import GameStats from "./GameStats";
import GameSettingInfo from "./GameSettingInfo";
import KDAInfo from "./KDAInfo";
import StatsInfo from "./StatsInfo";
import ItemsInfo from "./ItemsInfo";
import PlayerNames from "./PlayerNames";

const MatchBoxWrap = styled.li`
  position: relative;
  width: 690px;
  height: 96px;
  box-sizing: border-box;
  border: 1px solid;
  border-radius: 2px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  &.win-game {
    background-color: #b0ceea;
    border-color: #a1b8cd;
  }
  &.lose-game {
    background-color: #d6b5b2;
    border-color: #c0aba8;
  }
  &.re-game {
    background-color: #b6b6b6;
    border-color: #a7a7a7;
  }
`;

const MoreInfoBox = styled.div`
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

const MatchBox = ({ match }) => {
  const { champion, spells, items, gameId, createDate, gameLength, gameType, stats, peak, isWin } = match;

  const { resultClassName, resultText } = getGameResult(gameLength, isWin);

  return (
    <MatchBoxWrap className={resultClassName}>
      <GameStats {...{ gameType, createDate, gameLength, resultClassName, resultText }} />
      <GameSettingInfo {...{ champion, spells, peak }} />
      <KDAInfo {...{ stats }} />
      <StatsInfo {...{ champion, stats }} />
      <ItemsInfo ward={stats.ward} {...{ items, resultClassName }} />
      <PlayerNames {...{ gameId }} />
      <MoreInfoBox className={resultClassName} />
    </MatchBoxWrap>
  );
};

export default memo(MatchBox);
