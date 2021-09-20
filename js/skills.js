let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        drawCircles();
      }
    });
  },
  {
    root: document,
    rootMargin: "0px",
    threshold: 1,
  }
);
document.querySelectorAll("#skills .progress").forEach((e) => {
  observer.observe(e);
});

const drawCircles = () => {
  const isAlreadyDrawn = document.querySelectorAll("#skills canvas").length > 0;

  if (!isAlreadyDrawn) {
    createCircle(67, "67%", document.querySelector("#skill-css-progress"));
    createCircle(85, "85%", document.querySelector("#skill-html-progress"));
    createCircle(40, "40%", document.querySelector("#skill-js-progress"));
    createCircle(80, "80%", document.querySelector("#skill-git-progress"));
    createCircle(25, "A2", document.querySelector("#skill-en-progress"));
  }
};

function createCircle(value, text, element) {
  const canvas = document.createElement("canvas");
  const label = document.createElement("span");
  label.innerHTML = text;
  canvas.width = 150;
  canvas.height = 150;
  const canvasContext = canvas.getContext("2d");
  canvasContext.lineCap = "round";
  const posX = canvas.width / 2;
  const posY = canvas.height / 2;
  const result = (value * 360) / 100;
  let degrees = 0;
  const acrInterval = setInterval(function () {
    degrees += 2;
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.beginPath();
    canvasContext.arc(
      posX,
      posY,
      70,
      (Math.PI / 180) * 270,
      (Math.PI / 180) * (270 + 360)
    );
    canvasContext.strokeStyle = "#f4f4f4";
    canvasContext.lineWidth = 10;
    canvasContext.stroke();

    canvasContext.beginPath();
    canvasContext.strokeStyle = "#4788FF";
    canvasContext.lineWidth = 10;
    canvasContext.arc(
      posX,
      posY,
      70,
      (Math.PI / 180) * 270,
      (Math.PI / 180) * (270 + degrees)
    );
    canvasContext.stroke();
    if (degrees >= result) clearInterval(acrInterval);
  }, 0.5);
  element.append(canvas);
  element.append(label);
}
