//external
import React from 'react';
import { Link } from 'react-router-dom';
//css
import styles from './Tables.module.scss';

const Tables = () => (
  <div className={styles.component}>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Events</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/123abc`}>Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/123abc`}>Events</Link>
    <h2>Tables view</h2>
  </div>
);

export default Tables;
