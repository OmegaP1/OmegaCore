"use client";

import React, { useCallback, useMemo } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { PARTICLES_CONFIG, BREAKPOINTS } from "@/constants/animations";

// @ts-ignore - tsparticles optional dependency
import { loadFull } from "tsparticles";

interface ParticlesBackgroundProps {
  id?: string;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
  id = "tsparticles",
}) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Load the tsparticles package
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // Particles container loaded
    },
    []
  );

  // Detect if mobile based on window width
  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < BREAKPOINTS.MD;
  }, []);

  const particleCount = isMobile
    ? PARTICLES_CONFIG.MOBILE_COUNT
    : PARTICLES_CONFIG.DESKTOP_COUNT;
  const particleSize = isMobile
    ? PARTICLES_CONFIG.MOBILE_SIZE
    : PARTICLES_CONFIG.DESKTOP_SIZE;
  const distance = isMobile
    ? PARTICLES_CONFIG.MOBILE_DISTANCE
    : PARTICLES_CONFIG.DESKTOP_DISTANCE;
  const grabDistance = isMobile
    ? PARTICLES_CONFIG.MOBILE_GRAB_DISTANCE
    : PARTICLES_CONFIG.DESKTOP_GRAB_DISTANCE;

  return (
    <Particles
      id={id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: particleCount,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: PARTICLES_CONFIG.COLOR,
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
          },
          opacity: {
            value: PARTICLES_CONFIG.OPACITY_VALUE,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: PARTICLES_CONFIG.OPACITY_MIN,
              sync: false,
            },
          },
          size: {
            value: particleSize,
            random: true,
            anim: {
              enable: true,
              speed: PARTICLES_CONFIG.SIZE_ANIMATION_SPEED,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: distance,
            color: PARTICLES_CONFIG.LINE_COLOR,
            opacity: PARTICLES_CONFIG.LINE_OPACITY,
            width: 1,
          },
          move: {
            enable: true,
            speed: PARTICLES_CONFIG.MOVE_SPEED,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: !isMobile,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: grabDistance,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        fpsLimit: isMobile
          ? PARTICLES_CONFIG.MOBILE_FPS_LIMIT
          : PARTICLES_CONFIG.DESKTOP_FPS_LIMIT,
        fullScreen: {
          enable: false,
        },
        background: {
          color: "transparent",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;