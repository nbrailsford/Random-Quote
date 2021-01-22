import quotes from "./Quotes.js";

let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let button = document.querySelector(".random");
var checkRandNum = 0;

button.addEventListener("click", () => {
  let top = quotes.length;
  let randomizer = Math.floor(Math.random() * top);
  //check if quote is same as last click
  if ((randomizer == checkRandNum) & (randomizer > top)) {
    let count = 0;
    quote.innerHTML = quotes[count].quote;
    author.innerHTML = quotes[count].author;
    count++;
  } else {
    quote.innerHTML = quotes[randomizer].quote;
    author.innerHTML = quotes[randomizer].author;
  }
  checkRandNum = randomizer;
});
