import React, { useEffect, useRef } from "react";

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars: {
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
  }[] = [];
  const mouse = { x: 0, y: 0 };

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationFrameId: number;

    const updateCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initializeStars = () => {
      const numberOfStars = window.innerWidth < 600 ? 30 : 100; // Adjust the number of stars for mobile

      stars.length = 0; // Clear the stars array

      // Push stars to cover the entire height of the canvas
      for (let i = 0; i < numberOfStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        stars.push({
          x,
          y,
          radius: Math.random() * 1 + 1,
          vx: Math.floor(Math.random() * 50) - 25,
          vy: Math.floor(Math.random() * 50) - 25,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighter";

      for (let i = 0, len = stars.length; i < len; i++) {
        const s = stars[i];

        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.stroke();
      }

      ctx.beginPath();
      for (let i = 0, len = stars.length; i < len; i++) {
        const starI = stars[i];
        ctx.moveTo(starI.x, starI.y);
        if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
        for (let j = 0, len = stars.length; j < len; j++) {
          const starII = stars[j];
          if (distance(starI, starII) < 150) {
            ctx.lineTo(starII.x, starII.y);
          }
        }
      }
      ctx.lineWidth = 0.05;
      ctx.strokeStyle = "white";
      ctx.stroke();
    };

    const distance = (
      point1: { x: number; y: number },
      point2: { x: number; y: number }
    ) => {
      const xs = point2.x - point1.x;
      const ys = point2.y - point1.y;

      return Math.sqrt(xs * xs + ys * ys);
    };

    const update = () => {
      for (let i = 0, len = stars.length; i < len; i++) {
        const s = stars[i];

        s.x += s.vx / 60; // Use 60 instead of FPS for smoother responsiveness
        s.y += s.vy / 60;

        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const tick = () => {
      draw();
      update();
      animationFrameId = requestAnimationFrame(tick);
    };

    updateCanvasDimensions();
    initializeStars();
    tick();

    window.addEventListener("resize", () => {
      cancelAnimationFrame(animationFrameId);
      updateCanvasDimensions();
      initializeStars();
      tick();
    });

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", () => {});
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return <canvas ref={canvasRef}></canvas>;
};

export default StarField;
