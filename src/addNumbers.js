export const AddNumbers = (numbers) => {
  let additionalNumbers = [];
  let maxLimit = numbers.length * 2 - numbers.length;
  let minLimit = numbers.length;

  numbers.forEach((number) => {
    let id = Math.floor(Math.random() * maxLimit + minLimit);
    let found = additionalNumbers.some((num) => num.id === id);
    while (found) {
      id = Math.floor(Math.random() * maxLimit + minLimit);
      found = additionalNumbers.some((num) => num.id === id);
    }
    additionalNumbers.push({ enabled: true, num: number.num, id: id });
  });
  console.log('Additional numbers before concatination : ', additionalNumbers);

  // (max - min) + min
  // Might be an issue with sorting on testing it was working fine but before it was not keep an eye
  additionalNumbers = numbers.concat(additionalNumbers);
  // console.log("Additional numbers after concatinatio : ", additionalNumbers);
  additionalNumbers.sort((a ,b)=> a.id -b.id);
  console.log("Additional numbers after sorting : ", additionalNumbers);

  return additionalNumbers;
};
