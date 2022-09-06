function hundredTwoHundred() {
  const result = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      result.push("LoopyLighthouse");
    } else if (i % 3 === 0) {
      result.push("Loopy");
    } else if (i % 4 === 0) {
      result.push("Lighthouse")
    } else {
      result.push(i)
    }
  }
  return result;
}

console.log(hundredTwoHundred());