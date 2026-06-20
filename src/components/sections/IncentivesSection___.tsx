"use client";

import { useRef, useEffect } from "react";
import { EditorialHeading } from "../ui/EditorialHeading";
import { assets } from "@/lib/assets";
import { VisualEditor } from "../editor/VisualEditor";
import { EditableElement } from "../editor/EditableElement";

export function IncentivesSection() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const stageAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Spotlight Lerp Tracking
    let requestRef: number;
    let mouseX = window.innerWidth / 2;
    let currentOffsetX = 0;

    const handlePointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
    };

    const tick = () => {
      if (spotlightRef.current) {
        const halfW = window.innerWidth / 2;
        const targetOffsetX = mouseX - halfW;
        currentOffsetX += (targetOffsetX - currentOffsetX) * 0.14;
        spotlightRef.current.style.transform = `translateX(${currentOffsetX}px)`;
      }
      requestRef = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", handlePointerMove);
    requestRef = requestAnimationFrame(tick);

    // 2. Intro Animation via classList — does NOT set inline transform/opacity,
    //    so CSS hover rules (.item-column.is-visible:hover) are never overridden.
    if (stageAreaRef.current) {
      const items = stageAreaRef.current.querySelectorAll('.item-column') as NodeListOf<HTMLElement>;
      items.forEach((item, i) => {
        // Only set the transition delay per-item; the starting state (opacity:0, translateY(55px))
        // and ending state (opacity:1, translateY(0)) are defined entirely in CSS.
        item.style.transitionDelay = `${0.55 + i * 0.14}s`;

        // Double rAF ensures the browser has painted the initial hidden state before we flip
        requestAnimationFrame(() => requestAnimationFrame(() => {
          item.classList.add('is-visible');
        }));
      });
    }

    return () => {
      cancelAnimationFrame(requestRef);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <VisualEditor>
      {/*
        FIX 1: min-h-screen instead of min-h-[90vh] so the section fills the viewport.
        pb-12 kept for label breathing room at the bottom.
      */}
      <section id="incentives" className="relative w-full flex flex-col pt-16 md:pt-24 pb-12 overflow-hidden border-t border-white/5 bg-[#050505] min-h-screen">
        <div className="absolute inset-0 bg-[#050505] -z-10" />

        <EditableElement id="spotlight" className="absolute inset-0 z-5 pointer-events-none">
          <div ref={spotlightRef} className="spotlight-overlay" />
        </EditableElement>

        {/*
          FIX 2: min-h-0 added to this flex column container.
          Without it, flex children with flex:1 can't actually grow to fill the available
          space — the container itself would size to its content instead of stretching.
        */}
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col flex-1 min-h-0 relative z-10">

          <EditableElement id="title" className="flex flex-col items-start mb-6 md:mb-12 relative z-10 flex-shrink-0">
            <EditorialHeading variant="section" className="text-foreground mb-4 md:mb-6">
              INCENTIVES
            </EditorialHeading>

            <EditableElement id="taglines" className="flex flex-col gap-1 text-accent tracking-[0.2em] text-[13px] md:text-[15px] font-medium">
              <span>RECOGNITION.</span>
              <span>EXPERIENCE.</span>
              <span>GROWTH.</span>
              <span>LEGACY.</span>
            </EditableElement>
          </EditableElement>

          <div className="stage-wrapper mt-auto">
            <div className="stage-container">

              <EditableElement id="pedestals">
                <img
                  src={assets.incentives.pedestals}
                  alt="Exhibition Platforms"
                  className="stage-base drop-shadow-2xl opacity-90 brightness-[0.85]"
                />
              </EditableElement>

              <div className="stage-area" ref={stageAreaRef}>

                {/* 01: Certificate */}
                <div className="item-column">
                  {/*
                    FIX 3: item-img-wrap is now a DIRECT child of .item-column.
                    CSS rule: position:absolute; bottom:100% anchors relative to .item-column.
                    Previously EditableElement injected a wrapper div here, breaking that anchor —
                    the image would position relative to the wrapper instead of the column.
                    EditableElement now wraps only the <img> inside item-img-wrap.
                  */}
                  <div className="item-img-wrap">
                    <EditableElement id="certificate-image">
                      <img
                        src={assets.incentives.certificate}
                        alt="Certificate"
                        className="item-img"
                        style={{ height: "100%" }}
                      />
                    </EditableElement>
                  </div>
                  <EditableElement id="certificate-label" className="item-label">
                    <span className="item-number text-accent">01</span>
                    <span className="item-name text-white/70">CERTIFICATE</span>
                  </EditableElement>
                </div>

                {/* 02: Pronite Pass */}
                <div className="item-column">
                  <div className="item-img-wrap">
                    <EditableElement id="pass-image">
                      <img
                        src={assets.incentives.pass}
                        alt="Pronite Pass"
                        className="item-img"
                        style={{ height: "72%" }}
                      />
                    </EditableElement>
                  </div>
                  <EditableElement id="pass-label" className="item-label">
                    <span className="item-number text-accent">02</span>
                    <span className="item-name text-white/70">PRONITE PASS</span>
                  </EditableElement>
                </div>

                {/* 03: Merchandise */}
                <div className="item-column">
                  <div className="item-img-wrap">
                    <EditableElement id="merchandise-image">
                      <img
                        src={assets.incentives.merchandise}
                        alt="Merchandise"
                        className="item-img"
                        style={{ height: "105%" }}
                      />
                    </EditableElement>
                  </div>
                  <EditableElement id="merchandise-label" className="item-label">
                    <span className="item-number text-accent">03</span>
                    <span className="item-name text-white/70">MERCHANDISE</span>
                  </EditableElement>
                </div>

                {/* 04: Opportunities */}
                <div className="item-column">
                  <div className="item-img-wrap">
                    <EditableElement id="opportunities-image">
                      <img
                        src={assets.incentives.opportunities}
                        alt="Opportunities"
                        className="item-img"
                        style={{ height: "82%" }}
                      />
                    </EditableElement>
                  </div>
                  <EditableElement id="opportunities-label" className="item-label">
                    <span className="item-number text-accent">04</span>
                    <span className="item-name text-white/70">OPPORTUNITIES</span>
                  </EditableElement>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </VisualEditor>
  );
}
