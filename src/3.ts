import { fetch } from 'node-fetch';

export async function getRandomCode() {
  const res = await fetch('https://projectschoolscience.com/api/random-code');
  const data = await res.json();
  return data.code;
}
