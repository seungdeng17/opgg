import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Header from "@components/header/Header";
import Profile from "@components/summoner/profile/Profile";

import dinger from "@assets/images/dinger.png";

const MainWrap = styled.div`
  width: 1440px;
  margin: 0 auto;
`;

const NoResult = styled.div`
  height: calc(100vh - 97px);
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-family: "AppleSDGothicNeo-Regular";
    margin-top: 20px;
    font-size: 35px;
    font-weight: 600;
    color: #879292;
  }
`;

const Main = () => {
  const { summonerData, error } = useSelector(({ summoner }) => summoner);

  const mainContent =
    summonerData && !error ? (
      <Profile {...{ summonerData }} />
    ) : (
      <NoResult>
        <img src={dinger} alt="dinger-img" />
        <p>소환사명을 입력해주세요.</p>
      </NoResult>
    );

  return (
    <MainWrap>
      <Header />
      {mainContent}
    </MainWrap>
  );
};

export default Main;
