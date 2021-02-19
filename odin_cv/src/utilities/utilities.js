export const getObjById = (arr, id) => {
  const newIndexedArr = arr.map((element) => {
    return element.id;
  });

  return arr[newIndexedArr.indexOf(id * 1)];
};

export const setLocalStorage = (storageName, data) => {
  localStorage.setItem(`${storageName}`, JSON.stringify(data));
};

export const retrieveLocalStorage = (storageName) => {
  let retrieveData = localStorage.getItem(`${storageName}`);
  if (retrieveData !== null) {
    return JSON.parse(retrieveData);
  }
};
