const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

noBtn.addEventListener("mouseenter", () => {
  const maxX = 220;
  const maxY = 100;
  const randX = Math.random() * maxX - maxX / 2;
  const randY = Math.random() * maxY - maxY / 2;
  noBtn.style.transform = `translate(${randX}px, ${randY}px)`;
});

yesBtn.addEventListener("click", () => {
  page1.classList.remove("active");
  page2.classList.add("active");
  startConfetti();
});

function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];

  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 8 + 4,
      speed: Math.random() * 3 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);

      p.y += p.speed;

      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
}
