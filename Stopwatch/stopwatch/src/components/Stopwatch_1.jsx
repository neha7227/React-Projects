import React, { useState, useEffect, useRef } from "react";
import styles from "../components/Stopwatch.module.css";

function Stopwatch_1() {
  const [isActivated, setIsActivated] = useState(false);
  const [timer, setTimer] = useState(0);
  const timerId = useRef(null);
  // console.log(isActivated, "in stopwatch_1 initially");

  const format = (milisecs) => {
    const hr = Math.floor(milisecs / 3600000);
    const mins = Math.floor(milisecs / 60000);
    const secs = Math.floor(milisecs / 1000);
    milisecs = milisecs % 1000;
    return `${hr}:${mins < 10 ? "0" : ""}${mins}:${
      secs < 10 ? "0" : ""
    }${secs}:${milisecs < 10 ? "00" : ""}${milisecs} `;
    // return `${mins}:${milisecs < 10 ? "0" : ""}${milisecs}`;
    //min:sec
    // hr:min:sec:ms --> 02:59:59:009
  };

  const toggleHandler = () => {
    setIsActivated(!isActivated);
    // console.log(isActivated, "in stopwatch_1");
  };
  const handleReset = () => {
    setIsActivated(false);
    setTimer(0);
  };

  useEffect(() => {
    timerId.current = setInterval(() => {
      if (isActivated) {
        setTimer((preTimer) => preTimer + 1);
      }
    }, 1); // counting every miliseconds

    return () => {
      clearInterval(timerId.current);
    };
  }, [isActivated]);

  return (
    <>
      <div className={styles.container}>
        <h1>Stopwatch_1</h1>
        {/* <p>Time: 0:00</p> */}

        <p> Time: {format(timer)}</p>
        <div>
          <button className={styles.btn} onClick={toggleHandler}>
            {isActivated ? "Stop" : "Start"}
          </button>
          <button className={styles.btn} onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Stopwatch_1;
