import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  try {
    const [photoUploadRes, createUserRes] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${photoUploadRes.body} ${createUserRes.firstName} ${createUserRes.lastName}`);
  } catch (error) {
    console.error('Signup system offline');
  }
}
