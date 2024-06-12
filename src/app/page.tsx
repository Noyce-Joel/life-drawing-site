"use client";
import Events from "./components/events/Events";
import Nav from "./components/nav/Nav";
import { AnimatePresence, motion } from "framer-motion";
import Models from "./components/about/Models";
import Why from "./components/about/Why";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import { Suspense, useEffect, useState } from "react";
import fetchImages from "./services/fetchImages";
import Head from "next/head";
import ContactSection from "./components/contact/ContactSection";
import Title from "./components/hero/Title";
import Image from "next/image";

export default function Home() {
  const [results, setResults] = useState<any>({ resources: [] });

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchImages();
      setResults(res);
    };
    fetch();
  }, []);
  return (
    <>
      <Head>
        <title>Dog Life Drawing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/faviconLogo.png" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="40x40"
          href="/images/faviconLogo.png"
        />
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative h-screen w-full overflow-y-scroll overflow-x-hidden"
          >
            <Nav
              color="text-[#000000]"
              hoverColor="text-[#DA7835]"
              socials="#000000"
              socialsHover="#DA7835"
            />
            <Title
              image="/DogLow.jpg"
              image2="/HERO.jpg"
              tileColor="#DA7835"
              title={["DOG", "LIFE", "DRAWING"]}
              slogan="Where art meets canine charm"
            />
            <Events comp={true} />
            <Why />
            <Models />

            <Gallery results={results} />
            <ContactSection />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </Suspense>
    </>
  );
}
