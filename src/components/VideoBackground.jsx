import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Home section: 0s to 5s
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

    // About section: 6s to 10s
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

   // About section: 6s to 10s
    ScrollTrigger.create({
      trigger: "#spec",
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        video.currentTime = 9 + progress * (14 - 9);
      },
    });

  }, []);

  return (
    <video
      ref={videoRef}
      src="/videos/output.mp4"
      muted
      playsInline
    />
  );
};

export default VideoBackground;
