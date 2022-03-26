import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const COLORS = [
  { r: 255, g: 0, b: 255 }, //pink
  { r: 0, g: 255, b: 255 }, //skyblue
];

const PI2 = Math.PI * 2;

export class GlowParticle {
  constructor(x, y, radius, rgb) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.rgb = rgb;

    this.vx = Math.random() * 3;
    this.vy = Math.random() * 8;

    this.sinValue = Math.random();
  }

  animate(ctx, stageWidth, stageHeight) {
    this.sinValue += 0.01;

    this.radius += Math.cos(this.sinValue);

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) {
      this.vx *= -1;
      this.x += 10;
    } else if (this.x > stageWidth) {
      this.vx *= -1;
      this.x -= 10;
    }

    if (this.y < 0) {
      this.vy *= -1;
      this.y += 10;
    } else if (this.y > stageHeight) {
      this.vy *= -1;
      this.y -= 10;
    }

    ctx.beginPath();
    const g = ctx.createRadialGradient(
      this.x,
      this.y,
      this.radius * 0.01,
      this.x,
      this.y,
      this.radius
    );
    g.addColorStop(0, `rgba(${this.rgb.r} , ${this.rgb.g}, ${this.rgb.b}, 1)`);
    g.addColorStop(
      0.5,
      `rgba(${this.rgb.r} , ${this.rgb.g}, ${this.rgb.b}, 1)`
    );
    g.addColorStop(1, `rgba(${this.rgb.r} , ${this.rgb.g}, ${this.rgb.b}, 0)`);
    ctx.fillStyle = g;
    ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
    ctx.fill();
  }
}

export default function AnimatedCanvas() {
  let ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    const totalParticles = 7;
    const maxRadius = 700;
    const minRadius = 600;
    const stageWidth = getComputedStyle(canvas)
      .getPropertyValue('width')
      .slice(0, -2);
    const stageHieght = getComputedStyle(canvas)
      .getPropertyValue('height')
      .slice(0, -2);
    canvas.width = stageWidth * pixelRatio;
    canvas.height = stageHieght * pixelRatio;
    ctx.scale(pixelRatio, pixelRatio);

    const particles = [];
    console.log(particles, 'particles');

    ctx.globalCompositeOperation = 'saturation';

    const createParticles = () => {
      let curColor = 0;

      for (let i = 0; i < totalParticles; i++) {
        const item = new GlowParticle(
          Math.random() * stageWidth,
          Math.random() * stageHieght,
          Math.random() * (maxRadius - minRadius) + minRadius,
          COLORS[curColor]
        );
        if (++curColor >= COLORS.length) {
          curColor = 0;
        }

        particles.push(item);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, stageWidth, stageHieght);
      /*       ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height); */
      for (let i = 0; i < totalParticles; i++) {
        const item = particles[i];
        item.animate(ctx, stageWidth, stageHieght);
      }
      requestAnimationFrame(animate);
    };
    createParticles();
    animate();
  }, []);

  return (
    <canvas
      ref={ref}
      className='absolute top-0 left-0 -z-50 h-screen w-full '
    />
  );
}
