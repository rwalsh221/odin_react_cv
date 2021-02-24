import React, { useState } from 'react';

import Button from '../../../UI/Button/Button';
import classes from './SavedCvInputs.module.css';

const SavedCvInput = (props) => {
  const [edit, setEdit] = useState({ style: '', content: 'EDIT' });

  if (
    !props.edit &&
    edit.style === 'var(--secondary-background-color-yellow)'
  ) {
    setEdit({ style: '', content: 'EDIT' });
  }

  const editHandler = (e) => {
    props.click(e);
    if (!props.edit) {
      setEdit({
        style: 'var(--secondary-background-color-yellow)',
        content: 'DEL',
      });
    }
  };

  return (
    <div className={classes.savedCvInput} id={props.id}>
      <div
        style={{ backgroundColor: edit.style }}
        className={classes.savedCvInput__content}
      >
        <h4>{props.title} </h4>
        <h4>{props.place}</h4>
      </div>
      <Button
        btnType={'btnEdit'}
        btnLabel={edit.content}
        click={(e) => editHandler(e)}
        id={props.id}
      />
    </div>
  );
};

export default SavedCvInput;
