export default function cleanSet(set, startString) {
  const arrFromSet = Array.from(set);
  const foundStrArray = [];
  if (!startString || startString.length < 1) {
    return;
  }
  const startStringLen = startString.length;
  let foundStr = '';
  arrFromSet.forEach((element) => {
    if (element.startsWith(startString)) {
      const toAppend = element.slice(startStringLen);
      foundStrArray.push(toAppend);
    }
  });
  foundStr = foundStrArray.join('-');
  return foundStr;
}
