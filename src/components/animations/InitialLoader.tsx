"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InitialLoaderProps {
  minimumLoadTimeMs?: number; // Minimum time to show the loader
}

const InitialLoader: React.FC<InitialLoaderProps> = ({
  minimumLoadTimeMs = 800,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if this is the first visit to the site in this session
    const isFirstVisit = !sessionStorage.getItem("hasVisitedBefore");

    // If not the first visit, skip the loader
    if (!isFirstVisit) {
      setLoading(false);
      return;
    }

    // Mark that the user has visited the site
    sessionStorage.setItem("hasVisitedBefore", "true");

    // Use Promise.all to wait for both conditions:
    // 1. Minimum display time has passed
    // 2. Window load event has fired (all resources loaded)
    Promise.all([
      // Minimum time promise
      new Promise((resolve) => setTimeout(resolve, minimumLoadTimeMs)),

      // Window loaded promise
      new Promise((resolve) => {
        if (document.readyState === "complete") {
          resolve(true);
        } else {
          window.addEventListener("load", () => resolve(true), { once: true });
        }
      }),
    ]).then(() => {
      // Add a small delay before hiding for smoother transition
      setTimeout(() => setLoading(false), 300);
    });
  }, [minimumLoadTimeMs]);

  // When loader is done, enable scrolling again
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-dark z-[100]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* OmegaCore AI Logo Animation */}
            <div className="mb-8 relative w-32 h-32 mx-auto">
              {/* Outer Circle */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-accent opacity-30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 0.3,
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              />

              {/* Middle Circle */}
              <motion.div
                className="absolute inset-2 rounded-full border-2 border-primary"
                initial={{ rotate: 0 }}
                animate={{
                  rotate: 360,
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              />

              {/* Orbiting Dot */}
              <motion.div
                className="absolute w-4 h-4 rounded-full bg-accent"
                initial={{ rotate: 0, pathLength: 0 }}
                animate={{
                  rotate: 360,
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                style={{
                  top: "calc(50% - 8px)",
                  left: "calc(50% - 8px)",
                  transformOrigin: "calc(50% + 32px) calc(50% + 8px)",
                }}
              />

              {/* Center Core */}
              <motion.div
                className="absolute inset-0 m-auto w-10 h-10 bg-accent rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8],
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
            </div>

            {/* Loading Text */}
            <motion.h2
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.3, duration: 0.2 },
              }}
            >
              <span className="primary-gradient-text">OmegaCore AI</span>
            </motion.h2>

            {/* Loading dots */}
            <div className="flex space-x-2 justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-accent"
                  initial={{ opacity: 0.3, y: 0 }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    y: [0, -10, 0],
                    transition: {
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    },
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoader;