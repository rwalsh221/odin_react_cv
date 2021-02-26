const validateForm = (e) => {
  let pass = true;
  let valArray = [];
  console.log(e.target.length);
  for (let i = 0; i < e.target.length; i++) {
    console.log('valloop');
    if (e.target[i].tagName === 'INPUT' || e.target[i].tagName === 'SELECT') {
      if (e.target[i].value === '') {
        // console.log('error', target.value);
        console.log('error');
        console.log(e.target.id);
        document.getElementById(`${e.target[i].id}`).style.border =
          '2px solid red';
        valArray.push(false);
      }
    }
  }
  console.log(valArray);
  console.log(valArray.indexOf(false));
  if (valArray.indexOf(false) !== -1) pass = false;
  console.log(pass);
  return pass;
};

export default validateForm;
