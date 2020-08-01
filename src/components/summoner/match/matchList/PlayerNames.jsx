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

const Summoner = styled.div`
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
    font-size: 11px;
    color: #555;
    letter-spacing: -0.42px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  :last-child {
    margin: 0;
  }
`;

const MakeTeamList = (player) => {
  return (
    <Summoner key={player.summonerId}>
      <img src={player.champion.imageUrl} alt="champion-img" />
      <p>{player.summonerName}</p>
    </Summoner>
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
  const teamAList = teamA.players.map(MakeTeamList);
  const teamBList = teamB.players.map(MakeTeamList);

  return (
    <PlayerNamesWrap>
      <TeamWrap>{teamAList}</TeamWrap>
      <TeamWrap>{teamBList}</TeamWrap>
    </PlayerNamesWrap>
  );
};

export default PlayerNames;
