"use client";

import React from "react";
import Events from "../components/events/Events";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Line from "../components/line/Line";
import Nav from "../components/nav/Nav";
export default function page() {
  const title = ["DOG LIFE", "DRAWING", "EVENTS"];
  const container = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delay: 0.8,
      },
    },
  };

  const item = {
    initial: { y: 450, x: 150, rotate: 25 },
    animate: { y: 0, x: 0, rotate: 0, transition: { duration: 0.7 } },
  };
  return (
    <>
      <Nav />
      <motion.section
        variants={container}
        initial="initial"
        animate="animate"
        className="md:text-[100px] lg:text-[90px] pt-40 z-10  flex overflow-hidden font-extrabold relative justify-start lg:justify-center items-center lg:items-end text-[55px]  flex-col text-white "
      >
        <motion.figure
          initial={{ scale: 0.9, opacity: 0, y: 1500 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              duration: "2",
              mass: "1",
              damping: 34,
            },
          }}
          className="flex absolute w-3/4 h-3/4 rounded-full -z-20"
        >
          <Image
            src="/HERO.jpg"
            height={1000}
            width={1000}
            alt="hero-image"
            className=" object-cover w-4/6  hidden md:flex rounded-bl-[100px] rounded-tr-[100px] rounded-[20px]"
          />
        </motion.figure>
        <Image
          src="/dog3.png"
          height={150}
          width={150}
          alt="brush-strokes"
          className="hidden md:flex invert pl-12 z-50 absolute -bottom-[14px] right-16  "
        />
        {title.map((word, idx) => (
          <motion.h1
            key={idx}
            className="space-y-0 lg:h-[105px] flex w-4/5 overflow-y-hidden z-20 justify-start items-start "
          >
            <motion.span variants={item} key="anim" className="block ">
              {word}
            </motion.span>
          </motion.h1>
        ))}

        <Line title={true} />
      </motion.section>
      <div className="text-left pt-7 md:pt-24 relative h-full z-10 items-center justify-center flex flex-col gap-7 tracking-wider text-pretty font-bold ">
        <div className="flex h-full items-center justify-end w-4/5 ">
       
          <h2 className="text-[25px]  md:text-[40px]  text-left ">
         Click on a city where we hold events
          </h2>
        </div>
      </div>
      <div className="pb-44">
        <Events />
      </div>
      <Footer />
    </>
  );
}
