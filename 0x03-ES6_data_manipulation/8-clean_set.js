export default function cleanSet(set, startString = '') {
  const match = [];

  if (startString.length && (set instanceof Set) && (typeof startString === 'string')) {
    set.forEach((string) => {
      if (string && string.startsWith(startString)) {
        match.push(string.slice(startString.length));
      }
    });
  }
  return match.join('-');
}
