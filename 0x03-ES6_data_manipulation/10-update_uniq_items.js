export default function updateUniqueItems(map) {
  // Checking if the argument is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  // Iterating over each entry and update
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
  // Return the updated map
  return map;
}
