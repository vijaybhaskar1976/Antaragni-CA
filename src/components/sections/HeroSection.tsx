import { EditorialHeading } from "../ui/EditorialHeading";
import { EditorialSubheading } from "../ui/EditorialSubheading";
import { VerticalLabel } from "../ui/VerticalLabel";
import { StatisticBlock } from "../ui/StatisticBlock";
import { GridContainer } from "../layout/GridContainer";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col pt-12 md:pt-20 pb-20 overflow-hidden">
      {/* Background Volumetric Spotlight Placeholder */}
      <div className="absolute top-[40%] right-[20%] w-[800px] h-[800px] bg-white opacity-[0.05] blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
      
      <GridContainer className="flex-grow relative z-10 items-center">
        {/* Left Side: Typography */}
        <div className="col-span-1 md:col-span-5 lg:col-span-7 flex flex-col justify-center">
          <EditorialHeading variant="hero" as="h1" className="mb-2 text-foreground">
            ANTARAGNI
          </EditorialHeading>
          
          <EditorialSubheading className="mb-10 text-foreground">
            CAMPUS<br/>AMBASSADOR<br/>PROGRAM
          </EditorialSubheading>

          <div className="flex flex-col gap-1.5 mt-8 md:mt-12 text-[12px] font-sans font-semibold tracking-[0.2em] uppercase">
            <p className="text-muted">LEAD CULTURE.</p>
            <p className="text-muted">CREATE IMPACT.</p>
            <p className="text-accent">BEYOND LIMITS.</p>
          </div>
        </div>

        {/* Right Side: Stats */}
        <div className="col-span-1 md:col-span-3 lg:col-span-4 flex flex-col justify-center relative mt-16 md:mt-0">
          
          {/* Silhouette Image Placeholder 
              Note: Since we are not doing advanced images yet, we just add a placeholder block 
              or leave it empty since the spotlight handles the atmospheric depth.
          */}
          <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none -z-10 -ml-20">
            <div className="w-[200px] h-[600px] bg-black rounded-t-[100px]" style={{ boxShadow: "0 -20px 100px rgba(255,255,255,0.1)" }}></div>
          </div>

          {/* Statistics Block */}
          <div className="flex flex-col gap-16 items-end text-right z-10 relative">
            <StatisticBlock 
              value="60" 
              label={"YEARS\nOF LEGACY"} 
              className="items-end text-right"
            />
            <StatisticBlock 
              value="150" 
              suffix="K+"
              label={"ATTENDEES"} 
              className="items-end text-right"
            />
            <StatisticBlock 
              value="400" 
              suffix="+"
              label={"COLLEGES"} 
              className="items-end text-right"
            />
          </div>
        </div>

        {/* Right Edge: Vertical Labels */}
        <div className="hidden lg:flex lg:col-span-1 flex-col items-end justify-between h-full py-10">
          <div className="relative h-full flex flex-col items-center justify-between">
            {/* Top vertical label with line */}
            <div className="flex flex-col items-center gap-4">
              <VerticalLabel label="ANTARAGNI '26" color="red" />
              <div className="w-[1px] h-32 bg-accent opacity-50" />
            </div>

            {/* Bottom vertical label */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-[1px] h-32 bg-accent opacity-50" />
              <VerticalLabel label="IIT KANPUR" color="red" />
            </div>
          </div>
        </div>

      </GridContainer>
    </section>
  );
}
