import {WORDS} from "../../constants/words"

function random(n) {
  return Math.floor(Math.random() * n)
}

function GetWord() {
  let word = WORDS[random(WORDS.length)];
  return word;
}

export default GetWord