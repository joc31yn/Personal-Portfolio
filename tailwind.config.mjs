/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'cream': "#f7f4eb",
        "apricot": "#F4A261",
        "terracotta": "#E76F51",
        "charcoal": "#263238",
        "ghost": "#f8f8ff",
        "flash": "#EDF2F4",
        "cabin" : "#ab8e65",
        "clr1": "#00c2ff",
        "clr2": "#33ff8c",
        "clr3": "#ffc640",
        "clr4": "#e54cff",
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255, 255, 255, 0.40) 0%, rgba(0, 0, 0, 0.25) 200%)',
      },
      keyframes: {
        aurora1: {
          "0%": { top: "0", right: "0" },
          "50%": { top: "100%", right: "75%" },
          "75%": { top: "100%", right: "25%" },
          "100%": { top: "0", right: "0" },
        },
        aurora2: {
          "0%": { top: "-50%", left: "0%" },
          "60%": { top: "100%", left: "75%" },
          "85%": { top: "100%", left: "25%" },
          "100%": { top: "-50%", left: "0%" },
        },
        aurora3: {
          "0%": { bottom: "0", left: "0" },
          "40%": { bottom: "100%", left: "75%" },
          "65%": { bottom: "40%", left: "50%" },
          "100%": { bottom: "0", left: "0" },
        },
        aurora4: {
          "0%": { bottom: "-50%", right: "0" },
          "50%": { bottom: "0%", right: "40%" },
          "90%": { bottom: "50%", right: "25%" },
          "100%": { bottom: "-50%", right: "0" },
        },
        auroraBorder: {
          "0%": { borderRadius: "37% 29% 27% 27% / 28% 25% 41% 37%" },
          "25%": { borderRadius: "47% 29% 39% 49% / 61% 19% 66% 26%" },
          "50%": { borderRadius: "57% 23% 47% 72% / 63% 17% 66% 33%" },
          "75%": { borderRadius: "28% 49% 29% 100% / 93% 20% 64% 25%" },
          "100%": { borderRadius: "37% 29% 27% 27% / 28% 25% 41% 37%" },
        },
      },
      animation: {
        "aurora1": "aurora1 10s ease-in-out infinite alternate",
        "aurora2": "aurora2 9s ease-in-out infinite alternate",
        "aurora3": "aurora3 8s ease-in-out infinite alternate",
        "aurora4": "aurora4 18s ease-in-out infinite alternate",
        "auroraBorder": "auroraBorder 6s ease-in-out infinite",
      },
    },
    plugins: [],
  }
};
