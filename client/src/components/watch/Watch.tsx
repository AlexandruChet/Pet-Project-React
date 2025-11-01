import React, { useEffect, useState, type JSX } from "react";
import "./Watch.scss";

interface TimeType {
  hours: number;
  minutes: number;
  seconds: number;
}

interface DateType {
  year: number;
  month: number;
  day: number;
}

const Watch: React.FC = (): JSX.Element => {
  const [time, setTime] = useState<TimeType>({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  const [date, setDate] = useState<DateType>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  const timezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect((): (() => void) => {
    const interval = setInterval(() => {
      const now: Date = new Date();
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
      setDate({
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate(),
      });
    }, 1000);

    return (): void => clearInterval(interval);
  }, []);

  return (
    <section className="watch">
      <main className="watch__container">
        <div className="watch__timezone">
          <h1 className="watch__timezone-text">{timezone}</h1>
        </div>
        <div className="watch__date">
          <h1 className="watch__date-text">
            {date.year} : {date.month.toString().padStart(2, "0")} :{" "}
            {date.day.toString().padStart(2, "0")}
          </h1>
        </div>
        <div className="watch__time">
          <h1 className="watch__time-text">
            {time.hours.toString().padStart(2, "0")} :{" "}
            {time.minutes.toString().padStart(2, "0")} :{" "}
            {time.seconds.toString().padStart(2, "0")}
          </h1>
        </div>
      </main>
    </section>
  );
};

export default Watch;
