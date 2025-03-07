function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

export const getRandomCode = (length: number): string => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += String.fromCharCode(getRandomInt(26) + 97);
  }
  return result;
};
