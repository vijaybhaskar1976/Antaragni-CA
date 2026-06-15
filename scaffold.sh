#!/bin/bash

# Ensure we are in the right directory
cd /Volumes/HODER/Antaragni26/Antigravity-learning

# Create directories
mkdir -p src/app src/components/ui src/components/motion src/components/layout src/components/shared src/sections src/hooks src/lib/assets src/lib/responsive src/styles/tokens src/types public/logos public/images public/portraits public/products

# 1. Base Project Files
cat << 'EOF' > package.json
{
  "name": "antaragni-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "clsx": "^2.1.0",
    "framer-motion": "^11.0.0",
    "next": "14.2.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.3",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
EOF

cat << 'EOF' > tsconfig.json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

cat << 'EOF' > next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
EOF

cat << 'EOF' > tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        muted: "var(--muted)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      spacing: {
        section: "160px",
        "section-sm": "80px",
      },
    },
  },
  plugins: [],
};
export default config;
EOF

cat << 'EOF' > postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
EOF

cat << 'EOF' > eslint.config.js
module.exports = {
  extends: ["next/core-web-vitals"],
};
EOF

# 3. App Router Foundation
cat << 'EOF' > src/app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #050505;
  --foreground: #ffffff;
  --accent: #d92323;
  --muted: #a3a3a3;

  --ease-premium: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-standard: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-hover: cubic-bezier(0.4, 0, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: initial !important;
    scroll-behavior: auto !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: var(--font-sans), sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
EOF

cat << 'EOF' > src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Antaragni Campus Ambassador Program",
  description: "Lead the Legacy. Represent the Spirit of Antaragni.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
EOF

cat << 'EOF' > src/app/page.tsx
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GridContainer } from "@/components/ui/GridContainer";

export default function Home() {
  return (
    <main>
      <SectionWrapper variant="hero">
        <GridContainer>
          <div className="col-span-12">
            <DisplayHeading variant="hero">ANTARAGNI</DisplayHeading>
            <p className="text-muted mt-4 max-w-md uppercase tracking-wider text-sm">
              Project Scaffold Initialized. Architecture ready for section development.
            </p>
          </div>
        </GridContainer>
      </SectionWrapper>
    </main>
  );
}
EOF

# 4. Design Token System
cat << 'EOF' > src/styles/tokens/colors.ts
export const colors = {
  background: "#050505",
  foreground: "#ffffff",
  accent: "#d92323",
  muted: "#a3a3a3",
};
EOF

cat << 'EOF' > src/styles/tokens/typography.ts
export const typography = {
  fonts: {
    sans: "var(--font-sans)",
    serif: "var(--font-serif)",
  },
  sizes: {
    hero: "clamp(80px, 8vw, 160px)",
    section: "80px",
    body: "16px",
    meta: "12px",
  },
  tracking: {
    tight: "-0.04em",
    wide: "0.1em",
  }
};
EOF

cat << 'EOF' > src/styles/tokens/spacing.ts
export const spacing = {
  section: "160px",
  sectionSm: "80px",
  gridGapDesktop: "24px",
  gridGapTablet: "16px",
};
EOF

cat << 'EOF' > src/styles/tokens/radius.ts
export const radius = {
  none: "0px",
};
EOF

cat << 'EOF' > src/styles/tokens/shadows.ts
export const shadows = {
  none: "none",
};
EOF

cat << 'EOF' > src/styles/tokens/breakpoints.ts
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1440px",
};
EOF

cat << 'EOF' > src/styles/tokens/motion.ts
export const motionTokens = {
  durations: {
    micro: 0.2,
    short: 0.4,
    medium: 0.8,
    long: 1.4,
  },
  easing: {
    standard: [0.25, 1, 0.5, 1],
    premium: [0.16, 1, 0.3, 1],
    hover: [0.4, 0, 0.2, 1],
  }
};
EOF

