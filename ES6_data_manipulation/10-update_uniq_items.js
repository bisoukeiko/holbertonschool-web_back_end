export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  map.forEach((val, key, map) => {
    if (val === 1) {
      map.set(key, 100);
    }
  });
}
