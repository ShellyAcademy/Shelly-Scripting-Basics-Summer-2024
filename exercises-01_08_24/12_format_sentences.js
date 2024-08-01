let input = "I have lots of Shelly devices. i am so happy!";

input = input.toLowerCase();

let sentences = input.split(". ");

for (let i = 0; i < sentences.length; i++){
  let currentSentence = sentences[i];
  
  if(currentSentence.length > 0){
      sentences[i] = currentSentence.substring(0,1).toUpperCase() + currentSentence.substring(1);
  }
}

let combinedSentences = sentences.join(". ");

console.log(combinedSentences);