import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = await signUpUser(firstName, lastName)
    .then((response) => ({ status: response }));
  const photoPromise = await uploadPhoto(fileName)
    .catch((error) => ({ status: error }));
  return [userPromise, photoPromise];
}
