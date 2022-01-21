const observer = new MutationObserver((mutations) => {
  const nodes = document.querySelectorAll("div[style*='clip-path']");

  nodes.forEach((node) => {
    node.style.clipPath = "circle(48%)";
  });
});

window.onload = () => {
  observer.observe(document.body, { childList: true, subtree: true });
};
