import React, { useState } from "react";
import useFetch from "@hooks/useFetch";
import { API } from "@constants/url";

const WinRate = ({ summonerData }) => {
  const [mostInfo, setMostInfo] = useState(null);

  const url = API.GET_MOST_INFO(summonerData.name);
  const bLoading = useFetch({ callback: setMostInfo, url, dependency: summonerData });
  if (bLoading) return null;

  return <div></div>;
};

export default WinRate;
