const name = "himank"
const repoCount = 50

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('mathur')

console.log(gameName[0]);
console.log(gameName.___proto___);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("h"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   himank   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://himank.com/himankcoder"
console.log(url.replace("coder","-"));
console.log(url.includes("coder"));
console.log(gameName.split('-'));