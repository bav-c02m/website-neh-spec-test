document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".clickable");

  images.forEach((img) => {
      img.addEventListener("click", () => {
          if (img.classList.contains("fullscreen")) {
              // Уменьшение изображения
              img.classList.remove("fullscreen");
              document.body.classList.remove("noscroll");
          } else {
              // Увеличение изображения
              img.classList.add("fullscreen");
              document.body.classList.add("noscroll");
          }
      });
  });
});
