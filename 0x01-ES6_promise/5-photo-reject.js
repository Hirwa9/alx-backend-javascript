export default function uploadPhoto(fileName) {
  return Promise((reject) => {
    reject(Error(`$${fileName} cannot be processed`));
  });
}
