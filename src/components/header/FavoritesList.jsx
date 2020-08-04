import React from "react";
import styled from "styled-components";
import { LOCAL_STORAGE_KEY } from "@constants/constant";
import { TiStar } from "react-icons/ti";
import { RiCloseLine } from "react-icons/ri";
import { RiInformationLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { getSummonerData } from "@modules/summoner";

const NoFavorites = styled.div`
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
  text-align: center;
  padding: 15px 20px;
  .icon {
    font-size: 20px;
    margin-bottom: 10px;
    color: #bdc3c7;
  }
  .star {
    font-size: 16px;
    color: #bdc3c7;
    vertical-align: middle;
  }
  p {
    line-height: 18px;
  }
`;

const FavoritesList = () => {
  const dispatch = useDispatch();
  const favorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.FAVORITES));

  if (!favorites)
    return (
      <NoFavorites>
        <RiInformationLine className="icon" />
        <p>
          관심있는 소환사에 <TiStar className="star" />
          즐겨찾기를 하여 편리하게 정보를 받아보세요.
        </p>
      </NoFavorites>
    );

  return <div>gdgd</div>;
};

export default FavoritesList;
