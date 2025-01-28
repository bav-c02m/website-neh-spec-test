
function scrollX(event) {
  const trackerX = document.querySelector('.tracker-x');
  const secondSlide = document.getElementById('second-slide');
  trackerX.scrollLeft = secondSlide.offsetLeft;
}