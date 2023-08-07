export const NumberCheck = (playersChoice) => {
  console.log('Add up of the players choice : ', playersChoice[0].number + playersChoice[1].number)

  if (
    playersChoice[0].number === playersChoice[1].number ||
    playersChoice[0].number + playersChoice[1].number === 10
  ) {
    if (
      playersChoice[0].index === playersChoice[1].index - 9 ||
      playersChoice[0].index === playersChoice[1].index + 9
    ) {
      console.log("Numbers can be deleted, points added to the player");
    } else if (
      playersChoice[0].index === playersChoice[1].index - 10 ||
      playersChoice[0].index === playersChoice[1].index + 10
    ) {
      console.log("Numbers can be deleted, points added to the player");
    } else if (
      playersChoice[0].index === playersChoice[1].index - 8 ||
      playersChoice[0].index === playersChoice[1].index + 8
    ) {
      console.log("Numbers can be deleted, points added to the player");
    } else if (
      playersChoice[0].index === playersChoice[1].index - 1 ||
      playersChoice[0].index === playersChoice[1].index + 1
    ) {
      console.log("Numbers can be deleted, points added to the player");
    }
  } else {
    console.log("Numbers are not matching");
  }
};
