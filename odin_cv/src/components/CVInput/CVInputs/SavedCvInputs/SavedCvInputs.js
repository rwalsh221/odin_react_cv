import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../UI/Button/Button';
import classes from './SavedCvInputs.module.css';

const SavedCvInput = ({
  titleProps,
  placeProps,
  idProps,
  clickProps,
  editProps,
}) => {
  const [edit, setEdit] = useState({ style: '', content: 'EDIT' });

  if (!editProps && edit.style === 'var(--secondary-background-color-yellow)') {
    setEdit({ style: '', content: 'EDIT' });
  }

  const editHandler = (e) => {
    clickProps(e);
    if (!editProps) {
      setEdit({
        style: 'var(--secondary-background-color-yellow)',
        content: 'DEL',
      });
    }
  };

  return (
    <div className={classes.savedCvInput} id={idProps}>
      <div
        style={{ backgroundColor: edit.style }}
        className={classes.savedCvInput__content}
      >
        <h4>{titleProps}</h4>
        <h4>{placeProps}</h4>
      </div>
      <Button
        btnType="btnEdit"
        btnLabel={edit.content}
        click={(e) => editHandler(e)}
        id={idProps}
      />
    </div>
  );
};

SavedCvInput.propTypes = {
  editProps: PropTypes.bool.isRequired,
  clickProps: PropTypes.func.isRequired,
  idProps: PropTypes.string.isRequired,
  titleProps: PropTypes.string.isRequired,
  placeProps: PropTypes.string.isRequired,
};

export default SavedCvInput;
