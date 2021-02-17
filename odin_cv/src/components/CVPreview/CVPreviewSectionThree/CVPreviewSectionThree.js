import React from 'react';
import { loremIpsum } from 'react-lorem-ipsum';

import classes from './CVPreviewSectionThree.module.css';

const cvPreview = (props) => {
  return (
    <section className={classes.sectionThree}>
      <div className={classes.nameContainer}>
        <h2 className={classes.nameHeading}>Lester Freeman</h2>
        <p className={classes.nameContent}>Private Detective</p>
      </div>
      <div className={classes.statementContainer}>
        <p>{loremIpsum({ p: 1 })}</p>
      </div>
      <div className={classes.employmentContainer}>
        <h3 className={classes.employmentHeading}>Employment</h3>
        <div className={classes.subEmploymentContainer}>
          <h4 className={classes.employmentDate}>EMP DATE</h4>
          <h4 className={classes.employmentTitle}>EMP TITLE</h4>
          <h4 className={classes.employmentEmployer}>EMPLOYER</h4>
          <p className={classes.employmentDescription}>
            {loremIpsum({ p: 1 })}
          </p>
        </div>
        <div className={classes.subEmploymentContainer}>
          <h4 className={classes.employmentDate}>EMP DATE</h4>
          <h4 className={classes.employmentTitle}>EMP TITLE</h4>
          <h4 className={classes.employmentEmployer}>EMPLOYER</h4>
          <p className={classes.employmentDescription}>
            {loremIpsum({ p: 1 })}
          </p>
        </div>
        <div className={classes.subEmploymentContainer}>
          <h4 className={classes.employmentDate}>EMP DATE</h4>
          <h4 className={classes.employmentTitle}>EMP TITLE</h4>
          <h4 className={classes.employmentEmployer}>EMPLOYER</h4>
          <p className={classes.employmentDescription}>
            {loremIpsum({ p: 1 })}
          </p>
        </div>
      </div>
      <div className={classes.educationContainer}>
        <div className={classes.educationContainer}>
          <h3 className={classes.educationHeading}>Education</h3>
          <div className={classes.subEducationContainer}>
            <h4 className={classes.educationDate}>Ed DATE</h4>
            <h4 className={classes.educationTitle}>Ed TITLE</h4>
            <h4 className={classes.educationLocation}>ED LOCATION</h4>
          </div>
          <div className={classes.subEducationContainer}>
            <h4 className={classes.educationDate}>Ed DATE</h4>
            <h4 className={classes.educationTitle}>Ed TITLE</h4>
            <h4 className={classes.educationLocation}>ED LOCATION</h4>
          </div>
          <div className={classes.subEducationContainer}>
            <h4 className={classes.educationDate}>Ed DATE</h4>
            <h4 className={classes.educationTitle}>Ed TITLE</h4>
            <h4 className={classes.educationLocation}>ED LOCATION</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cvPreview;
