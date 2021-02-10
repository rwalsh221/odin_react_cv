export const getObjById = (arr, id) => {
  const newIndexedArr = arr.map((element) => {
    return element.id;
  });

  return arr[newIndexedArr.indexOf(id * 1)];
};
