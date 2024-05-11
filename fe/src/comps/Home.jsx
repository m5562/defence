import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="h-dvh place-items-center grid">
      <div className="flex gap-2 flex-col">
        <button
          className="bg-blue-gem-500 mt-2 px-4 py-2 rounded-md font-bold text-blue-gem-50"
          onClick={() => navigate("/login")}
        >
          Sign in
        </button>
        <button
          className="bg-blue-gem-500 mt-2 px-4 py-2 rounded-md font-bold text-blue-gem-50"
          onClick={() => navigate("/register")}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Home;
