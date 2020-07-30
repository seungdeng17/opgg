import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import NoResult from "@components/etc/NoResult";
import Header from "@components/header/Header";
import Profile from "@components/summoner/profile/Profile";
import Rank from "@components/summoner/rank/Rank";

const MainWrap = styled.div`
  width: 1440px;
  margin: 0 auto;
`;

const MainContentsOutter = styled.div`
  background-color: #eaeaea;
`;

const MainContentsInner = styled.div`
  padding-top: 10px;
  padding-left: 179px;
  display: flex;
`;

const MainLeftContents = styled.div`
  width: 300px;
  margin-right: 10px;
`;

const MainRightContents = styled.div`
  width: 690px;
`;

const Main = () => {
  const { summonerData, error } = useSelector(({ summoner }) => summoner);

  const mainContents =
    summonerData && !error ? (
      <>
        <Profile {...{ summonerData }} />
        <MainContentsOutter>
          <MainContentsInner>
            <MainLeftContents>
              <Rank {...{ summonerData }} />
            </MainLeftContents>
            <MainRightContents></MainRightContents>
          </MainContentsInner>
        </MainContentsOutter>
      </>
    ) : (
      <NoResult />
    );

  return (
    <MainWrap>
      <Header />
      {mainContents}
    </MainWrap>
  );
};

export default Main;
