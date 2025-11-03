import React, { useState, useRef, useEffect, type JSX } from "react";
import Btn from "../ui/buttons/Btn";
import "./StopWatch.scss";

const StopWatch: React.FC = (): JSX.Element => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimeFunc = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
  };

  const stopTimeFunc = () => {
    if (isRunning) {
      setIsRunning(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  };

  const resetTimeFunc = () => {
    setIsRunning(false);
    setTime(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const seconds = Math.floor(time / 1000);
  const milliseconds = (time % 1000).toString().padStart(3, "0");

  return (
    <section className="stopwatch">
      <div className="stopwatch__container">
        <h1 className="stopwatch__display">
          {isRunning
            ? `⏱ Time: ${seconds}.${milliseconds} seconds`
            : `🛑 Stopwatch stopped at ${seconds}.${milliseconds} seconds.`}
        </h1>

        <div className="stopwatch__buttons">
          <Btn
            text="Start"
            className="stopwatch__btn stopwatch__btn--start"
            onClick={startTimeFunc}
          />
          <Btn
            text="Stop"
            className="stopwatch__btn stopwatch__btn--stop"
            onClick={stopTimeFunc}
          />
          <Btn
            text="Reset"
            className="stopwatch__btn stopwatch__btn--reset"
            onClick={resetTimeFunc}
          />
        </div>
      </div>
    </section>
  );
};

export default StopWatch;
