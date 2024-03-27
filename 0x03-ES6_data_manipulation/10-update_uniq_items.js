export default function updateUniqueItems(map) {
  const updatedMap = new Map();
  for (const [key, val] of map) {
    if (val === 1) {
      updatedMap.set(key, 100);
    } else {
      updatedMap.set(key, val);
    }
  }
  return updatedMap;
}
