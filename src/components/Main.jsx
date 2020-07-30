import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import NoResult from "@components/etc/NoResult";
import Header from "@components/header/Header";
import Profile from "@components/summoner/profile/Profile";

const MainWrap = styled.div`
  width: 1440px;
  margin: 0 auto;
`;

const Main = () => {
  const { summonerData, error } = useSelector(({ summoner }) => summoner);

  const mainContent = summonerData && !error ? <Profile {...{ summonerData }} /> : <NoResult />;

  return (
    <MainWrap>
      <Header />
      {mainContent}
    </MainWrap>
  );
};

export default Main;
