export const AddNumbers = (numbers) => {
  let additionalNumbers = [];
  let counter = 0;
  numbers.forEach((number) => {
    if (number.enabled === true) {
      counter++;
    }
  });

  numbers.forEach((number) => {
    if (number.enabled === true) {
      let id = Math.floor(Math.random() * counter);
      let found = additionalNumbers.some((num) => num.id === id);
      while (found) {
        id = Math.floor(Math.random() * counter);
        found = additionalNumbers.some((num) => num.id === id);
      }
      additionalNumbers.push({ enabled: true, num: number.num, id: id });
    }
  });

  additionalNumbers = numbers.concat(additionalNumbers);
  return additionalNumbers;
};
