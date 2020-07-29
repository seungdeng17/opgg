import React, { memo } from "react";
import styled from "styled-components";

const PreviousTiersWrap = styled.div`
  margin-left: 11px;
  margin-bottom: 6px;
  height: 20px;
  display: flex;
`;

const PreviousTier = styled.div`
  padding: 4px 5px 3px 5px;
  font-family: "Helvetica";
  font-size: 11px;
  letter-spacing: -0.42px;
  margin-right: 7px;
  color: #657070;
  background-color: #e0e3e3;
  border: 1px solid #d0d3d4;
  border-radius: 2px;

  span {
    font-family: "Helvetica-Bold";
  }

  :last-child {
    margin-right: 0;
  }
`;

const PreviousTiers = ({ previousTiers }) => {
  const previoutTiersList = previousTiers.reverse().map(({ season, shortString, tier }) => (
    <PreviousTier key={season} data-tier={shortString}>
      S<span>{season}</span> {tier}
    </PreviousTier>
  ));

  return <PreviousTiersWrap>{previoutTiersList}</PreviousTiersWrap>;
};

export default memo(PreviousTiers);
