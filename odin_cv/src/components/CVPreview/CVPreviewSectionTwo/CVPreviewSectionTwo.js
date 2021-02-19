import React from 'react';

import classes from './CVPreviewSectionTwo.module.css';

const cvPreview = (props) => {
  const additionalContent = props.stateAdditional.map((element) => {
    return (
      <li key={element.title}>
        <h4 className={classes.subHeading}>{element.title}</h4>
        <p className={classes.subContent}>Level: {element.level}</p>
      </li>
    );
  });

  return (
    <section className={classes.sectionTwo}>
      <div className={classes.imageContainer}>
        <img
          src="../../../../img/lester.jpg"
          alt="personal"
          className={classes.imagePersonal}
        ></img>
      </div>
      <div className={classes.personalContainer}>
        <h3 className={classes.heading}>Contact</h3>
        <ul>
          <li>
            <h4 className={classes.subHeading}>Address:</h4>
            <p className={classes.subContent}>
              {props.statePersonalAddressStreet}
            </p>
            <p className={classes.subContent}>
              {props.statePersonalAddressCity}
            </p>
          </li>
          <li>
            <h4 className={classes.subHeading}>Phone:</h4>
            <p className={classes.subContent}>
              {props.statePersonalPhoneNumber}
            </p>
          </li>
          <li>
            <h4 className={classes.subHeading}>Email:</h4>
            <p className={classes.subContent}>{props.statePersonalEmail}</p>
          </li>
        </ul>
      </div>
      <div className={classes.skillsContainer}>
        <h3 className={classes.heading}>Additional Skills</h3>
        <ul>{additionalContent}</ul>
      </div>
      <div className={classes.refContainer}>
        <h3 className={classes.heading}>References</h3>
        <ul>
          <li>
            <h4 className={classes.subHeading}>Jimmy Mcnulty</h4>
            <p className={classes.subContent}>Location: Baltimore</p>
          </li>
          <li>
            <h4 className={classes.subHeading}>Det. William 'Bunk' Moreland</h4>
            <p className={classes.subContent}>Location: Baltimore</p>
          </li>
          <li>
            <h4 className={classes.subHeading}>Sen. Clayton 'Clay' Davies</h4>
            <p className={classes.subContent}>Location: Baltimore</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default cvPreview;

/*<li>
            <h4 className={classes.subHeading}>Wire Tapping</h4>
            <p className={classes.subContent}>Level: Advanced</p>
          </li>
          <li>
            <h4 className={classes.subHeading}>Cribbing Numbers</h4>
            <p className={classes.subContent}>Level: Advanced</p>
          </li>
          <li>
            <h4 className={classes.subHeading}>Making Doll House Furniture</h4>
            <p className={classes.subContent}>Level: Advanced</p>
          </li>*/
