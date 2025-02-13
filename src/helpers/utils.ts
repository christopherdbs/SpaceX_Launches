export function getCount(launchDate: number): string {
  const count = launchDate - Date.now() * 0.001;
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  if (count > 0) {
    return (
      Math.floor(count / day) +
      ' d ' +
      Math.floor((count % day) / hour) +
      ' h ' +
      Math.floor((count % hour) / minute) +
      ' m ' +
      Math.floor(count % minute) +
      ' s'
    );
  }
  return 'out of date';
}

export function getFormatedDate(date: Date): string {
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}
