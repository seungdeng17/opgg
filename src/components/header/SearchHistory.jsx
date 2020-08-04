import React from "react";
import { LOCAL_STORAGE_KEY } from "@constants/constant";

const SearchHistory = () => {
  const searchHistory = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.SEARCH_HISTORY));

  return <div>SearchHistory</div>;
};

export default SearchHistory;
