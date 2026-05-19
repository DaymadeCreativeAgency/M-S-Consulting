import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,md,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2rem",
      },
      screens: {
        "2xl": "80rem",
      },
    },
    extend: {
      colors: {
        "ms-navy": "#001F65",
        "ms-cream": "#EFEADB",
        "ms-ink": "#1A1B17",
        "ms-paper": "#FFFFFF",

        "dark-base": "#0A0E1A",
        "dark-elevated": "#131829",
        "dark-border": "#1F2438",
        "dark-ink": "#E8EAED",
        "dark-muted": "#8B92A8",

        "tech-grid": "#E5E5EA",
        "tech-grid-dark": "#1F2438",
        "tech-accent": "#5CA7F3",

        "forest-900": "#1C4640",
        "forest-500": "#688A85",
        "forest-200": "#B1C2C1",
        "terra-700": "#C82F07",
        "terra-500": "#DE7B59",
        "sun-500": "#FCC541",
        "sun-300": "#FDDB87",
        "wine-900": "#6E0C1D",
        "mauve-500": "#A36064",
        "charcoal-900": "#1A1B17",
        "charcoal-700": "#3D3E39",

        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--color-destructive)",
          foreground: "var(--color-destructive-foreground)",
        },
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },
        popover: {
          DEFAULT: "var(--color-popover)",
          foreground: "var(--color-popover-foreground)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "stat-large": ["clamp(3rem, 8vw, 5rem)", { fontWeight: "400" }],
      },
      letterSpacing: {
        "display": "-0.02em",
      },
      borderRadius: {
        "2xs": "2px",
        xs: "2px",
        sm: "4px",
        DEFAULT: "8px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        pill: "9999px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(0,31,101,0.04)",
        card: "0 4px 12px rgba(0,31,101,0.08)",
        floating: "0 12px 32px rgba(0,31,101,0.12)",
        "dark-card": "0 4px 24px rgba(0,0,0,0.4)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
        emphasis: "400ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-out",
        emphasis: "ease-in-out",
      },
      typography: (theme: (path: string) => string | string[]) => ({
        DEFAULT: {
          css: {
            color: theme("colors.ms-ink"),
            a: { color: theme("colors.ms-navy") },
            "h1, h2": {
              fontFamily: (theme("fontFamily.serif") as string[]).join(", "),
            },
            "h3, h4": {
              fontFamily: (theme("fontFamily.sans") as string[]).join(", "),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
