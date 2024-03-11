import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  try {
    const [photoUploadRes, createUserRes] = Promise.all([uploadPhoto, createUser]);
    console.log(`${photoUploadRes.body} ${createUserRes.firstName} ${createUserRes.lastName}`);
  } catch (error) {
    console.error('Signup system offline');
  }
}
