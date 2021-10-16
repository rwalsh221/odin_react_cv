export const getObjById = (arr, id) => {
  const newIndexedArr = arr.map((element) => element.id);

  return arr[newIndexedArr.indexOf(id * 1)];
};

export const setLocalStorage = (storageName, data) => {
  localStorage.setItem(`${storageName}`, JSON.stringify(data));
};

export const retrieveLocalStorage = (storageName) => {
  const retrieveData = localStorage.getItem(`${storageName}`);
  if (retrieveData !== null) {
    return JSON.parse(retrieveData);
  }
};
