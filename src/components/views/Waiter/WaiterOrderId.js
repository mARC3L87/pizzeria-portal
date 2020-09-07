//external
import React from 'react';
import PropTypes from 'prop-types';
//css
import styles from './Waiter.module.scss';

const WaiterOrderId = ({match}) => (
  <div className={styles.component}>
    <h2>Waiter Order Id view {match.params.id}</h2>
  </div>
);

WaiterOrderId.propTypes = {
  match: PropTypes.node,
};
export default WaiterOrderId;
