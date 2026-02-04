import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Birthday from "./pages/Birthday";
import Faa from "./pages/Faa";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-purple-300 items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/faa" element={<Faa />} />
      </Routes>
    </div>
  );
}
