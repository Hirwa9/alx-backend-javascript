export default function cleanSet(set, startString) {
  const foundStrArray = [];
  const startStringLen = startString.length;
  if (startStringLen < 1) {
    return '';
  }
  let foundStr = '';
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      const toAppdend = element.slice(startStringLen);
      foundStrArray.push(toAppdend);
    }
  });
  foundStr = foundStrArray.join('-');
  return foundStr;
}
