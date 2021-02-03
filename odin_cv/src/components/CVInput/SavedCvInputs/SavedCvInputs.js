import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import classes from './SavedCvInputs.module.css';

const SavedCvInput = (props) => {
  const [edit, setEdit] = useState({ style: '', content: 'EDIT' });

  const editHandler = () => {
    if (edit.style === '') {
      setEdit({ style: '#5f2114', content: 'DEL' });
    } else {
      setEdit({ style: '', content: 'EDIT' });
    }
  };

  return (
    <div className={classes.savedCvInput}>
      <div
        style={{ backgroundColor: edit.style }}
        className={classes.savedCvInput__content}
      >
        <h4>{props.title} </h4>
        <h4>{props.place}</h4>
      </div>
      <Button btnType={'btnEdit'} btnLabel={edit.content} click={editHandler} />
    </div>
  );
};

export default SavedCvInput;
