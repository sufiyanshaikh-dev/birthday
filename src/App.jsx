import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Birthday from "./pages/Birthday";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-purple-300 flex items-center justify-center p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday" element={<Birthday />} />
      </Routes>
    </div>
  );
}
