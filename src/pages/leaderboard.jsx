import React, { useState, useEffect } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [leaders, setLeader] = useState([]);
  async function getUsers() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setLeader(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="flex items-center justify-center">
      <ul className="flex flex-col gap-8 justify-center bg-gray-500 bg-opacity-20 p-12 rounded-2xl my-20 w-1/2">
        <h2 className="text-4xl text-golden font-semibold text-center mb-6">
          Leaderboard
        </h2>
        {leaders.map((leader) => {
          return (
            <li key={leader.id} className="flex gap-20 justify-between">
              <p className="text-golden text-xl text-opacity-70 w-1/2">
                {leader.name}
              </p>
              <p className="text-white w-1/2 text-right">@{leader.username}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Leaderboard;
