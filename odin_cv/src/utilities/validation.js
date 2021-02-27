export const validateForm = (e) => {
  let pass = true;
  let valArray = [];
  for (let i = 0; i < e.target.length; i++) {
    if (e.target[i].tagName === 'INPUT' || e.target[i].tagName === 'SELECT') {
      if (e.target[i].value === '') {
        document.getElementById(`${e.target[i].id}`).style.border =
          '2px solid red';
        valArray.push(false);
      }
    }
  }

  if (valArray.indexOf(false) !== -1) pass = false;
  return pass;
};

export const clearValidation = (id) => {
  const element = document.getElementById(`${id}`);
  for (let i = 0; i < element.length; i++) {
    if (element[i].tagName === 'INPUT' || element[i].tagName === 'SELECT') {
      document.getElementById(`${element[i].id}`).style.border = '';
    }
  }
};
