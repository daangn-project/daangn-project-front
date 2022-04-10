import React, { useRef, useEffect } from "react";
import styled, { css } from "styled-components";
export const MoreBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  ${(props) =>
    props.loading &&
    css`
      display: block;
      margin-top: 10px;
      text-align: center;
      line-height: 28px;
      border-top: solid 1px #000;
      border-bottom: solid 1px #000;
      background-color: #ff9;
    `}
`;

const FetchMore = ({ loading, setPage }) => {
  const fetchMoreTrigger = useRef(null);
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) setPage((prev) => prev + 1);
  });

  useEffect(() => {
    let observerRefValue = null;
    fetchMoreObserver.observe(fetchMoreTrigger.current);
    observerRefValue = fetchMoreTrigger.current;
    return () => {
      if (observerRefValue) fetchMoreObserver.unobserve(observerRefValue);
    };
  }, []);

  return <MoreBox loading={loading.toString()} ref={fetchMoreTrigger} />;
};

export default FetchMore;
