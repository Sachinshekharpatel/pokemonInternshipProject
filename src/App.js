import React from "react";
import "./App.css";
import Pokemon from "./components/search/search";

function App() {
  return (
    <>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="text-xl font-medium text-black">Search your favorite pokemon from below</div>
      </div>
      <Pokemon/>
    </>
  );
}

export default App;
