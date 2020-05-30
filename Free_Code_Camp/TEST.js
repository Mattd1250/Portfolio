function myReplace(str, before, after) {
  let newStr = str.replace(before, after);
  console.log(newStr);
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
