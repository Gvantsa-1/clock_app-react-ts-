import React, { useState, useEffect } from "react";
import styled from "styled-components";
import mbday from "./assets/mbday.jpg";
import mbnight from "./assets/mbnight.jpg";
import tbday from "./assets/tbday.jpg";
import tbnight from "./assets/tbnight.jpg";
import day from "./assets/bgday.jpg";
import night from "./assets/bgnight.jpg";
import { Quotes } from "./components/Quotes";
import { TimeLocation } from "./components/TimeLocation";
import { CurrentDate } from "./components/CurrentDate";
import Axios from "axios";
type Props = {
  hours: number;
};
function App() {
  const [more, setMore] = useState<boolean>(false);

  const today = new Date();
  let hours = today.getHours();
  let currHour = `${hours}`;

  const [state, setState] = useState({
    timezone: "",
  });

  const getGeoInfo = () => {
    Axios.get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setState({
          ...state,
          timezone: data.timezone,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGeoInfo();
  }, []);

  return (
    <BGcontainer>
      <BGimage hours={hours}>
        {more ? null : <Quotes />}
        <TimeLocation
          more={more}
          setMore={setMore}
          state={state}
          setState={setState}
          getGeoInfo={getGeoInfo}
        />
        {more ? <CurrentDate state={state} /> : null}
      </BGimage>
    </BGcontainer>
  );
}
const BGcontainer = styled.div`
  width: 100vw;
  height: 110vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;
const BGimage = styled.div<Props>`
 
  background-repeat: no-repeat;
  position: absolute;
  width: 100vw;
  height: 110vh;
  background-color: #d8d8d8;
  background-blend-mode: multiply;
  padding: 32px 26px 0 26px;
  overflow: hidden;
  background-position: center;
  background-size: cover;
   background-image: url(${(props) =>
     props.hours > 17 || props.hours < 6 ? mbnight : mbday});
  @media only screen and (min-width: 475px) {
    background-image: url(${(props) =>
      props.hours > 17 || props.hours < 6 ? tbnight : tbday});
    padding: 80px 150px 0 64px;
    background-position: center;
  }
  @media only screen and (min-width: 1250px) {
    background-image: url(${(props) =>
      props.hours > 17 || props.hours < 6 ? night : day});
    padding: 56px 130px 0 165px;
    background-position: center;
  }
  @media only screen and (min-width: 1350px) {
    background-image: url(${(props) =>
      props.hours > 17 || props.hours < 6 ? night : day})
    padding: 56px 430px 0 165px;
    background-position: center;
  }
`;

export default App;
