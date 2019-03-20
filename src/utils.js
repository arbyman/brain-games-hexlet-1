#!/usr/bin/env node

const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
export default getRandomNumber;
