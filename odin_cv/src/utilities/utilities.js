export const getObjById = (arr, id) => {
  const newIndexedArr = arr.map((element) => {
    return element.id;
  });

  return arr[newIndexedArr.indexOf(id * 1)];
};

export const setLocalStorage = (storageName, arr) => {
  localStorage.setItem(`${storageName}`, JSON.stringify(arr));
};

export const retrieveLocalStorage = (storageName, arr) => {
  let retrieveData = localStorage.getItem(`${storageName}`);
  if (retrieveData !== null) {
    arr = JSON.parse(retrieveData);
  }
};
