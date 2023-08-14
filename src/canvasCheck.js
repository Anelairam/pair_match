export const CanvasCheck = (numbers) => {
  let result = false;
  let counter = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i].enabled === true) {
      counter++;
    }
    if (
      numbers[i].num === numbers[i + 1].num ||
      numbers[i].num + numbers[i + 1].num === 10
    ) {
      if (
        numbers[i].id === numbers[i + 1].id - 9 ||
        numbers[i].id === numbers[i + 1].id + 9
      ) {
        result = true;
      } else if (
        numbers[i].id === numbers[i + 1].id - 10 ||
        numbers[i].id === numbers[i + 1].id + 10
      ) {
        result = true;
      } else if (
        numbers[i].id === numbers[i + 1].id - 8 ||
        numbers[i].id === numbers[i + 1].id + 8
      ) {
        result = true;
      } else if (
        numbers[i].id === numbers[i + 1].id - 1 ||
        numbers[i].id === numbers[i + 1].id + 1
      ) {
        result = true;
        break;
      }
    } else {
      result = false;
    }
  }
  return { result: result, counter: counter };
};
