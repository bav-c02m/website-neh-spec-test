
function scrollX() {
  const tracker = document.querySelector('.tracker-x');
  const center = document.getElementById('scroll-x');
  tracker.scrollLeft = center.offsetLeft;
}