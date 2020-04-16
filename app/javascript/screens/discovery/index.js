import React, { Fragment } from 'react';
import NavbarFooter from '../../components/commom/navbar_footer';
import SectionWrapper from '../../components/commom/section_wrapper';
import Discovery from '../../components/discovery';
 
const DiscoveryScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Discovery />
      </SectionWrapper>
      <NavbarFooter />
    </Fragment>
  );
}
export default DiscoveryScreen;