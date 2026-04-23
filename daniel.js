let randomNum = Math.floor(Math.random() * 50) + 1;
if (randomNum % 3 === 0) {
  console.log("fizz");
} else if (randomNum % 5 === 0) {
  console.log("buzz");
}
