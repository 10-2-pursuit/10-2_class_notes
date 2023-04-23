const doSomething = () => {
  let obj = {
    1: 2,
  };
};


const disemvowell = (str) => {
    let noVowels = "";
    let vowels = "aeiouAEIOU";

    for (let char of str) {
        if (!vowels.includes(char)) {
            noVowels += char
        }
    }
    return noVowels
} 

disemvowell("hello from debugger");