import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/*
export default async function handleProfileSignup(firstName, lastName, fileName) {
  const result = [];
  try {
    const user = await signUpUser(firstName, lastName);
    result.push({ status: 'fulfilled', value: user });
    await uploadPhoto(fileName);
  } catch (err) {
    result.push({ status: 'rejected', value: err.message });
  }
  return result;
}
*/

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(filename),
  ]).then((res) => res.map((item) => ({
    status: item.status,
    value: item.status === 'fulfilled' ? item.value : String(item.reason),
  })));
}
