export default function cleanSet(set, startString) {
  let returnString = '';

  if (startString && typeof startString === 'string') {
    for (const string of set) {
      if (string.startsWith(startString)) {
        returnString += string.substr(startString.length);
        returnString += '-';
      }
    }
  }

  return returnString.slice(0, -1);
}
