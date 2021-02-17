import React from 'react';

import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import CVPreview from '../../components/CVPreview/CVPreview';

const Preview = (props) => {
  return (
    <React.Fragment>
      <HeaderNavigation />
      <CVPreview />
    </React.Fragment>
  );
};

export default Preview;
