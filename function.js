window.addEventListener("scroll", function () {
  let element = document.getElementById("solid-opacity");

  console.log("Y", window.scrollY);
  console.log("W", window.innerHeight);
  console.log("Y/W", window.scrollY / window.innerHeight);
  let percentageScroll = window.scrollY / window.innerHeight;
  let opacity = percentageScroll * 0.7;
  element.style.opacity = opacity;
});
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => btn.classList.toggle("sub-title"));
});
