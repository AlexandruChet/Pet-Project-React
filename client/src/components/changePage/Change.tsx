import { Link } from "react-router-dom";
import "./Change.scss";

interface PropsPages {
  firstPage: string;
  secondPage: string;
  thirdPage: string,
}

const ChangePage: React.FC<PropsPages> = ({ firstPage, secondPage, thirdPage }) => {
  return (
    <main className="change-page">
      <nav className="change-page__nav">
        <ul className="change-page__list">
          <li className="change-page__item">
            <Link to="/" className="change-page__link change-page__link--home">
              {firstPage}
            </Link>
            <Link
              to="/watch"
              className="change-page__link change-page__link--watch"
            >
              {secondPage}
            </Link>
            <Link
              to="/react-tsx"
              className="change-page__link change-page__link--react"
            >
              {thirdPage}
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default ChangePage;
