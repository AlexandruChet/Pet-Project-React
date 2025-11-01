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

  let eventDay: string | null = null;

  interface holidaysTypes {
    month: number;
    day: number;
    name: string;
  }

  const holidays: holidaysTypes[] = [
    { month: 1, day: 1, name: "New Year 🎉" },
    { month: 2, day: 14, name: "Valentine's Day ❤️" },
    { month: 3, day: 8, name: "International Women's Day 💐" },
    { month: 4, day: 1, name: "April Fool's Day 🤡" },
    { month: 5, day: 1, name: "Labor Day 🛠️" },
    { month: 6, day: 1, name: "Children's Day 🎈" },
    { month: 7, day: 4, name: "Independence Day 🇺🇸" },
    { month: 10, day: 31, name: "Halloween 🎃" },
    { month: 11, day: 1, name: "All Saints' Day 🕯️" },
    { month: 12, day: 25, name: "Christmas 🎄" },
  ];

  for (const e of holidays) {
    if (date.month === e.month && date.day === e.day) {
      eventDay = e.name;
      break;
    }
  }

  if (!eventDay) eventDay = "No special day 🌞";

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
        <div className="watch__event">
          <h1 className="watch__event-text">{eventDay}</h1>
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
