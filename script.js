// アニメーションの実装
ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.ani-t', { delay: 200, origin: "top" });
ScrollReveal().reveal('.ani-b', { delay: 200, origin: "bottom" });
ScrollReveal().reveal('.ani-l', { delay: 200, origin: "left" });
ScrollReveal().reveal('.ani-r', { delay: 200, origin: "right" });

ScrollReveal().reveal('.ani-l-s', { delay: 200, origin: "left", distance: "500px" });
ScrollReveal().reveal('.ani-r-s', { delay: 200, origin: "right", distance: "500px" });
ScrollReveal().reveal('.statement-block', { delay: 200, origin: "bottom", distance: "300px" });
ScrollReveal().reveal('.main_visual', { delay: 200, origin: "top", distance: "600px", });