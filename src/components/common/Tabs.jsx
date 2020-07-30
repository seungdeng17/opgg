import React, { useState } from "react";

const Tabs = ({ children, TabButtonWrap, TabButton }) => {
  const [selected, setSelected] = useState(0);
  const tabs = children.map((c, i) => {
    return (
      <TabButton key={i} selected={i === selected} onClick={() => setSelected(i)}>
        {c.props.title}
      </TabButton>
    );
  });

  return (
    <>
      <TabButtonWrap>{tabs}</TabButtonWrap>
      {children[selected]}
    </>
  );
};

export default Tabs;
