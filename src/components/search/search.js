import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";
const Pokemon = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      axios.get(`https://pokeapi.co/api/v2/pokemon`).then((res) => {
        setData(res.data.results);
        console.log(res.data.results);
      });
    } catch (error) {}
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const searchHandler = () => {
    console.log(search);
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setData(filtered);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-3 mt-3">Search Pokemon</h1>
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Enter Pokemon name"
        />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={searchHandler}
        >
          Search
        </button>
      </div>
      <div className="mt-3 mb-3">
        {data.length > 0 ? (
          data.map((item) => (
            <div className="flex items-center mb-4 border p-2" key={item.name}>
              <img className="mr-2 w-16 h-16" src={item.image} />
              <p className="capitalize">{item.name}</p>
            </div>
          ))
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
