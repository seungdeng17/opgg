import React from "react";
import styled from "styled-components";
import { getGameResult } from "@utils/util";

import GameStats from "./GameStats";
import GameSettingInfo from "./GameSettingInfo";
import KDAInfo from "./KDAInfo";

const MatchBoxWrap = styled.li`
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
  &.loss-game {
    background-color: #d6b5b2;
    border-color: #c0aba8;
  }
  &.re-game {
    background-color: #b6b6b6;
    border-color: #a7a7a7;
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
    </MatchBoxWrap>
  );
};

export default MatchBox;