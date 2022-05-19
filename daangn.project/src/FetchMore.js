import React, { useRef, useEffect } from "react";
import styled, { css } from "styled-components";
export const MoreBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  margin-top: 10px;
  text-align: center;
  line-height: 28px;
  border-top: solid 1px #000;
  border-bottom: solid 1px #000;
  background-color: #ff9;
`;

const FetchMore = ({ items, setCursor }) => {
  const fetchMoreTrigger = useRef(null);
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) {
      setCursor((prev) => items.at(-1).id);
    }
  });

  useEffect(() => {
    let observerRefValue = null;
    fetchMoreObserver.observe(fetchMoreTrigger.current);
    observerRefValue = fetchMoreTrigger.current;
    return () => {
      if (observerRefValue) fetchMoreObserver.unobserve(observerRefValue);
    };
  }, [items]);

  return <MoreBox ref={fetchMoreTrigger} />;
};

export default FetchMore;
