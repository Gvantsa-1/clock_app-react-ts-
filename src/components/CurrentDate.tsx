import React from "react";
import styled from "styled-components";
import moment from "moment";

let now = moment();
export const CurrentDate = (props: any) => {
  const { dark, setDark, state } = props;
  const weekday = ["7", "1", "2", "3", "4", "5", "6"];
  const d = new Date();
  let day = weekday[d.getDay()];
  const today = new Date();
  let hours = today.getHours();
  let currHour = `${hours}`;
  return (
    <Container
      style={
        hours > 17 || hours < 6
          ? { backgroundColor: "#000000BF" }
          : { backgroundColor: "#d8d8d8" }
      }
    >
      <Main
        style={
          hours > 17 || hours < 6
            ? { color: "#d8d8d8" }
            : { color: "#000000BF" }
        }
      >
        <Wrapper>
          <div>
            <Timezone>CURRENT TIMEZONE</Timezone>
            <Location>{state.timezone}</Location>
          </div>
          <div>
            <DayYear>Day of the year</DayYear>
            <YearDay> {now.dayOfYear()}</YearDay>
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <DayWeek>Day of the week</DayWeek>
            <WeekDay> {weekday[d.getDay()]}</WeekDay>
          </div>
          <div>
            <NumberWeek>Week number</NumberWeek>
            <WeekNumber>{now.week()}</WeekNumber>
          </div>
        </Wrapper>
      </Main>
    </Container>
  );
};
const Container = styled.div`
  height: 215px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  position: absolute;
  left: 0px;
  bottom: 0px;
  opacity: 0.95;
  padding: 48px 26px;

  @media only screen and (min-width: 600px) {
    height: 400px;
    margin-top: 30px;
    padding: 119px 64px;
    padding-bottom: 10%;
  }
  @media only screen and (min-width: 875px) {
    height: 400px;
  }
  @media only screen and (min-width: 1200px) {
    height: 400px;
  }
  @media only screen and (min-width: 1300px) {
    height: 440px;
  }
`;
const Wrapper = styled.div`
  display: block;
  flex-direction: column;
  @media only screen and (min-width: 600px) {
    width: 100vw;
    margin-right: 50px;
  }
`;
const Timezone = styled.h3`
  margin-bottom: 16px;
  @media only screen and (min-width: 600px) {
    margin-bottom: 0;
  }
`;
const DayYear = styled.h3`
  margin-bottom: 16px;
  @media only screen and (min-width: 600px) {
    margin-bottom: 0;
  }
`;
const DayWeek = styled.h3`
  margin-bottom: 16px;
  @media only screen and (min-width: 600px) {
    margin-bottom: 0;
  }
`;
const NumberWeek = styled.h3`
  margin-bottom: 16px;
  @media only screen and (min-width: 600px) {
    margin-bottom: 0;
  }
`;

const Location = styled.h2``;
const YearDay = styled.h2``;
const WeekDay = styled.h2``;
const WeekNumber = styled.h2``;

const Main = styled.div`
  display: block;
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 95%;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 100%;
    @media only screen and (min-width: 600px) {
      height: 80px;
      display: block;
      margin-bottom: 49px;
    }
  }

  h3 {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 2px;
    font-size: 10px;

    @media only screen and (min-width: 600px) {
      font-size: 13px;
      line-height: 28px;
    }
  }
  h2 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    @media only screen and (min-width: 600px) {
      font-size: 40px;
      line-height: 48px;
    }
  }
`;
