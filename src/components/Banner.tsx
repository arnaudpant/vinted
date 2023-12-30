import React from "react";
import bannerImage from "../assets/banner-wide.jpg";
import tear from "../assets/tear.svg";

const Banner = () => {
  return (
    <section id="banner" className="">
      <img
        src={bannerImage}
        alt="bannière"
        className=" object-cover w-full h-96"
      />
      <CallToAction />
      <img src={tear} alt="tear" />
    </section>
  );
};

const CallToAction = () => {
  return (
    <div className="flex flex-col justify-between content-end rounded-sm bg-white w-80 h-64 p-5 relative top-[-300px] left-48  ">
      <h1 className="text-3xl">
        Prêt à faire <br />
        du tri dans vos <br /> placards ?
      </h1>
      <button className="bg-emerald-800 text-white px-5 py-2 rounded-sm  ">
        Vends maintenant
      </button>

      <a
        href="https://google.fr"
        className="block underline decoration-2 text-green-700 text-xs"
      >
        Découvrir comment ça marche
      </a>
    </div>
  );
};

export default Banner;
