import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/img/logo.png",
  "/img/img2.png",
  "/img/img3.png"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Cambio automático cada 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Drag del carousel
  const handleDragEnd = (event, info) => {
    if (info.offset.x > 60) {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    } else if (info.offset.x < -60) {
      setIndex((prev) => (prev + 1) % images.length);
    }
  };

  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: "relative",
        width: "100%",
        height: "80vh",
        overflow: "hidden",
      }}
    >
      {/* Fondo nude suave con blur */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${images[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(22px) brightness(0.55)",
          transform: "scale(1.25)",
          zIndex: 0,
        }}
      ></div>

      {/* Imagen principal */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="slide"
          draggable="false"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            cursor: "grab",
          }}
        />
      </AnimatePresence>

      {/* TEXTO NUDE SUAVE */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
          textAlign: "center",
          padding: "10px 20px",
        }}
      >
        <motion.h1
          style={{
            color: "var(--nude-crema)",
            fontSize: "3rem",
            fontWeight: "700",
            textShadow: `
              0 0 12px var(--nude-beige),
              0 0 26px var(--nude-rosado),
              0 0 40px var(--nude-cafe)
            `,
          }}
        >
          Elegancia & Estilo
        </motion.h1>

        <motion.p
          style={{
            color: "var(--nude-crema)",
            fontSize: "1.35rem",
            marginTop: "12px",
            textShadow: `
              0 0 10px var(--nude-rosado),
              0 0 20px var(--nude-cafe)
            `,
          }}
        >
          Realza tu belleza con nuestra corsetería Lenny
        </motion.p>
      </div>

      {/* CÍRCULOS DE NAVEGACIÓN – NUEVA PALETA */}
      <div
        style={{
          position: "absolute",
          bottom: "25px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          zIndex: 10,
        }}
      >
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: "13px",
              height: "13px",
              borderRadius: "50%",
              cursor: "pointer",

              background:
                index === i
                  ? "linear-gradient(135deg, var(--nude-rosado), var(--nude-tierra))"
                  : "var(--nude-cafe)",

              boxShadow:
                index === i
                  ? "0 0 8px var(--nude-rosado), 0 0 14px var(--nude-tierra)"
                  : "0 0 4px rgba(0,0,0,0.4)",

              transform: index === i ? "scale(1.35)" : "scale(1)",
              transition: "0.33s",
            }}
          ></div>
        ))}
      </div>
    </motion.section>
  );
}
