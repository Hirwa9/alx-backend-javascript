export default function cleanSet(set, startString) {
  const foundStrArray = [];
  if (!startString || startString.length < 1) {
    return '';
  }
  const startStringLen = startString.length;
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      const toAppend = element.slice(startStringLen);
      foundStrArray.push(toAppend);
    }
  });
  return foundStrArray.join('-');
}
