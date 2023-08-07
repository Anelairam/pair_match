export const NumberCheck = (playersChoice) => {
  console.log(
    "Add up of the players choice : ",
    playersChoice[0].number + playersChoice[1].number
  );
  const indexOne = playersChoice[0].index;
  const indexTwo = playersChoice[1].index;

  if (
    playersChoice[0].number === playersChoice[1].number ||
    playersChoice[0].number + playersChoice[1].number === 10
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
