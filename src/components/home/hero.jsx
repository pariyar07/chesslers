import React from "react";
import ChessBoard from "../../assets/image.webp";
import Knight from "../../assets/Knight.png";
import Queen from "../../assets/queen.png";
import Pawn from "../../assets/pawn.png";

const Hero = () => {
  return (
    <main className="flex items-center justify-center m-auto py-40">
      <div className="flex flex-col gap-6 text-white text-3xl md:text-6xl font-extrabold">
        <h1>
          Play
          <br />
          Chess.
        </h1>
        <h1>
          Get
          <br />
          Paid.
        </h1>
        <p className="text-base font-normal">
          Join now to get $5 and get started
        </p>
      </div>
      <div className="relative w-2/5">
        <img
          src={ChessBoard}
          alt="Chess board"
          className="absolute -bottom-48 -right-20"
        />
        <img
          src={Knight}
          alt="Knight"
          className="absolute w-1/3 bottom-0 right-36 transform hover:rotate-12 duration-100 ease-in"
        />
        <img
          src={Queen}
          alt="Queen"
          className="absolute w-1/3 -top-20 left-40 transform hover:-rotate-12 duration-100 ease-in"
        />
        <img
          src={Pawn}
          alt="Pawn"
          className="absolute w-1/3 -bottom-20 right-0 transform hover:-rotate-12 duration-100 ease-in"
        />
      </div>
    </main>
  );
};

export default Hero;
