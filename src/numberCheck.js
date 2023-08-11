export const NumberCheck = (playersChoice) => {
  const indexOne = playersChoice[0].number.id;
  const indexTwo = playersChoice[1].number.id;
  const result = {'res': true, 'reward': 0}
  if (
    playersChoice[0].number.num === playersChoice[1].number.num ||
    playersChoice[0].number.num + playersChoice[1].number.num === 10
  ) {
    if (indexOne === indexTwo - 9 || indexOne === indexTwo + 9) {
      result.res=true
      result.reward = playersChoice[0].number.num + playersChoice[1].number.num
      return result;
    } else if (indexOne === indexTwo - 10 || indexOne === indexTwo + 10) {
      result.res=true
      result.reward = playersChoice[0].number.num + playersChoice[1].number.num
      return result;
    } else if (indexOne === indexTwo - 8 || indexOne === indexTwo + 8) {
      result.res=true
      result.reward = playersChoice[0].number.num + playersChoice[1].number.num
      return result;
    } else if (indexOne === indexTwo - 1 || indexOne === indexTwo + 1) {
      result.res=true
      result.reward = playersChoice[0].number.num + playersChoice[1].number.num
      return result;
    }
  } else {
    result.res=false
      result.reward = -5
      return result;
  }
};
