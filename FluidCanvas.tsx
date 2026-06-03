import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FluidSimulation } from '@/lib/fluidSimulation';

export default function FluidCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fluidRef = useRef<FluidSimulation | null>(null);
  const rafRef = useRef<number>(0);
  const prevTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: false,
      antialias: false,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    const fluid = new FluidSimulation(renderer);
    fluid.setBaseColor(0.9, 0.55, 0.25);
    fluidRef.current = fluid;

    const handlePointerMove = (e: PointerEvent) => {
      fluid.updatePointer(
        e.clientX / window.innerWidth,
        1.0 - e.clientY / window.innerHeight
      );
    };

    window.addEventListener('pointermove', handlePointerMove);

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      fluid.resize(w, h);
    };

    window.addEventListener('resize', handleResize);

    const animate = (time: number) => {
      rafRef.current = requestAnimationFrame(animate);
      if (prevTimeRef.current === 0) prevTimeRef.current = time;
      const dt = Math.min((time - prevTimeRef.current) / 1000, 0.05);
      prevTimeRef.current = time;
      fluid.update(dt);
      fluid.render();
    };

    rafRef.current = requestAnimationFrame(animate);

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafRef.current);
      } else {
        prevTimeRef.current = 0;
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      fluid.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
}
