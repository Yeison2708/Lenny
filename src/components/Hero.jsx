import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/img/logo.png",
  "/img/img2.png",
  "/img/img3.png"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Cambio automático
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Movimiento del carousel con drag (mouse + touch)
  const handleDragEnd = (event, info) => {
    if (info.offset.x > 60) {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    } 
    else if (info.offset.x < -60) {
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
      {/* 🔥 Fondo desenfocado */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${images[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(20px) brightness(0.5)",
          transform: "scale(1.2)",
          zIndex: 0,
        }}
      ></div>

      {/* 🔥 IMAGEN PRINCIPAL (drag para mover) */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="slide"
          draggable="false"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain", // 🔥 NO recorta imágenes
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            cursor: "grab",
          }}
        />
      </AnimatePresence>

      {/* 🔥 TEXTO CENTRADO CON EFECTO NEÓN */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
          textAlign: "center",
        }}
      >
        <motion.h1
          // animate={{ y: [0, -12, 0] }}
          // transition={{
          //   duration: 1.8,
          //   repeat: Infinity,
          //   ease: "easeInOut",
          // }}
          style={{
            color: "#FFFFFFFF",
            fontSize: "3rem",
            fontWeight: "bold",
            textShadow: `
              0 0 10px #FF00EA,
              0 0 20px #FF00EA,
              0 0 40px #FF00EA,
              0 0 80px #FF00EA
            `,
          }}
        >
          Elegancia & Estilo
        </motion.h1>

        <motion.p
          // animate={{ y: [0, -12, 0] }}
          // transition={{
          //   duration: 1.8,
          //   repeat: Infinity,
          //   ease: "easeInOut",
          // }}
          style={{
            color: "#FFFFFFFF",
            fontSize: "1.4rem",
            marginTop: "10px",
            textShadow: `
              0 0 10px #FF00EA,
              0 0 20px #FF00EA
            `,
          }}
        >
          Realza tu belleza con nuestra corsetería premium
        </motion.p>
      </div>

      {/* ⚪ CÍRCULOS ABAJO */}
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
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              cursor: "pointer",
              background: index === i ? "#FF00EA" : "black",
              transform: index === i ? "scale(1.3)" : "scale(1)",
              transition: "0.3s",
            }}
          ></div>
        ))}
      </div>
    </motion.section>
  );
}