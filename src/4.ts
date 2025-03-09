function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const num = getRandomInt(10);
console.log(`The random integer between 1 and 10 is ${num}`);
