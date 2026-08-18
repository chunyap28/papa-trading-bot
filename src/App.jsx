import { Routes, Route, Navigate } from "react-router-dom";
import BuildYourFirstTradingBot from "./pages/BuildYourFirstTradingBot.jsx";

export default function App() {
  return (
    <Routes>
      {/* No separate landing page yet — send visitors straight into the setup guide. */}
      <Route path="/" element={<Navigate to="/BuildYourFirstTradingBot" replace />} />
      <Route path="/BuildYourFirstTradingBot" element={<BuildYourFirstTradingBot />} />
      <Route path="*" element={<Navigate to="/BuildYourFirstTradingBot" replace />} />
    </Routes>
  );
}
