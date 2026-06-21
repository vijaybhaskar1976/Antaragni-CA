"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { EditorialHeading } from "../ui/EditorialHeading";
import { EditorialSubheading } from "../ui/EditorialSubheading";
import { VerticalLabel } from "../ui/VerticalLabel";
import { StatisticBlock } from "../ui/StatisticBlock";
import { GridContainer } from "../layout/GridContainer";
import { fadeUp, fadeIn, staggerContainer, EASING } from "@/lib/animations";
import { assets } from "@/lib/assets";

export function HeroSection() {
  const { scrollY } = useScroll();
  const archY = useTransform(scrollY, [0, 500], [0, 20]);

  return (
    <section id="home" className="relative w-full min-h-[calc(100vh-80px)] flex flex-col pt-12 md:pt-20 pb-20 overflow-hidden">
      <motion.div 
        className="absolute top-[40%] right-[20%] w-[800px] h-[800px] opacity-[0.05] pointer-events-none mix-blend-screen" 
        style={{ y: archY }}
      >
        <Image src={assets.textures.spotlight} alt="spotlight" fill className="object-contain" priority />
      </motion.div>
      
      <GridContainer className="flex-grow relative z-10 items-center">
        <div className="col-span-1 md:col-span-5 lg:col-span-7 flex flex-col justify-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <EditorialHeading variant="hero" as="h1" className="mb-2 text-foreground">
              ANTARAGNI
            </EditorialHeading>
          </motion.div>
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.2 }}
          >
            <EditorialSubheading className="mb-10 text-foreground">
              CAMPUS<br/>AMBASSADOR<br/>PROGRAM
            </EditorialSubheading>
          </motion.div>

          <motion.div 
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-1.5 mt-8 md:mt-12 text-[12px] font-sans font-semibold tracking-[0.2em] uppercase"
          >
            <p className="text-muted">LEAD CULTURE.</p>
            <p className="text-muted">CREATE IMPACT.</p>
            <p className="text-accent">BEYOND LIMITS.</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 md:mt-14"
          >
            <motion.a
              href="https://forms.gle/your-registration-link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow group relative inline-block border border-accent/40 bg-black/20 backdrop-blur-sm px-10 py-4 transition-all duration-500 ease-out hover:border-accent hover:bg-accent/10 active:scale-[0.98]"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <span
                className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(217,35,35,0.15), transparent)' }}
              />
              <span className="relative z-10 text-white text-[11px] tracking-[0.35em] font-medium uppercase transition-all duration-300 group-hover:tracking-[0.42em]">
                Join Us Now
              </span>
            </motion.a>
          </motion.div>
        </div>

        <div className="col-span-1 md:col-span-3 lg:col-span-4 flex flex-col justify-center relative mt-16 md:mt-0">
          <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none -z-10 -ml-20 mt-10">
            <motion.div 
              className="relative w-[460px] h-[920px]" 
              style={{ y: archY }}
            >
              <Image src={assets.hero.silhouette} alt="silhouette" fill className="object-contain" priority />
            </motion.div>
          </div>

          <motion.div 
            className="flex flex-col gap-16 items-end text-right z-10 relative"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <StatisticBlock 
                value="60" 
                label={"YEARS\nOF LEGACY"} 
                className="items-end text-right"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <StatisticBlock 
                value="150" 
                suffix="K+"
                label={"ATTENDEES"} 
                className="items-end text-right"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <StatisticBlock 
                value="400" 
                suffix="+"
                label={"COLLEGES"} 
                className="items-end text-right"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="hidden lg:flex lg:col-span-1 flex-col items-end justify-between h-full py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: EASING }}
        >
          <div className="relative h-full flex flex-col items-center justify-between">
            <div className="flex flex-col items-center gap-4">
              <VerticalLabel label="ANTARAGNI '26" color="red" />
              <div className="w-[1px] h-32 bg-accent opacity-50" />
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-[1px] h-32 bg-accent opacity-50" />
              <VerticalLabel label="IIT KANPUR" color="red" />
            </div>
          </div>
        </motion.div>

      </GridContainer>
    </section>
  );
}