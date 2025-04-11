document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('.video');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        video.play();
        video.loop = true;
      }
      else {
        const video = entry.target;
        video.pause();
      }
    });
  }, {
    threshold: 0.5
  });

  videos.forEach(video => {
    observer.observe(video);
  });
});

window.addEventListener('load', function () {
  document.body.classList.remove('loading');
});