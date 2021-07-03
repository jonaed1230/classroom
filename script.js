const rect = document.querySelector(".auto-rect");
const colors = ["tomato", "aqua", "red"];
rect.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * colors.length);
  const selectedClass = colors[randomNum];
  const classLength = rect.classList.length;
  if (classLength > 1) {
    rect.classList.remove(rect.classList[1]);
  }
  rect.classList.add(selectedClass);
});
