true / false
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
console.log(getRandomString());
true - true
const getUniqueValues = array => [...new Set(array)];
42 - grape
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const variableName = getRandomNumber();
const findLargestNumber = numbers => Math.max(...numbers);
9,60,60,65,84,94,6,70,94,55,15,43,84,7,8,25,35,54,71,59,42,91,58,24,27,28,8,88,33,45,40,75,28,23,37,45,38,40,72,67,28,63,41,3,32,81,38,93,18,36,70,31,22,25,70,5,22,80,19,93,82,91,96,49,90,98,48,9,74,57,40,94,95,93,21,7,27,50,52,70,50,77,79,94,55,80,21,86,91,6,55,35,69 - 59,13,96,58,66,23,92,51,80,90,57,14,84,56,86,17,48,5,26,58,43,61,96,37,20,79,90,53,24,94,42,98,82,85,12,82,43,57,11,24,57,17,78,8,12,88,69,60,25,39,9,9,65,66,0,86,79,67,83,77,30,79,47,28,94,1,47,43,89,37,84,66,15,41,79,64,27,9,77,92,20,50,26,48,50,28,7,25,5,45,19,7,65,40,96,10,1,38

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
let result = performOperation(getRandomNumber(), getRandomNumber());
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const reverseWords = str => str.split(" ").reverse().join(" ");

