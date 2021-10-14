import React from 'react';

import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import CVPreview from '../../components/CVPreview/CVPreview';

const Preview = () => (
  <>
    <HeaderNavigation previewProps />
    {/* <HeaderNavigation preview={true} /> */}
    <CVPreview />
  </>
);

export default Preview;
