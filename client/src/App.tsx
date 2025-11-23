import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChangePage from "./components/changePage/Change";
import Time from "./pages/Time";
import About from "./components/aboutProject/About";
import ReactSections from "./pages/React-Sec";

const App: React.FC = () => {
  return (
    <Router>
      <ChangePage firstPage="Home" secondPage="Watch" thirdPage="React JSX Components" />

      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/watch" element={<Time />} />
        <Route path="/react-tsx" element={<ReactSections />} />
      </Routes>
    </Router>
  );
};

export default App;
