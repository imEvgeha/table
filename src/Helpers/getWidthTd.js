const getWidthTd = (event, trWidth, elemArr, counter, helper) => {
  const length = event.target.value.length;
  if (length > trWidth && elemArr.length >= 25 && counter < 2) {
    helper(length);
  }
  if (
    length > trWidth &&
    elemArr.length >= 20 &&
    counter < 4 &&
    elemArr.length < 25
  ) {
    helper(length);
  }
  if (
    length > trWidth &&
    elemArr.length >= 15 &&
    counter < 6 &&
    elemArr.length < 20
  ) {
    helper(length);
  }
  if (
    length > trWidth &&
    elemArr.length >= 10 &&
    counter < 10 &&
    elemArr.length < 15
  ) {
    helper(length);
  }
  if (
    length > trWidth &&
    elemArr.length >= 5 &&
    counter < 19 &&
    elemArr.length < 10
  ) {
    helper(length);
  }
  if (
    length > trWidth &&
    elemArr.length >= 1 &&
    counter < 40 &&
    elemArr.length < 5
  ) {
    helper(length);
  }
  if (
    length > trWidth &&
    elemArr.length >= 1 &&
    counter < 60 &&
    elemArr.length < 3
  ) {
    helper(length);
  }
};

export default getWidthTd;
