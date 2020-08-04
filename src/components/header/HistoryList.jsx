import React from "react";
import styled from "styled-components";
import { LOCAL_STORAGE_KEY } from "@constants/constant";
import { TiStar } from "react-icons/ti";
import { RiCloseLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { getSummonerData } from "@modules/summoner";

const HistoryItemWrap = styled.li`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

const NameText = styled.span`
  width: 160px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  color: #666;
  line-height: 18px;
  cursor: pointer;
`;

const Icons = styled.span`
  line-height: 18px;
  vertical-align: middle;
  .star,
  .delete {
    cursor: pointer;
    font-size: 18px;
    color: #bdc3c7;
  }
  .star {
    margin-right: 8px;
    color: ${({ color }) => (color ? color : "#bdc3c7")};
  }
`;

const HistoryList = ({ setFocus }) => {
  const dispatch = useDispatch();
  const searchHistory = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.SEARCH_HISTORY));

  const handleClickPlayerName = ({ target }) => {
    window.scrollTo(0, 0);
    setFocus(false);
    dispatch(getSummonerData(target.dataset.name));
  };

  const historyList = searchHistory.map((data) => (
    <HistoryItemWrap key={data.name}>
      <NameText onClick={handleClickPlayerName} data-name={data.name}>
        {data.name}
      </NameText>
      <Icons>
        <TiStar className="star" />
        <RiCloseLine className="delete" />
      </Icons>
    </HistoryItemWrap>
  ));

  return <ul>{historyList}</ul>;
};

export default HistoryList;
