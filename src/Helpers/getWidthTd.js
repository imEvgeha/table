const getWidthTd = (event, trWidth, rowsArr, counter, helper) => {
  const length = event.target.value.length;
  if (length > trWidth && rowsArr.length >= 25 && counter < 2) {
    helper(length);
  }
  if (
    length > trWidth &&
    rowsArr.length >= 20 &&
    counter < 4 &&
    rowsArr.length < 25
  ) {
    helper(length);
  }
  if (
    length > trWidth &&
    rowsArr.length >= 15 &&
    counter < 6 &&
    rowsArr.length < 20
  ) {
    helper(length);
  }
  if (
    length > trWidth &&
    rowsArr.length >= 10 &&
    counter < 10 &&
    rowsArr.length < 15
  ) {
    helper(length);
  }
  if (
    length > trWidth &&
    rowsArr.length >= 5 &&
    counter < 19 &&
    rowsArr.length < 10
  ) {
    helper(length);
  }
  if (
    length > trWidth &&
    rowsArr.length >= 1 &&
    counter < 40 &&
    rowsArr.length < 5
  ) {
    helper(length);
  }
};

export default getWidthTd;
