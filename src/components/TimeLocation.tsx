import React, { useState, useEffect } from "react";
import styled from "styled-components";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import arrow from "../assets/arrow.svg";
import arrow2 from "../assets/arrow2.png";
import Axios from "axios";
export const TimeLocation = (props: any) => {
  const { dark, setDark, state, more, setMore } = props;
  const [dateHours, setDateHours] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDateHours(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });
  const currentTime = (date: any): number | string => {
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const currTime = `:${minutes}`;
    return currTime;
  };

  const today = new Date();
  let hours: number | string = today.getHours();
  hours = hours < 10 || hours == 0 ? `0${hours}` : hours;
  let currHour = `${hours}`;
  return (
    <Container style={more ? { marginTop: 0 } : { marginTop: 120 }}>
      {parseInt(currHour) > 17 || parseInt(currHour) < 6 ? (
        <Evening>
          <Moon src={moon} />
          <span>good evening</span>
          <p> it's currently </p>
        </Evening>
      ) : (
        <Morning>
          <Sun src={sun} />
          <span>good morning</span>
          <p> it's currently </p>
        </Morning>
      )}
      <RealTime>
        {currHour}
        {currentTime(new Date())}
      </RealTime>
      <Wrapper>
        <Location>{state.timezone}</Location>
        <BtnMore onClick={() => setMore(!more)}>
          {more ? <p>less</p> : <p>more</p>}
          <ImgWrapper>
            {more ? <Arrow src={arrow2}></Arrow> : <Arrow src={arrow}></Arrow>}
          </ImgWrapper>
        </BtnMore>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  align-content: flex-end;
  margin: auto;
`;
const Morning = styled.div`
  display: flex;
  align-items: baseline;
  span {
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 3px;
    margin-left: 16px;
  }
  p {
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 3px;
    margin-left: 16px;
    display: none;
    @media only screen and (min-width: 650px) {
      display: flex;
    }
  }
`;
const Evening = styled.div`
  display: flex;
  align-items: baseline;

  span {
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 3px;
    margin-left: 16px;
    @media only screen and (min-width: 575px) {
      font-size: 18px;
    }
    @media only screen and (min-width: 1100px) {
      font-size: 20px;
    }
  }
  p {
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 3px;
    margin-left: 16px;
    display: none;
    @media only screen and (min-width: 650px) {
      display: flex;
    }
    @media only screen and (min-width: 1100px) {
      display: flex;
      font-size: 20px;
    }
  }
`;
const Sun = styled.img`
  width: 23px;
  height: 23px;
`;
const Moon = styled.img`
  width: 23px;
  height: 23px;
`;
const RealTime = styled.div`
  font-weight: 700;
  font-size: 100px;
  color: #ffffff;
  margin-top: 16px;
  @media only screen and (min-width: 600px) {
    font-size: 175px;
  }
  @media only screen and (min-width: 1100px) {
    font-size: 200px;
  }
`;
const Location = styled.div`
  line-height: 28px;
  font-size: 15px;
  letter-spacing: 3px;
  font-weight: 700;
  color: #ffffff;
  margin-top: 16px;
  @media only screen and (min-width: 475px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 1100px) {
    font-size: 24px;
  }
`;
const Wrapper = styled.div`
  @media only screen and (min-width: 1100px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;
const BtnMore = styled.div`
  margin-top: 48px;
  width: 115px;
  height: 39px;
  background-color: #ffffff;
  border-radius: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 4px 4px 17px;
  z-index: 1;
  @media only screen and (min-width: 475px) {
    width: 146px;
    height: 56px;
    padding: 3px 8px 4px 17px;
  }
  @media only screen and (min-width: 1100px) {
    font-size: 24px;
  }
  p {
    color: #000000;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 3.5px;
    font-weight: 700;
    opacity: 50%;
    @media only screen and (min-width: 475px) {
      font-size: 16px;
    }
  }
`;
const ImgWrapper = styled.div`
  background-color: #303030;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: all 0.5s linear;
  &:hover {
    background-color: #999999;
  }
  @media only screen and (min-width: 475px) {
    width: 40px;
    height: 40px;
  }
`;
const Arrow = styled.img``;
