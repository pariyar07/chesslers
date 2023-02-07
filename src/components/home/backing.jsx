import React from "react";
import CompanyOne from "../../assets/mesh.webp";
import CompanyTwo from "../../assets/tachyon.webp";
import CompanyThree from "../../assets/protocol_labs.webp";

const Backing = () => {
  return (
    <section className="flex flex-col gap-10 items-center text-white py-20">
      <h4 className="text-2xl font-bold">Backed By the Giants</h4>
      <p className="text-lg text-center">
        They are not just the backers, but believers of what we do, and how we
        aim to change the ecosystem and become the part of the change.
      </p>
      <div className="flex items-center justify-center gap-6 w-3/4">
        <img src={CompanyOne} alt="Company One" className="w-auto h-20" />
        <img src={CompanyTwo} alt="Company Two" className="w-auto h-20" />
        <img src={CompanyThree} alt="Company Three" className="w-auto h-20" />
      </div>
    </section>
  );
};

export default Backing;
