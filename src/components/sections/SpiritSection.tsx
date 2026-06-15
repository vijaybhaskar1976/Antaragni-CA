"use client";

import { motion } from "framer-motion";
import { EditorialHeading } from "../ui/EditorialHeading";
import { BodyText } from "../ui/BodyText";
import { MetadataLabel } from "../ui/MetadataLabel";
import { StatisticBlock } from "../ui/StatisticBlock";
import { GridContainer } from "../layout/GridContainer";
import { fadeUp, staggerContainer, revealMaskBottom, scrollReveal, EASING } from "@/lib/animations";

export function SpiritSection() {
  return (
    <section className="relative w-full flex flex-col py-24 md:py-32 overflow-hidden border-t border-white/5">
      <GridContainer className="items-start">
        
        {/* Left Side: Typography & Legacy Copy */}
        <motion.div 
          className="col-span-1 md:col-span-5 lg:col-span-6 flex flex-col pt-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollReveal}
        >
          <motion.div variants={fadeUp}>
            <EditorialHeading variant="section" className="mb-10 text-foreground">
              SPIRIT OF<br/>ANTARAGNI
            </EditorialHeading>
          </motion.div>
          
          <motion.div variants={fadeUp}>
            <BodyText className="mb-12 max-w-[480px]">
              Born in 1965, Antaragni is North India&apos;s largest cultural festival, 
              hosted by IIT Kanpur. Every year, we welcome over 150,000 students 
              from 400+ colleges for a celebration of creativity and talent. 
              Our stages have been graced by global icons like KSHMR, Adnan Sami, 
              and Shankar-Ehsaan-Loy. Join us as we write the next chapter in our legacy.
            </BodyText>
          </motion.div>

          <motion.hr variants={fadeUp} className="w-16 border-t border-accent mb-8" />
          
          <motion.div variants={fadeUp}>
            <MetadataLabel color="red">
              CULTURE. CREATIVITY. CONNECTION.
            </MetadataLabel>
          </motion.div>
        </motion.div>

        {/* Right Side: Hero Image Area Placeholder */}
        <div className="col-span-1 md:col-span-3 lg:col-span-6 relative mt-16 md:mt-0 min-h-[500px] flex items-center justify-center">
          {/* Volumetric Spotlight mimicking the stage lights */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-[0.06] blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
          
          {/* Structure block representing the silhouette */}
          <motion.div 
            className="relative w-full h-full max-h-[600px] bg-black/40 border border-white/5 rounded-sm overflow-hidden flex items-end justify-center pb-0 origin-center"
            variants={revealMaskBottom}
            initial="hidden"
            whileInView="visible"
            viewport={scrollReveal}
            whileHover={{ scale: 1.02 }}
            transition={{ ease: EASING, duration: 1.2 }}
          >
             <div className="w-[180px] h-[300px] bg-black rounded-t-[100px] z-10" style={{ boxShadow: "0 -30px 100px rgba(255,255,255,0.05)" }}></div>
             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/10 font-serif text-[64px] tracking-widest uppercase whitespace-nowrap pointer-events-none select-none">
                ANTARAGNI
             </div>
          </motion.div>
        </div>
      </GridContainer>

      {/* Bottom Row: Statistics */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 mt-32">
        <motion.div 
          className="w-full grid grid-cols-2 md:grid-cols-5 border-t border-b border-white/5 py-12 md:py-16 gap-y-12 relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollReveal}
        >
          
          <motion.div variants={fadeUp} className="col-span-1 border-r border-white/5 flex justify-center">
            <StatisticBlock 
              value="10" 
              suffix="K+"
              label={"VOICES\nUNITED"} 
              valueColor="red"
              labelColor="gray"
              className="items-center text-center"
            />
          </motion.div>
          
          <motion.div variants={fadeUp} className="col-span-1 md:border-r border-white/5 flex justify-center">
            <StatisticBlock 
              value="50" 
              suffix="+"
              label={"COLLEGES\nPARTICIPATING"} 
              valueColor="red"
              labelColor="gray"
              className="items-center text-center"
            />
          </motion.div>
          
          <motion.div variants={fadeUp} className="col-span-1 border-r border-white/5 flex justify-center">
            <StatisticBlock 
              value="3.5" 
              label={"DAYS OF\nTRANSFORMATION"} 
              valueColor="red"
              labelColor="gray"
              className="items-center text-center"
            />
          </motion.div>
          
          <motion.div variants={fadeUp} className="col-span-1 md:border-r border-white/5 flex justify-center">
            <StatisticBlock 
              value="1" 
              label={"LEGACY THAT\nCONTINUES"} 
              valueColor="red"
              labelColor="gray"
              className="items-center text-center"
            />
          </motion.div>
          
          <motion.div variants={fadeUp} className="col-span-2 md:col-span-1 flex justify-center">
            <StatisticBlock 
              value="∞" 
              label={"MEMORIES\nCREATED"} 
              valueColor="red"
              labelColor="gray"
              className="items-center text-center"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
