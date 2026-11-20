import React from "react";
import { motion } from "framer-motion";

export default function Can({ flavour, compact = false }) {
  return (
    <motion.div
      className={`can-stage ${compact ? "can-stage--compact" : ""}`}
      initial={{ opacity: 0, y: 18, rotate: -4 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.75, ease: [0.2, 0.7, 0.2, 1] }}
      style={{ "--accent": flavour.accent, "--pale": flavour.pale }}
      aria-label={`${flavour.name} AuraFizz can concept`}
    >
      <div className="can-halo" />
      <div className="can-shadow" />
      <motion.div
        className="can"
        animate={{ y: [0, -8, 0], rotateY: [-7, 7, -7] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ rotateZ: 2, scale: 1.025 }}
      >
        <div className="can-top"><span /></div>
        <div className="can-body">
          <div className="can-gloss" />
          <div className="can-condensation c1" />
          <div className="can-condensation c2" />
          <div className="can-condensation c3" />
          <div className="can-label">
            <span className="can-edition">SPARKLING PROTEIN</span>
            <strong>Aura<br/>Fizz<span className="can-star">✳</span></strong>
            <span className="can-flavour">{flavour.name}</span>
            <div className="can-liquid">
              <i /><i /><i /><i /><i />
            </div>
            <span className="can-protein">20g* PROTEIN</span>
            <span className="can-volume">250 ml · LIGHTLY SPARKLING</span>
          </div>
        </div>
        <div className="can-bottom" />
      </motion.div>
      <div className="bubble bubble-a" /><div className="bubble bubble-b" /><div className="bubble bubble-c" />
    </motion.div>
  );
}