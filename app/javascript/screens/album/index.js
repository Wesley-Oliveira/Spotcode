import React, { Fragment, useState } from 'react';
import NavbarFooter from '../../components/commom/navbar_footer';
import Albums from '../../components/albums';
import SectionWrapper from '../../components/commom/section_wrapper';


const AlbumScreen = () => {
  return(
    <Fragment>
      <SectionWrapper>
        <Albums/>
        <NavbarFooter/>
      </SectionWrapper>
    </Fragment>
  );
}
export default AlbumScreen;