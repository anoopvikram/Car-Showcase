import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Home section
    ScrollTrigger.create({
      trigger: "#home",
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        video.currentTime = 0 + progress * (4 - 0);
      },
    });

    // About section
    ScrollTrigger.create({
      trigger: "#about",
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        video.currentTime = 4 + progress * (9 - 4);
      },
    });

   // About section
    ScrollTrigger.create({
      trigger: "#spec",
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        video.currentTime = 9 + progress * (12 - 9);
      },
    });

    // Contact section
    ScrollTrigger.create({
      trigger: "#contact",
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        video.currentTime = 12 + progress * (15 - 12);
      },
    });

  }, []);

  return (
    <video
      ref={videoRef}
      src="/videos/output.webm"
      preload="auto"
      muted
      playsInline
    />
  );
};

export default VideoBackground;
