import LandingPage from "./pages/landingPage";
import Leaderboard from "./pages/leaderboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}

export default App;
