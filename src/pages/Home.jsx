import Letter from "../components/Letter";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center p-4 pt-32">
    <div className="max-w-xl text-center bg-white p-8 rounded-3xl shadow-lg animate-fade-in">
      <Letter />
      <Link to="/birthday" className="mt-6 inline-block px-6 py-3 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition">Click Here</Link>
    </div>
  </div>
  );
}
