import React from 'react';

import CVPreviewSectionTwo from './CVPreviewSectionTwo/CVPreviewSectionTwo';
import CVPreviewSectionThree from './CVPreviewSectionThree/CVPreviewSectionThree';

import classes from './CVPreview.module.css';

const cvPreview = (props) => {
  return (
    <main className={classes.main}>
      <div className={classes.previewCV}>
        <div className={classes.sectionOne}></div>
        <CVPreviewSectionTwo />
        <CVPreviewSectionThree />
      </div>
    </main>
  );
};

export default cvPreview;
