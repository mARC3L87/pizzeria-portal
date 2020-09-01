//external
import React from 'react';
import PropTypes from 'prop-types';
//css
import PagNav from '../PageNav/PageNav';

const MainLayout = ({children}) => (
  <div>
    <PagNav />
    { children }
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
