import React from 'react';
import styled from 'styled-components';
import Footer from '../modules/Footer';
import Nav from '../modules/Nav';
import SEO from '../components/SEO';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import 'normalize.css';

const SiteBorderStyles = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <Nav />
        {children}
        <Footer />
      </SiteBorderStyles>
    </>
  );
}
