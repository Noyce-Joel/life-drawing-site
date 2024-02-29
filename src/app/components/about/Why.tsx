
import Image from "next/image";
import React from "react";

import Ball from "../loading/Ball";
import Line from "../line/Line";

export default function Sessions() {
  return (
    <article className="flex flex-col pt-24 md:pt-32 relative border-b border-gray-900 pb-24 md:pb-32 justify-end items-end h-auto font-extrabold text-[40px] ">
      <div className="flex w-3/4 md:w-4/5 relative flex-col font-bold text-[45px] md:text-[70px] mb-6 text-white">
        WHY US?
         <Line title={false} />
      </div>
      <div className="flex relative md:w-4/5 pt-12 ">
        <div className=" md:justify-start md:items-start justify-center items-center flex flex-col ">
          <div className="flex flex-col items-start justify-start w-4/5 pb-12 lg:pb-24 ">
          <b className=" text-justify text-white w-4/5 md:w-full lg:w-4/5 font-semibold sm-heading text-[50px]">
              CREATIVITY UNLEASHED
            </b>
            <p className="sm-text md-text lg-text text-justify w-full lg:pt-5">
              Break free from conventional art and let your creativity run wild
              as you sketch the canine form in all its charming glory.
            </p>
            
          </div>
          <div className="flex flex-col w-4/5 justify-start items-start md:justify-start relative md:items-start md:pt-4  md:-ml-24 pb-12 lg:pb-0 ">
            <Image
              src="/Dog-model.jpg"
              height={700}
              width={700}
              alt="hero-image"
              className="rounded-[10px] md:flex hidden absolute -z-40 md:-right-44 lg:-right-60 lg:-bottom-56 "
            />
            {/* <b className="text-justify text-white  md:w-3/5 text-[32px] md:text-[55px]">
              FUN FOR ALL AGES
            </b> */}
            <p className="sm-text md-text lg-text text-white text-justify md:w-full lg:w-4/5 w-full">
              Whether you&#39;re a seasoned artist or just picking up a pencil
              for the first time, our sessions are designed to be inclusive and
              enjoyable for everyone.
            </p>
          </div>
          <div className="absolute -bottom-44 invert opacity-25 md:-left-96 right-0  w-full">
          <Ball />
      </div>
          <div className="flex flex-col items-start   h-full relative justify-start md:w-4/5 w-4/5 lg:pt-32 ">
            
            <b className=" text-justify text-white w-4/5 md:w-full font-semibold lg:w-3/5 sm-heading text-[50px] ">
              STRESS-FREE ENVIRONMENT
            </b>
            <p className=" text-justify sm-text md-text lg-text w-full lg:pt-5 lg:pb-0 pb-12">
              Our furry models create a relaxed and friendly atmosphere, making
              the drawing process not only artistic but also therapeutic.
            </p>
          </div>

          <div className="flex flex-col w-4/5 md:w-11/12 justify-start items-start md:justify-end relative md:items-center pt-6 md:pt-24">
            <b className="  text-white  md:w-9/12 sm-heading text-[50px] font-semibold ">
              UNIQUE BONDING EXPERIENCE
            </b>
            <p className=" sm-text md-text lg-text text-justify md:w-9/12 w-full lg:pt-5">
              Share the joy of art with fellow dog enthusiasts, creating a sense
              of community and camaraderie around the love for our canine
              companions.
            </p>
          </div>
        </div>
      </div>
      
    </article>
  );
}
