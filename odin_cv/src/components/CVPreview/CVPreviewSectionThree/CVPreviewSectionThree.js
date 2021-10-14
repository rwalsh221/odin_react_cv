import React from 'react';
import { loremIpsum } from 'react-lorem-ipsum';

import classes from './CVPreviewSectionThree.module.css';

const cvPreview = (props) => {
  const educationContent = props.stateEducation.map((element) => (
    <div
      key={`${element.title}${new Date().getMilliseconds() * Math.random()}`}
      className={classes.subEducationContainer}
    >
      <h4 className={classes.educationDate}>{element.date}</h4>
      <h4 className={classes.educationTitle}>{element.title}</h4>
      <h4 className={classes.educationLocation}>{element.location}</h4>
    </div>
  ));

  const employmentContent = props.stateEmployment.map((element) => (
    <div
      key={`${element.title}${new Date().getMilliseconds() * Math.random()}`}
      className={classes.subEmploymentContainer}
    >
      <h4 className={classes.employmentDate}>{element.date}</h4>
      <h4 className={classes.employmentTitle}>{element.title}</h4>
      <h4 className={classes.employmentEmployer}>{element.location}</h4>
      <p className={classes.employmentDescription}>
        {element.description === ''
          ? loremIpsum({ p: 1 })
          : element.description}
      </p>
    </div>
  ));

  return (
    <section className={classes.sectionThree}>
      <div className={classes.nameContainer}>
        <h2 className={classes.nameHeading}>{props.statePersonalName}</h2>
        <p className={classes.nameContent}>{props.statePersonalCurrentRole}</p>
      </div>
      <div className={classes.statementContainer}>
        <p>{loremIpsum({ p: 1 })}</p>
      </div>
      <div className={classes.employmentContainer}>
        <h3 className={classes.employmentHeading}>Employment</h3>
        {employmentContent}
      </div>
      <div className={classes.educationContainer}>
        <div className={classes.educationContainer}>
          <h3 className={classes.educationHeading}>Education</h3>
          {educationContent}
        </div>
      </div>
    </section>
  );
};

export default cvPreview;
