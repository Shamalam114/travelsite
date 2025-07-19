// umrah-audio.js

// Create audio object and enable looping
const umrahAudio = new Audio('audiovideo/labbaik_allahuma.mp3');
umrahAudio.loop = true;

// Play audio when Umrah link is clicked
document.addEventListener('DOMContentLoaded', () => {
  const umrahLink = document.querySelector('.umrah-link');

  if (umrahLink) {
    umrahLink.addEventListener('click', () => {
      sessionStorage.setItem('playUmrahAudio', 'true');
    });
  }

  // Remove play flag if any other link is clicked
  document.querySelectorAll('a:not(.umrah-link)').forEach(link => {
    link.addEventListener('click', () => {
      sessionStorage.removeItem('playUmrahAudio');
    });
  });

  // On load, check if we should play the audio
  if (sessionStorage.getItem('playUmrahAudio') === 'true') {
    umrahAudio.play().catch(err => {
      console.warn('Autoplay blocked:', err);
    });
  } else {
    umrahAudio.pause();
    umrahAudio.currentTime = 0;
  }
});
