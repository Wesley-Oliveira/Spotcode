import React, { Fragment } from 'react';
import SectionWrapper from '../../components/commom/section_wrapper'
import { Heading } from 'react-bulma-components';
import Search from '../../components/search';
import NavbarFooter from '../../components/commom/navbar_footer';

const SearchScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Heading className='has-text-centered has-text-white'>Buscar</Heading>
        <Search/>
      </SectionWrapper>
      <NavbarFooter/>
    </Fragment>
  );
}

export default SearchScreen;