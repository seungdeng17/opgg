import React, { useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "@hooks/useFetch";
import styled from "styled-components";
import { API } from "@constants/url";
import Loading from "@components/common/Loading";

const PlayerNamesWrap = styled.div`
  width: 170px;
  height: 92px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TeamWrap = styled.div`
  width: 85px;
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PlayerInfoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  img {
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }
  p {
    max-width: 60px;
    height: 13px;
    font-size: 11px;
    color: #555;
    letter-spacing: -0.42px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
  }
  :last-child {
    margin: 0;
  }
`;

const makeTeamList = (player) => {
  return (
    <PlayerInfoWrap key={player.summonerId}>
      <img src={player.champion.imageUrl} alt="champion-img" />
      <p>{player.summonerName}</p>
    </PlayerInfoWrap>
  );
};

const PlayerNames = ({ gameId }) => {
  const { summonerData } = useSelector(({ summoner }) => summoner);
  const [gamePlayersInfo, setGamePlayersInfo] = useState(null);

  const url = API.GET_MATCH_DETAIL(summonerData.name, gameId);
  const bLoading = useFetch({ url, callback: setGamePlayersInfo, dependency: summonerData });
  if (bLoading)
    return (
      <PlayerNamesWrap>
        <Loading size={40} />
      </PlayerNamesWrap>
    );

  const [teamA, teamB] = gamePlayersInfo.teams;
  const teamAList = teamA.players.map(makeTeamList);
  const teamBList = teamB.players.map(makeTeamList);

  return (
    <PlayerNamesWrap>
      <TeamWrap>{teamAList}</TeamWrap>
      <TeamWrap>{teamBList}</TeamWrap>
    </PlayerNamesWrap>
  );
};

export default PlayerNames;
