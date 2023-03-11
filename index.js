const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let outputOne = document.getElementById("outputOne");
let outputTwo = document.getElementById("outputTwo");

let strength = document.getElementsByName("strength");

function randomCharacter() {
  let randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

let generatePassword = document.getElementById("generatePassword");

generatePassword.addEventListener("click", function () {
  let passwordOne = "";
  let passwordTwo = "";
  passwordOne = passwordCreator();
  passwordTwo = passwordCreator();
  outputOne.textContent = passwordOne;
  outputTwo.textContent = passwordTwo;
});

function passwordCreator() {
  let length = getLength();
  let temp = "";
  for (let i = 0; i < length; i++) {
    temp += randomCharacter();
  }
  return temp;
}

function getLength() {
  for (let i = 0; i < strength.length; i++) {
    if (strength[i].checked) {
      return (i + 1) * 5;
    }
  }
}
