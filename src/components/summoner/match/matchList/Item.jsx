import React, { useState } from "react";
import styled from "styled-components";
import { getItemDescription } from "@utils/util";

import ToolTip from "@components/common/ToolTip";

const ItemWrap = styled.span`
  position: relative;
`;

const ItemImg = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 2px;
`;

const Item = ({ src, alt }) => {
  const [bHover, setHover] = useState(false);
  const [description, setDescription] = useState(null);

  const handleMouseEnter = async () => {
    setHover(true);
    if (description) return;
    const data = await getItemDescription(src);
    setDescription(data);
  };

  const handleMouseLeave = () => setHover(false);

  return (
    <>
      <ItemWrap>
        <ItemImg onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} src={src} alt={alt} />
        {bHover && <ToolTip text={description} />}
      </ItemWrap>
    </>
  );
};

export default Item;
