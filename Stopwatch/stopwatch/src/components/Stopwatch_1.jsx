import React, { useState, useEffect, useRef } from "react";
import styles from "../components/Stopwatch.module.css";

function Stopwatch_1() {
  const [isActivated, setIsActivated] = useState(false);
  const [timer, setTimer] = useState(0);
  const timerId = useRef(null);
  // console.log(isActivated, "in stopwatch_1 initially");

  const format = (time) => {
    const mins = Math.floor(time / 60);
    time = time % 60;
    return `${mins}:${time < 10 ? "0" : ""}${time}`;
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
    }, 1000);

    return () => {
      clearInterval(timerId.current);
    };
  }, [isActivated, timer]);

  // useEffect(() => {
  //   let intervalId;
  //   if (isActivated) {
  //     intervalId = setInterval(() => {
  //       setTimer((prevTimer) => prevTimer + 1);
  //     }, 1000);
  //   } else clearInterval(intervalId);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [isActivated]);

  return (
    <>
      <div className={styles.container}>
        <h1>Stopwatch_1</h1>
        {/* <p>Time: 0:00</p> */}
        <p>Time: {format(timer)}</p>

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
