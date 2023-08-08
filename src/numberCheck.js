export const NumberCheck = (playersChoice) => {
  const indexOne = playersChoice[0].number.id;
  const indexTwo = playersChoice[1].number.id;

  if (
    playersChoice[0].number.num === playersChoice[1].number.num ||
    playersChoice[0].number.num + playersChoice[1].number.num === 10
  ) {
    if (indexOne === indexTwo - 9 || indexOne === indexTwo + 9) {
      console.log("Numbers can be deleted, points added to the player");
      return true;
    } else if (indexOne === indexTwo - 10 || indexOne === indexTwo + 10) {
      console.log("Numbers can be deleted, points added to the player");
      return true;
    } else if (indexOne === indexTwo - 8 || indexOne === indexTwo + 8) {
      console.log("Numbers can be deleted, points added to the player");
      return true;
    } else if (indexOne === indexTwo - 1 || indexOne === indexTwo + 1) {
      console.log("Numbers can be deleted, points added to the player");
      return true;
    }
  } else {
    console.log("Numbers are not matching");
    return false;
  }
};
