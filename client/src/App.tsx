import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChangePage from "./components/changePage/Change";
import Time from "./pages/Time";
import About from "./components/aboutProject/About";

const App: React.FC = () => {
  return (
    <Router>
      <ChangePage firstPage="Home" secondPage="Watch" />

      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/watch" element={<Time />} />
      </Routes>
    </Router>
  );
};

export default App;
