export const NumberCheck = (playersChoice, numbers) => {
  let minId = 0;
  let maxId = 0;
  let times8 = 0;
  let times9 = 0;
  let times10 = 0;
  let found = false;
  const result = { res: true, reward: 0 };
  if (playersChoice[0].number.id > playersChoice[1].number.id) {
    minId = playersChoice[1].number.id;
    maxId = playersChoice[0].number.id;
  } else {
    minId = playersChoice[0].number.id;
    maxId = playersChoice[1].number.id;
  }

  // times8 = Math.trunc(maxId / 8);
  // times9 = Math.trunc(maxId / 9);
  // times10 = Math.trunc(maxId / 10);

  times8 = Math.trunc((maxId - minId) / 8);
  times9 = Math.trunc((maxId - minId) / 9);
  times10 = Math.trunc((maxId - minId) / 10);
  if (
    playersChoice[0].number.num === playersChoice[1].number.num ||
    playersChoice[0].number.num + playersChoice[1].number.num === 10
  ) {
    if (maxId - minId === times8 * 8 || maxId - minId === 8) {
      for (let i = minId + 8; i < maxId; i += 8) {
        if (numbers[i].enabled === true) {
          found = true;
        }
      }
      if (found === true) {
        result.res = false;
        result.reward = -5;
        return result;
      } else {
        result.res = true;
        result.reward =
          playersChoice[0].number.num + playersChoice[1].number.num;
        return result;
      }
    } else if (maxId - minId === times9 * 9 || maxId - minId === 9) {
      for (let i = minId + 9; i < maxId; i += 9) {
        if (numbers[i].enabled === true) {
          found = true;
        }
      }
      if (found === true) {
        result.res = false;
        result.reward = -5;
        return result;
      } else {
        result.res = true;
        result.reward =
          playersChoice[0].number.num + playersChoice[1].number.num;
        return result;
      }
    } else if (maxId - minId === times10 * 10 || maxId - minId === 10) {
      for (let i = minId + 10; i < maxId; i += 10) {
        if (numbers[i].enabled === true) {
          found = true;
        }
      }
      if (found === true) {
        result.res = false;
        result.reward = -5;
        return result;
      } else {
        result.res = true;
        result.reward =
          playersChoice[0].number.num + playersChoice[1].number.num;
        return result;
      }
    } else if (maxId - minId === 1) {
      result.res = true;
      result.reward = playersChoice[0].number.num + playersChoice[1].number.num;
      return result;
    } else if (maxId - minId >= 1) {
      for (let i = minId + 1; i < maxId; i++) {
        if (numbers[i].enabled) {
          found = true;
        }
        if (found === true) {
          result.res = false;
          result.reward = -5;
          return result;
        } else {
          result.res = true;
          result.reward =
            playersChoice[0].number.num + playersChoice[1].number.num;
          return result;
        }
      }
    } else {
      result.res = false;
      result.reward = -5;
      return result;
    }
  } else {
    result.res = false;
    result.reward = -5;
    return result;
  }
};
