export const Start = () => {
  const numbers = [];


  for (let i = 0; i <27; i++) {
    let ran = Math.floor(Math.random() * 9 + 1);
    let pos = Math.floor(Math.random() * 27);
    while (numbers[pos] !== undefined) {
      pos = Math.floor(Math.random() * 27);
    }
    numbers[pos] = ran;
  }
  return numbers;
};
