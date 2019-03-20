#!/usr/bin/env node

const greatestCommonDivisor = (m, n) => (n === 0 ? m : greatestCommonDivisor(n, m % n));
const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export { greatestCommonDivisor, getRandomNumber };
