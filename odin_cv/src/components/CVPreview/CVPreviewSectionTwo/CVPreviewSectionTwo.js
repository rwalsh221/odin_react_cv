import React from 'react';

import classes from './CVPreviewSectionTwo.module.css';

const cvPreview = (props) => {
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
            <h4 className={classes.subHeading}>Address</h4>
            <p className={classes.subContent}>Baltimore</p>
          </li>
          <li>
            <h4 className={classes.subHeading}>Phone</h4>
            <p className={classes.subContent}>123456789</p>
          </li>
          <li>
            <h4 className={classes.subHeading}>Email</h4>
            <p className={classes.subContent}>email@email.com</p>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className={classes.skillsContainer}>
        <h3 className={classes.heading}>Additional Skills</h3>
        <ul>
          <li>
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
          </li>
        </ul>
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
