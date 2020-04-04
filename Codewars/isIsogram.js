// My Answer
function isIsogram(str) {
  let lettersToCheck = str
    .toLowerCase()
    .split("")
    .sort();
  console.log(lettersToCheck);
  let isogram = true;
  console.log(isogram);
  for (let i = 0; i < lettersToCheck.length; i++) {
    if (lettersToCheck[i] === "") {
      break;
    } else {
      let nextLetter = i + 1;
      if (lettersToCheck[i] === lettersToCheck[nextLetter]) {
        isogram = false;
        console.log(lettersToCheck[i]);
        console.log(lettersToCheck[nextLetter]);
      }
    }
  }
  return isogram;
}

// Best Answer
function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}

// Better Answer
function isIsogram(str) {
  letters = new Set(str.toLowerCase()).size;
  return letters;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));
