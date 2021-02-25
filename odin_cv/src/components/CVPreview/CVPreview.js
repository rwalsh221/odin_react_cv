import React from 'react';
import { useSelector } from 'react-redux';

import CVPreviewSectionTwo from './CVPreviewSectionTwo/CVPreviewSectionTwo';
import CVPreviewSectionThree from './CVPreviewSectionThree/CVPreviewSectionThree';

import classes from './CVPreview.module.css';

const CVPreview = (props) => {
  const state = useSelector((state) => state);

  const statePersonal = state.cvInputsPersonal;
  const stateEducation = state.cvInputs.education;
  const stateEmployment = state.cvInputs.employment;
  const stateAdditional = state.cvInputs.additional;
  const stateReferences = state.cvInputs.references;

  return (
    <main className={classes.main}>
      <div className={classes.previewCV}>
        <section className={classes.sectionOne}></section>
        <CVPreviewSectionTwo
          // PROPS FOR STATEPERSONAL
          statePersonalAddressStreet={statePersonal.addressStreet}
          statePersonalAddressCity={statePersonal.addressCity}
          statePersonalPhoneNumber={statePersonal.phoneNumber}
          statePersonalEmail={statePersonal.email}
          // PROPS FOR STATEADDITIONAL
          stateAdditional={stateAdditional}
          // PROPS FOR STATEREFERENCES
          stateReferences={stateReferences}
        />
        <CVPreviewSectionThree
          // PROPS FOR STATEPERSONAL
          statePersonalName={statePersonal.name}
          statePersonalCurrentRole={statePersonal.currentRole}
          // PROPS FOR STATEEDUCATION
          stateEducation={stateEducation}
          // PROPS FOR STATEEMPLOYMENT
          stateEmployment={stateEmployment}
        />
      </div>
    </main>
  );
};

export default CVPreview;
