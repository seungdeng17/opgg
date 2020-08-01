import React from "react";
import styled from "styled-components";
import { getChampName } from "@utils/util";

const GameSettingInfoWrap = styled.div`
  width: 100px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .image-wrap {
    display: flex;
  }
  .champ-name {
    font-size: 11px;
    color: #555;
  }
`;

const ChampImg = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  margin-right: 6px;
`;

const SpellImg = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 2px;
`;

const PeakImg = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;

  &.main-peak {
    background-color: #000;
  }
`;

const GameSettingInfo = ({ champion, spells, peak }) => {
  const champName = getChampName(champion.imageUrl);

  return (
    <GameSettingInfoWrap>
      <div className="image-wrap">
        <ChampImg src={champion.imageUrl} alt="champ-img" />
        <div>
          <SpellImg src={spells[0].imageUrl} alt="spell-img" />
          <SpellImg src={spells[1].imageUrl} alt="spell-img" />
        </div>
        <div>
          <PeakImg src={peak[0]} alt="peak-img" className="main-peak" />
          <PeakImg src={peak[1]} alt="peak-img" />
        </div>
      </div>
      <span className="champ-name">{champName}</span>
    </GameSettingInfoWrap>
  );
};

export default GameSettingInfo;
