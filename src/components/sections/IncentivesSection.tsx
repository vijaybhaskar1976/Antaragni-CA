import { EditorialHeading } from "../ui/EditorialHeading";
import { cn } from "@/lib/utils";

export function IncentivesSection() {
  return (
    <section className="relative w-full flex flex-col py-24 md:py-32 overflow-hidden border-t border-white/5 bg-[#050505]">
      {/* Top-Down Spotlight Effect */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-white/[0.04] blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      
      {/* Directional Beam Effect mimicking the reference */}
      <div className="absolute top-0 left-[60%] -translate-x-1/2 w-[400px] h-[1200px] bg-gradient-to-b from-white/[0.03] to-transparent rotate-[-15deg] blur-[60px] mix-blend-screen pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        
        {/* Typography Header Block */}
        <div className="flex flex-col items-start mb-24 md:mb-32 relative z-10">
          <EditorialHeading variant="section" className="text-foreground mb-8">
            INCENTIVES
          </EditorialHeading>
          
          <div className="flex flex-col gap-1 text-accent tracking-[0.2em] text-[13px] md:text-[15px] font-medium">
            <span>RECOGNITION.</span>
            <span>EXPERIENCE.</span>
            <span>GROWTH.</span>
            <span>LEGACY.</span>
          </div>
        </div>

        {/* The Exhibition Showcase (Unified Scene) */}
        <div className="relative w-full flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between gap-16 lg:gap-8 pt-10">
          
          {/* 01: Certificate */}
          <div className="flex flex-col items-center">
            {/* Object */}
            <div className="w-[200px] md:w-[240px] h-[280px] md:h-[320px] bg-[#0f0f0f] border border-white/10 rounded-sm shadow-2xl relative z-10 flex items-center justify-center">
               <span className="text-white/5 text-xs font-serif tracking-widest">CERTIFICATE</span>
            </div>
            {/* Pedestal */}
            <div className="w-[240px] md:w-[280px] h-[30px] md:h-[40px] bg-[#1a1a1a] border border-white/5 shadow-xl -mt-4 relative z-0" />
            {/* Label */}
            <div className="flex flex-col items-center text-center mt-8">
              <span className="text-accent font-serif text-[24px] md:text-[28px] mb-3 leading-none">01</span>
              <span className="text-muted tracking-[0.15em] text-[10px] md:text-[11px] leading-[1.6] uppercase">
                CERTIFICATE<br/>OF APPRECIATION
              </span>
            </div>
          </div>

          {/* 02: Pronite Pass */}
          <div className="flex flex-col items-center">
            {/* Object (Pass/Badge) */}
            <div className="w-[110px] md:w-[130px] h-[160px] md:h-[190px] bg-[#0f0f0f] border border-white/10 rounded-sm shadow-2xl relative z-10 flex items-center justify-center">
              {/* Lanyard strap placeholder */}
              <div className="absolute -top-16 w-[20px] h-[70px] bg-[#151515] border border-white/5" />
              <span className="text-white/5 text-[10px] font-serif tracking-widest">PASS</span>
            </div>
            {/* Pedestal */}
            <div className="w-[140px] md:w-[170px] h-[30px] md:h-[40px] bg-[#1a1a1a] border border-white/5 shadow-xl -mt-2 relative z-0" />
            {/* Label */}
            <div className="flex flex-col items-center text-center mt-8">
              <span className="text-accent font-serif text-[24px] md:text-[28px] mb-3 leading-none">02</span>
              <span className="text-muted tracking-[0.15em] text-[10px] md:text-[11px] leading-[1.6] uppercase">
                PRONITE PASS
              </span>
            </div>
          </div>

          {/* 03: Merchandise (Bottle + Cap) */}
          <div className="flex flex-col items-center">
            {/* Object Group */}
            <div className="relative w-[220px] md:w-[260px] h-[220px] md:h-[260px] flex items-end justify-center z-10">
              {/* Bottle */}
              <div className="w-[70px] md:w-[80px] h-[200px] md:h-[240px] bg-[#0f0f0f] border border-white/10 rounded-t-xl shadow-2xl absolute left-4 md:left-8 bottom-0 flex items-center justify-center">
                <span className="text-white/5 text-[10px] font-serif tracking-widest rotate-90">BOTTLE</span>
              </div>
              {/* Cap */}
              <div className="w-[120px] md:w-[140px] h-[70px] md:h-[80px] bg-[#131313] border border-white/10 rounded-t-full shadow-2xl absolute right-0 bottom-0 z-20 flex items-center justify-center">
                 <span className="text-white/5 text-[10px] font-serif tracking-widest">CAP</span>
              </div>
            </div>
            {/* Pedestal */}
            <div className="w-[240px] md:w-[280px] h-[30px] md:h-[40px] bg-[#1a1a1a] border border-white/5 shadow-xl -mt-4 relative z-0" />
            {/* Label */}
            <div className="flex flex-col items-center text-center mt-8">
              <span className="text-accent font-serif text-[24px] md:text-[28px] mb-3 leading-none">03</span>
              <span className="text-muted tracking-[0.15em] text-[10px] md:text-[11px] leading-[1.6] uppercase">
                MERCHANDISE
              </span>
            </div>
          </div>

          {/* 04: Opportunities (Envelope/Box) */}
          <div className="flex flex-col items-center">
            {/* Object */}
            <div className="w-[220px] md:w-[260px] h-[160px] md:h-[190px] bg-[#0f0f0f] border border-white/10 rounded-sm shadow-2xl relative z-10 flex items-center justify-center overflow-hidden">
               {/* Envelope V shape placeholder */}
               <div className="absolute top-0 w-full h-[120px] border-b border-white/5 bg-[#131313]" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
               <div className="absolute w-[30px] h-[30px] bg-accent/20 border border-accent rounded-full shadow-lg" />
            </div>
            {/* Pedestal */}
            <div className="w-[240px] md:w-[280px] h-[30px] md:h-[40px] bg-[#1a1a1a] border border-white/5 shadow-xl -mt-4 relative z-0" />
            {/* Label */}
            <div className="flex flex-col items-center text-center mt-8">
              <span className="text-accent font-serif text-[24px] md:text-[28px] mb-3 leading-none">04</span>
              <span className="text-muted tracking-[0.15em] text-[10px] md:text-[11px] leading-[1.6] uppercase">
                OPPORTUNITIES
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
