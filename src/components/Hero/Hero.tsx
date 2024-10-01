import React from "react";
import HomeLogo from "../HomeLogo/HomeLogo";
import BasicButton from "../BasicButton/BasicButton";
import SocialComponent from "../SocialComponent/SocialComponent";

function Hero() {
  return (
    <section className="w-full h-full">
      <div className="bg-[url('/assets/bg.webp')] w-full h-screen bg-cover bg-[center]">
        <div className="flex w-full h-full bg-darkerwhite">
          <div className=" w-1/4 h-full">
            <HomeLogo/>
          </div>
          <div className="flex flex-col w-2/4 h-full justify-center items-center">
            <div className="w-full h-fit justify-center items-center">
            <h1 className=" h-fit -rotate-6 font-bold text-8xl text-white text-center">
            `o ia poké
            </h1>
            <div className="w-full h-fit text-white text-center mb-2">
              <span>
              Produits de qualité.
              </span>
              <strong> Saveur Hawaïenne</strong>
              </div>
            <div className="w-full h-fit text-white text-center">Tous les jours en livraison ou à emporter</div>
            <div className="flex w-full h-fit justify-center items-center">
           <BasicButton text="Reserver"/>
            </div>
            </div>
          </div>
          <div className="w-1/4 h-full">
          <SocialComponent/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
