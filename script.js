(function () {
  const audio = document.getElementById('bgAudio');
  const btn = document.getElementById('musicToggle');

  if (!audio || !btn) return;

  btn.addEventListener('click', function () {
    if (audio.paused) {
      audio.play().catch(function () {
        // Playback blocked; ignore silently, user can tap again.
      });
    } else {
      audio.pause();
    }
  });

  audio.addEventListener('play', function () {
    btn.classList.add('is-playing');
    btn.setAttribute('aria-pressed', 'true');
    btn.setAttribute('aria-label', 'Jeda musik');
  });

  audio.addEventListener('pause', function () {
    btn.classList.remove('is-playing');
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-label', 'Putar musik');
  });
})();
