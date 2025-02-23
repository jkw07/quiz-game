import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToResults } from "../config/navigation";
import { Header } from "./Header";

import "../styles/LoadingScreen.scss";

export const LoadingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      goToResults(navigate);
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Header text="Obliczanie wyników..." />
      <div className="loading-container">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="whitesmoke" />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="#ED6D7D"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)", scale: [1, 1.1, 1] }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </>
  );
};
