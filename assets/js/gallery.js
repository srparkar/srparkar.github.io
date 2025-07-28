let currentSlide = 0;
  // function updateSlide() {
  //   const track = document.getElementById('photo-track');
  //   const width = track.clientWidth;
  //   track.style.transform = `translateX(-${currentSlide * width}px)`;

  // }
  function updateSlide() {
  const track = document.getElementById('photo-track');
  const width = track.clientWidth;
  track.style.transform = `translateX(-${currentSlide * width}px)`;

  // Highlight the active dot
  const dots = document.querySelectorAll('#dot-container .dot');
  dots.forEach((dot, index) => {
    dot.style.color = (index === currentSlide) ? '#333' : '#aaa';
  });
}
  function moveSlide(dir) {
    const total = document.getElementById('photo-track').children.length;
    currentSlide = (currentSlide + dir + total) % total;
    updateSlide();
  }

  function goToSlide(n) {
    currentSlide = n;
    updateSlide();
  }

  window.addEventListener('resize', updateSlide);