export const formatRemaining = (reservedUntil) => {
  if (!reservedUntil) return null;
  const ms = reservedUntil - Date.now();
  if (ms <= 0) return "expired";
  const minutes = Math.ceil(ms / 60000);
  const seconds = Math.ceil((ms % 60000) / 1000);
  return `${minutes} min ${seconds} sec remaining`;
};
