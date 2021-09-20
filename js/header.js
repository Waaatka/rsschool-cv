window.addEventListener("scroll", (e) => {
  updateHeader();
});

const updateHeader = () => {
  const welcomeSection = document.querySelector("#welcome");
  const welcomeRect = welcomeSection.getBoundingClientRect();
  const header = document.querySelector("#header");
  const headerRect = header.getBoundingClientRect();
  if (window.scrollY > welcomeRect.height - headerRect.height) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

document.addEventListener("readystatechange", () => {
  updateHeader();
});
window.addEventListener("resize", () => {
  updateHeader();
});
