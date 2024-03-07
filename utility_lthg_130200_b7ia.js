orange

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
99 - false
const getRandomSubset = (array, size) => array.slice(0, size);
const isEven = num => num % 2 === 0;

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

kiwi

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const removeDuplicates = array => Array.from(new Set(array));
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

const filterEvenNumbers = numbers => numbers.filter(isEven);
orange

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const formatDate = date => new Date(date).toLocaleDateString();
true - 60,62,72,92,91

const getRandomElement = array => array[getRandomIndex(array)];

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
