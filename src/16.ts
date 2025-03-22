function getRandomNumber(min: number = 0, max: number = 10): number {
    const range = max - min + 1;
    return Math.floor(Math.random() * range);
}
