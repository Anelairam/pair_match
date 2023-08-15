export const LinesCheck = (numbers) => {
  let lineFound = false;
  let keep = 0;
  for (let i = 0; i < numbers.length; i += 9) {
    let counter = 0;
    for (let j = i; j < i + 9; j++) {
      if (numbers[j].enabled === false) {
        counter++;
        if (counter === 9){
          keep = j;
        }
      }
    }
    if (counter === 9) {
      lineFound = true;
    }
  }
  if (lineFound === true) {
    console.log("keep value : ", keep)
    numbers.splice(keep-8, 9)
    console.log("numbers after splice ", numbers)
  } else {
    console.log("no line found");
  }
  return {lineFound: lineFound, newnums: numbers};
};
