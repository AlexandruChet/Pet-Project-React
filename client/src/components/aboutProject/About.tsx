import React, { useState, type JSX } from "react";
import "./About.scss";

const About: React.FC = (): JSX.Element => {
  const [showProjects, setShowProjects] = useState<boolean>(false);

  const toggleProjects = (): void => {
    setShowProjects(prev => !prev);
  };

  return (
    <section className="about">
      <div className="about__container">
        <h1 className="about__title">About This Projects</h1>
        <p className="about__text">
          This is a small showcase of my pet projects. I created these projects
          to improve my skills in React, TypeScript, and front-end development
          in general. Each project explores different concepts and
          functionalities to help me grow as a developer.
        </p>

        <button className="about__button" onClick={toggleProjects}>
          {showProjects ? "Hide Projects" : "Show Projects"}
        </button>

        {showProjects && (
          <ul className="about__list">
            <li className="about__item">
              <strong>Watch App:</strong> A real-time clock with timezone support
              and holiday notifications.
            </li>
            <li className="about__item">
              <strong>Nutrition Tracker:</strong> Track meals, calories, and
              personal fitness goals.
            </li>
            <li className="about__item">
              <strong>Todo App:</strong> Manage tasks with React, localStorage
              support and filters.
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default About;
