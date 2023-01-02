import React, { useState, useEffect } from "react";
import styled from "styled-components";
import refresh from "../assets/refresh.svg";
import Axios from "axios";

export const Quotes = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    Axios.get("https://api.quotable.io/random").then((res) =>
      setData(res.data)
    );
  }, []);

  const handleQuote = () => {
    Axios.get("https://api.quotable.io/random").then((res) =>
      setData(res.data)
    );
  };

  console.log(data);

  return (
    <Container>
      <Quote>
        <Text>{data?.content}</Text>
        <Author>{data?.author}</Author>
      </Quote>
      <Rotate onClick={handleQuote} src={refresh} />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Quote = styled.div``;
const Text = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: #ffffff;
  @media only screen and (min-width: 475px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
const Author = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 8px;
  @media only screen and (min-width: 375px) {
    font-size: 18px;
    line-height: 28px;
    margin-top: 13;
  }
`;
const Rotate = styled.img`
  width: 17px;
  height: 17px;
  margin-left: 10px;
  cursor: pointer;
`;
