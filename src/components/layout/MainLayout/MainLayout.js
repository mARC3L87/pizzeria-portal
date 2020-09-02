//external
import React from 'react';
import PropTypes from 'prop-types';
//css
import PagNav from '../PageNav/PageNav';
//material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

const MainLayout = ({children}) => (
  <div>
    <AppBar>
      <Container>
        <Toolbar disableGutters>
          <PagNav />
        </Toolbar>
      </Container>
    </AppBar>
    <Container maxWidth='lg'>
      <Toolbar />
      { children }
    </Container>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
