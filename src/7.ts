function getRandomTSCode(): string {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '1234567890';
  let randomCode = '';
  for (let i = 0; i < 10; i++) {
    randomCode += letters.charAt(Math.floor(Math.random() * letters.length));
    randomCode += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return randomCode;
}
