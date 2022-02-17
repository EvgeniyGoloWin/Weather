import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearWeather } from "../weatherSlice/weatherSlice";
import "../style/Weather.css";
import "../style/changeBtn.css";
import DayWeather from "../DayWeather/DayWeather";
import { fetchWeather } from "../../../api/fetch";

function Weather() {
  const state = useSelector((state) => state.weather.data);

  const dispatch = useDispatch();

  /*   useEffect(() => {
        dispatch(fetchWeather());

    }, [])*/

  const clearState = () => {
    dispatch(clearWeather());
  };
  const showState = () => {
    dispatch(fetchWeather());
  };

  return (
    <div className="KievWeather">
      {state.length !== 0 && (
        <>
          <h1 className="MainText">
            <em>{state.city.name}</em>
          </h1>
          <div className="day__blocks">
            {state.list.map((item, index) => {
              return (
                <div key={index} className="day__blocks">
                  <DayWeather
                    temp={item.main.temp}
                    icon={item.weather[0].icon}
                    desc={item.weather[0].description}
                    newDate={item.dt_txt}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
      <div className="changeBtn">
        {" "}
        <button className="btnHide" onClick={clearState}>
          Hide
        </button>
        <button className="btnShow" onClick={showState}>
          Show
        </button>
      </div>
    </div>
  );
}

export default Weather;
