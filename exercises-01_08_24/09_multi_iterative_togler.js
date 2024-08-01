let input = ["Softuniadan", "Bulgaria", "Sofia"];
let isAllEndingWith_a = true;

for(let i = 0; i < input.length; i++){
  let currentWord = input[i];
  let lastLetterOfTheCurrentWord = currentWord[currentWord.length - 1];
  if (lastLetterOfTheCurrentWord !== "a"){
    isAllEndingWith_a = false;
    break;
  }
}

console.log("Do all words ends with 'a'?", isAllEndingWith_a);
if(isAllEndingWith_a == true){
  Shelly.call("Switch.Toggle", {id: 0});
}