import React from "react";
import { SiLichess } from "react-icons/si";
import { RiSwordLine } from "react-icons/ri";
import { FaCoins } from "react-icons/fa";

const StepsToPlay = () => {
  const stepsToPlay = [
    {
      number: 1,
      icon: <SiLichess className="h-10 w-auto text-golden" />,
      title: "Login",
      description:
        "With your lichess account to sync your rankings and earnings",
    },
    {
      number: 2,
      icon: <RiSwordLine className="h-10 w-auto text-golden" />,
      title: "Challenge",
      description:
        "your favourite player or friends or simply create an open challenge",
    },
    {
      number: 3,
      icon: <FaCoins className="h-10 w-auto text-golden" />,
      title: "Earn",
      description: "coins and use them for future matches",
    },
  ];
  return (
    <section className="flex flex-col items-center gap-20 py-20">
      <h3 className="text-2xl font-bold text-white">How Does it Work</h3>
      <ul className="flex justify-center gap-16 w-full m-auto">
        {stepsToPlay.map((step, i) => {
          return (
            <li
              key={i}
              className="flex bg-golden bg-opacity-20 w-1/4 rounded-2xl p-12 relative"
            >
              <span className="text-golden opacity-40 absolute left-4 -top-11 text-6xl font-extrabold">
                {step.number}
              </span>
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-2">
                  {step.icon}
                  <p className="text-white text-3xl font-bold">{step.title}</p>
                </div>
                <p className="text-white text-sm text-center">
                  {step.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default StepsToPlay;