# 5. Shared Type System
cat << 'EOF' > src/types/index.ts
export type BaseProps = {
  className?: string;
  children?: React.ReactNode;
};

export type AssetReference = {
  id: string;
  type: "image" | "svg" | "3d" | "video";
  path: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export type AnimationVariant = "fade-up" | "text-reveal" | "none";
EOF

# 6. Utility Layer
cat << 'EOF' > src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
EOF

# 7. Animation Foundation
cat << 'EOF' > src/components/motion/variants.ts
import { motionTokens } from "@/styles/tokens/motion";

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: motionTokens.durations.medium,
      ease: motionTokens.easing.premium
    }
  }
};

export const textRevealParentVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const textRevealChildVariant = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: {
      duration: motionTokens.durations.long,
      ease: motionTokens.easing.premium
    }
  }
};
EOF

cat << 'EOF' > src/components/motion/MotionProviders.tsx
"use client";

import { MotionConfig } from "framer-motion";

export function MotionProviders({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
EOF

cat << 'EOF' > src/components/motion/FadeUpWrapper.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "./variants";
import { BaseProps } from "@/types";

interface FadeUpProps extends BaseProps {
  delay?: number;
}

export function FadeUpWrapper({ children, className, delay = 0 }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      variants={{
        ...fadeUpVariant,
        visible: {
          ...fadeUpVariant.visible,
          transition: {
            ...fadeUpVariant.visible.transition,
            delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}
EOF

cat << 'EOF' > src/components/motion/TextRevealMask.tsx
"use client";

import { motion } from "framer-motion";
import { textRevealParentVariant, textRevealChildVariant } from "./variants";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  lines: string[];
  className?: string;
  as?: React.ElementType;
}

export function TextRevealMask({ lines, className, as: Component = "h2" }: TextRevealProps) {
  return (
    <motion.div
      className={cn("flex flex-col", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      variants={textRevealParentVariant}
      aria-label={lines.join(" ")}
    >
      {lines.map((line, index) => (
        <span key={index} className="overflow-hidden block" aria-hidden="true">
          <motion.span className="block" variants={textRevealChildVariant}>
            {line}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
EOF

# 8. Shared UI Components
cat << 'EOF' > src/components/ui/GridContainer.tsx
import { BaseProps } from "@/types";
import { cn } from "@/lib/utils";

interface GridContainerProps extends BaseProps {
  columns?: 4 | 8 | 12;
}

export function GridContainer({ children, className, columns = 12 }: GridContainerProps) {
  return (
    <div 
      className={cn(
        "max-w-[1440px] mx-auto px-4 md:px-8 w-full grid gap-4 md:gap-6", 
        columns === 12 ? "grid-cols-1 md:grid-cols-8 lg:grid-cols-12" : "",
        columns === 8 ? "grid-cols-1 md:grid-cols-4 lg:grid-cols-8" : "",
        columns === 4 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" : "",
        className
      )}
    >
      {children}
    </div>
  );
}
EOF

cat << 'EOF' > src/components/ui/SectionWrapper.tsx
import { BaseProps } from "@/types";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends BaseProps {
  variant?: "default" | "compact" | "hero";
  id?: string;
}

export function SectionWrapper({ children, className, variant = "default", id }: SectionWrapperProps) {
  return (
    <section 
      id={id}
      className={cn(
        "w-full flex flex-col items-center",
        variant === "default" && "py-12 md:py-[80px] lg:py-[160px]",
        variant === "compact" && "py-8 md:py-[48px] lg:py-[80px]",
        variant === "hero" && "min-h-screen pt-[120px] pb-12",
        className
      )}
    >
      {children}
    </section>
  );
}
EOF

cat << 'EOF' > src/components/ui/DisplayHeading.tsx
import { BaseProps } from "@/types";
import { cn } from "@/lib/utils";
import React from "react";

interface DisplayHeadingProps extends BaseProps {
  variant?: "hero" | "section" | "number";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function DisplayHeading({ 
  children, 
  className, 
  variant = "section",
  as: Component = "h2"
}: DisplayHeadingProps) {
  return (
    <Component 
      className={cn(
        "font-serif uppercase tracking-tight text-foreground",
        variant === "hero" && "text-5xl md:text-7xl lg:text-[clamp(80px,8vw,160px)] leading-[0.9]",
        variant === "section" && "text-4xl md:text-6xl lg:text-[80px] leading-[0.9]",
        variant === "number" && "text-3xl md:text-5xl lg:text-[64px] leading-none text-accent",
        className
      )}
    >
      {children}
    </Component>
  );
}
EOF

cat << 'EOF' > src/components/ui/BodyText.tsx
import { BaseProps } from "@/types";
import { cn } from "@/lib/utils";

export function BodyText({ children, className }: BaseProps) {
  return (
    <p className={cn("font-sans text-sm md:text-base text-muted leading-relaxed", className)}>
      {children}
    </p>
  );
}
EOF

cat << 'EOF' > src/components/ui/DividerLine.tsx
import { cn } from "@/lib/utils";

export function DividerLine({ className }: { className?: string }) {
  return (
    <hr className={cn("w-full border-t border-[#262626] m-0", className)} aria-orientation="horizontal" />
  );
}
EOF

cat << 'EOF' > src/components/ui/TextLink.tsx
import { BaseProps } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface TextLinkProps extends BaseProps {
  href: string;
  variant?: "nav" | "cta";
}

export function TextLink({ children, className, href, variant = "nav" }: TextLinkProps) {
  return (
    <Link 
      href={href}
      className={cn(
        "font-sans uppercase text-xs tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        variant === "nav" && "text-muted hover:text-foreground",
        variant === "cta" && "text-foreground relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-accent after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300",
        className
      )}
    >
      {children}
    </Link>
  );
}
EOF

# 9. Asset System
cat << 'EOF' > src/lib/assets/types.ts
export type AssetKey = 
  | "logo-monogram"
  | "hero-silhouette"
  | "crowd-photo"
  | "portrait-testimonial"
  | "team-1"
  | "product-plaque";

export interface Asset {
  id: AssetKey;
  path: string;
  type: "image" | "svg" | "3d";
  alt: string;
}
EOF

cat << 'EOF' > src/lib/assets/registry.ts
import { Asset, AssetKey } from "./types";

export const AssetRegistry: Record<AssetKey, Asset> = {
  "logo-monogram": {
    id: "logo-monogram",
    path: "/logos/antaragni-monogram.svg",
    type: "svg",
    alt: "Antaragni Monogram Logo"
  },
  "hero-silhouette": {
    id: "hero-silhouette",
    path: "/images/hero-silhouette.webp",
    type: "image",
    alt: "Silhouette of a person standing on stage"
  },
  "crowd-photo": {
    id: "crowd-photo",
    path: "/images/manifesto-crowd.webp",
    type: "image",
    alt: "Massive concert crowd"
  },
  "portrait-testimonial": {
    id: "portrait-testimonial",
    path: "/images/testimonial-bg.webp",
    type: "image",
    alt: "Testimonial portrait"
  },
  "team-1": {
    id: "team-1",
    path: "/portraits/team-member-1.webp",
    type: "image",
    alt: "Team member portrait"
  },
  "product-plaque": {
    id: "product-plaque",
    path: "/products/incentive-plaque.webp",
    type: "image",
    alt: "Plaque of honour"
  }
};
EOF

# 10. Responsive Foundation
cat << 'EOF' > src/lib/responsive/breakpoints.ts
export const breakpoints = {
  mobile: "(max-width: 639px)",
  tablet: "(min-width: 640px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
};

export function isMobile() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(breakpoints.mobile).matches;
}

export function isReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
EOF

# Install dependencies (We will just output the instruction or run npm install)
# npm install --legacy-peer-deps
