import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // Background Parallax & Fade Effects
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const blur = useTransform(scrollY, [0, 400], ["blur(0px)", "blur(10px)"]);

  // Text Fade Effects
  const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const textY = useTransform(scrollY, [0, 200], [0, 50]);

  // The specific Unsplash image URL you requested
  const heroImageUrl =
    "https://images.unsplash.com/photo-1638132704781-d1bdc0f43a6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Image Layer */}
      <motion.div
        style={{
          y,
          filter: blur,
          opacity,
          scale,
        }}
        className="absolute inset-0 z-0"
      >
        {/* Dark overlay (30%) to make white text pop against the image */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        <img
          src={heroImageUrl}
          alt="Abstract 3D Shape"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Main Title Content (Elegant White Version) */}
      <div className="absolute inset-0 z-30 flex items-center justify-center px-4 pointer-events-none">
        <motion.div
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ opacity: textOpacity, y: textY }}
        >
          <h1 className="hero-title text-6xl md:text-9xl font-black tracking-tighter text-white drop-shadow-2xl">
            REE
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="hero-subtitle mt-4 text-2xl md:text-4xl font-bold text-white/90 drop-shadow-lg"
          >
            Recycle, Exchange, Enjoy!
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="absolute bottom-0 left-0 right-0 z-20 h-32 flex flex-col items-center justify-end pb-12 pointer-events-none"
      >
        <motion.p
          className="text-white/80 mb-4 text-sm font-medium tracking-widest uppercase drop-shadow-md"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Scorri per esplorare
        </motion.p>
        <div className="w-px h-12 bg-white/50" />
      </motion.div>
    </div>
  );
}
