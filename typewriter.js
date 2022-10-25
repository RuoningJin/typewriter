const setTime = (inputSentence, inputTime) => {
  for (const char of inputSentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, inputTime);
    inputTime += 50;
  }

  setTimeout(() => {
    process.stdout.write('\n');
  }, inputTime);

};


const sentence = "hello there from lighthouse labs hahaha it worked";
const time = 0;
setTime(sentence, time);

