import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,tsx,ts,jsx,js,md,mdx}",
    "./src/components/**/*.{astro,tsx,ts,jsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: {
            "50": "#FDFAF5",
            "100": "#F7F2E8",
            "200": "#EDE5D4",
          },
          wood: {
            "300": "#C9AA84",
            "400": "#A8845A",
            "500": "#7D5E3C",
          },
          salvia: {
            "100": "#D6E5D8",
            "200": "#AECDB3",
            "400": "#6B9B73",
            "500": "#4E7A56",
            "600": "#38603E",
          },
          terra: {
            "100": "#F2E0D6",
            "300": "#D99070",
            "500": "#B5613C",
            "600": "#8C4528",
          },
        },
        ink: {
          "100": "#D6CBC2",
          "300": "#A89585",
          "500": "#6B5A4A",
          "700": "#3D3026",
          "900": "#1C1612",
        },
        page: {
          DEFAULT: "#FDFAF5",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F7F2E8",
          border: "#EDE5D4",
          borderStrong: "#A8845A",
        },
        text: {
          primary: "#1C1612",
          secondary: "#3D3026",
          muted: "#6B5A4A",
          disabled: "#A89585",
          inverse: "#FFFFFF",
        },
        primary: {
          DEFAULT: "#6B9B73",
          hover: "#4E7A56",
          active: "#38603E",
          fg: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F7F2E8",
          fg: "#38603E",
          hover: "#EDE5D4",
        },
        accent: {
          DEFAULT: "#D99070",
          deep: "#B5613C",
          fg: "#1C1612",
        },
        status: {
          success: "#6B9B73",
          successSurface: "#D6E5D8",
          warning: "#D99070",
          warningSurface: "#F2E0D6",
          error: "#B5613C",
          errorSurface: "#F2E0D6",
          errorText: "#8C4528",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"],
      },
      fontSize: {
        display: [
          "3.5rem",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.015em",
            fontWeight: "700",
          },
        ],
        "hero-fluid": [
          "clamp(2.5rem,5vw,3.75rem)",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.015em",
            fontWeight: "700",
          },
        ],
        h1: [
          "2.75rem",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],
        h2: [
          "2rem",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.005em",
            fontWeight: "700",
          },
        ],
        h3: [
          "1.5rem",
          {
            lineHeight: "1.3",
            fontWeight: "600",
          },
        ],
        h4: [
          "1.25rem",
          {
            lineHeight: "1.35",
            fontWeight: "600",
          },
        ],
        h5: [
          "1.125rem",
          {
            lineHeight: "1.4",
            fontWeight: "500",
          },
        ],
        h6: [
          "1rem",
          {
            lineHeight: "1.45",
            fontWeight: "500",
          },
        ],
        "body-lg": [
          "1.125rem",
          {
            lineHeight: "1.7",
          },
        ],
        body: [
          "1rem",
          {
            lineHeight: "1.75",
          },
        ],
        "body-sm": [
          "0.9375rem",
          {
            lineHeight: "1.7",
          },
        ],
        small: [
          "0.875rem",
          {
            lineHeight: "1.6",
          },
        ],
        label: [
          "0.8125rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.01em",
            fontWeight: "500",
          },
        ],
        micro: [
          "0.75rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
      },
      spacing: {
        "1": "4px",
        "1.5": "6px",
        "2": "8px",
        "2.5": "10px",
        "3": "12px",
        "3.5": "14px",
        "4": "16px",
        "4.5": "18px",
        "5": "20px",
        "5.5": "22px",
        "6": "24px",
        "7": "28px",
        "8": "32px",
        "9": "36px",
        "10": "40px",
        "11": "44px",
        "12": "48px",
        "14": "56px",
        "16": "64px",
        "18": "72px",
        "20": "80px",
        "24": "96px",
        "32": "128px",
        gutter: "20px",
        "gutter-lg": "32px",
      },
      maxWidth: {
        page: "1200px",
        section: "1040px",
        copy: "480px",
      },
      borderRadius: {
        xs: "8px",
        sm: "6px",
        base: "10px",
        DEFAULT: "10px",
        lg: "16px",
        hero: "22px",
        xl: "24px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(92,60,30,0.08),0 1px 2px rgba(92,60,30,0.04)",
        base: "0 4px 12px rgba(92,60,30,0.10),0 2px 4px rgba(92,60,30,0.06)",
        md: "0 8px 24px rgba(92,60,30,0.12),0 4px 8px rgba(92,60,30,0.06)",
        lg: "0 16px 40px rgba(92,60,30,0.14),0 6px 12px rgba(92,60,30,0.07)",
        focus: "0 0 0 3px rgba(107,155,115,0.35),0 0 0 1px #6B9B73",
      },
      screens: {
        sm: "561px",
        md: "961px",
        mobile: { max: "560px" },
        tablet: { max: "960px" },
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0,0,0.2,1)",
        "in-out": "cubic-bezier(0.4,0,0.2,1)",
        spring: "cubic-bezier(0.32,0.72,0,1)",
      },
      transitionDuration: {
        fast: "100ms",
        base: "150ms",
        medium: "200ms",
        slow: "250ms",
        reveal: "400ms",
      },
      backgroundImage: {
        // Hero radial wash — uses CSS vars declared in @layer base of globals.css
        // (rgb channels of brand.salvia.100 and brand.terra.100).
        "hero-wash":
          "radial-gradient(ellipse at top left, rgb(var(--hero-wash-salvia) / 0.35) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgb(var(--hero-wash-terra) / 0.30) 0%, transparent 60%)",
      },
      keyframes: {
        floatIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // layout.css:12-15 — decorative pulse for NotesPreview "grabando" badge
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        // accordion.tsx:66 — Radix accordion open/close animations
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
      },
      animation: {
        floatIn: "floatIn 0.5s cubic-bezier(0.32,0.72,0,1) both",
        // layout.css:12-15
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        // accordion.tsx:66
        "accordion-down": "accordion-down 200ms cubic-bezier(0,0,0.2,1)",
        "accordion-up": "accordion-up 200ms cubic-bezier(0,0,0.2,1)",
      },
    },
  },
  plugins: [],
};

export default config;
