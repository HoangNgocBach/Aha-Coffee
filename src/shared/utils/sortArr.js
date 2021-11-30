export const sortArray = (array, key, asc = true) => {
  let ascNum = asc ? 1 : -1;
  array.sort((a, b) => {
    if (a[key] < b[key]) return ascNum;
    if (a[key] > b[key]) return -ascNum;
    return 0;
  });
  return array;
};
