export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => results.map((result) => {
      if (result.status === 'fulfilled') {
        return { status: 'success', value: result.value };
      }
      return { status: 'error', value: result.reason };
    }));
}
