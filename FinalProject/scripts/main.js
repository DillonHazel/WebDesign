// 1. Get canvas + drawing context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// 2. Glow settings
ctx.fillStyle = "rgba(255, 200, 255, 0.8)";
ctx.shadowColor = "rgba(255, 200, 255, 0.8)";
ctx.shadowBlur = 20;

// 3. Starting position
let y = 0;

// 4. Draw function
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(200, y, 40, 0, Math.PI * 2); // centered horizontally
  ctx.fill();

  y += 1;

  // loop animation
  if (y > canvas.height) {
    y = 0;
  }
}

// 5. Animation loop
function loop() {
  draw();
  requestAnimationFrame(loop);
}

loop();