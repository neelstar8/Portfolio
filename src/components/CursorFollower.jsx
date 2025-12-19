import { useEffect, useRef } from "react";

export default function NeonCursor() {
  const canvasRef = useRef(null);
  const points = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      points.current.push({
        x: e.clientX,
        y: e.clientY,
        life: 1
      });

      if (points.current.length > 60) {
        points.current.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      // draw smooth curve
      ctx.beginPath();
      for (let i = 0; i < points.current.length; i++) {
        const p = points.current[i];
        const next = points.current[i + 1];
        if (!next) break;

        const xc = (p.x + next.x) / 2;
        const yc = (p.y + next.y) / 2; 

        ctx.strokeStyle = `rgba(255, 255, 255, ${p.life})`;
        ctx.shadowColor = "rgba(255, 255, 255, 0.9)";
        ctx.shadowBlur = 20;

        ctx.quadraticCurveTo(p.x, p.y, xc, yc);
        p.life -= 0.02;
      }
      ctx.stroke();

      // remove dead points
      points.current = points.current.filter((p) => p.life > 0);

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 99999
      }}
    />
  );
}
