import React from "react";
import styled from "styled-components";
import { numberComma } from "@utils/util";

const InfoWrap = styled.div`
  position: relative;
  margin: 10px 17px;
`;

const Name = styled.h2`
  font-family: "AppleSDGothicNeo-Bold";
  height: 24px;
  font-size: 20px;
  letter-spacing: -0.77px;
  color: #242929;
  margin-bottom: 4px;
`;

const LadderRank = styled.p`
  font-family: "AppleSDGothicNeo-Regular";
  height: 13px;
  font-size: 11px;
  letter-spacing: -0.42px;
  color: #657070;

  span {
    font-family: "Helvetica-Bold";
  }
`;

const ProfileInfo = ({ name, ladderRank }) => {
  const { rank, rankPercentOfTop } = ladderRank;
  const commaRank = numberComma(rank);

  return (
    <InfoWrap>
      <Name>{name}</Name>
      <LadderRank>
        레더 랭킹 <span>{commaRank}</span>위 (상위 {rankPercentOfTop}%)
      </LadderRank>
    </InfoWrap>
  );
};

export default ProfileInfo;
