export default function uploadPhoto(fileName) {
  return new Promise(() => {
    throw new Error(`${fileName} cannot be processed`);
  });
}
