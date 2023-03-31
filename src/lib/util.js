function pad(num) {
  return String(num).padStart(2, '0');
}

export function formatDuration(timeElapsed) {
  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed % 60;
  return pad(minutes) + ':' + pad(seconds);
}
