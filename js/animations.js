gsap.from(".features", 1, {
  scale: 0.1,
  delay: 2.2,
  duration: 30,
  opacity: 0,
  ease: "power1.out",
  y: -500,
});

gsap.from(".image-text", 1, {
  scale: 0.1,
  duration: 4,
  rotate: 360,
  y: "-100",
  ease: "power1.inOut",
});

gsap.from("#description", 2, {
  scale: 0.1,
  xPercent: "90",
  duration: 2.5,
  ease: "power3.out",
  delay: 0.8,
});

gsap.from(".card", 1, {
  scale: 0,
  rotate: 360,
  y: 200,
  ease: "power1.inOut",
  delay: 1,
});
