//external
import React from 'react';
import { Link } from 'react-router-dom';
//css
import styles from './Tables.module.scss';
//material-ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const demoContent = [
  {
    id: 1,
    hour: '13:00',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'event' },
      { id: 5, status: 'free' },
      { id: 6, status: 'free' },
    ],
  },
  {
    id: 2,
    hour: '13:30',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'event' },
      { id: 3, status: 'free' },
      { id: 4, status: 'free' },
      { id: 5, status: 'booked' },
      { id: 6, status: 'event' },
    ],
  },
  {
    id: 3,
    hour: '14:00',
    tables: [
      { id: 1, status: 'event' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
      { id: 5, status: 'event' },
      { id: 6, status: 'free' },
    ],
  },
  {id: 4,
    hour: '14:30',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'free' },
      { id: 3, status: 'free' },
      { id: 4, status: 'event' },
      { id: 5, status: 'event' },
      { id: 6, status: 'booked' },
    ],
  },
];

const renderActions = status => {
  switch (status) {
    case 'booked':
      return (
        <>
          <Button component={Link} className={styles.button} variant="contained" to={`${process.env.PUBLIC_URL}/tables/booking/11`}>Booked</Button>
        </>
      );
    case 'event':
      return (
        <>
          <Button component={Link} className={styles.button} variant="contained" to={`${process.env.PUBLIC_URL}/tables/events/12`}>Event</Button>
        </>
      );
    case 'free':
      return (
        <>
          <Button component={Link} className={styles.button} variant="contained" to={`${process.env.PUBLIC_URL}/tables/booking/13`}>Free</Button>
        </>
      );
    default:
      return null;
  }
};
const Tables = () => (

  <Paper className={styles.component}>
    <Typography variant="h5">TABLES SCHEDULE</Typography>
    <form noValidate>
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue='2020-09-07'
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    <div className={styles.buttons}>
      <Button component={Link} className={styles.button} color="primary" variant="contained" to={`${process.env.PUBLIC_URL}/tables/booking/new`}>Book Table</Button>
      <Button component={Link} className={styles.button} color="primary" variant="contained" to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Button>
    </div>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell width={200}>HOUR</TableCell>
          <TableCell width={200}>Table 1</TableCell>
          <TableCell width={200}>Table 2</TableCell>
          <TableCell width={200}>Table 3</TableCell>
          <TableCell width={200}>Table 4</TableCell>
          <TableCell width={200}>Table 5</TableCell>
          <TableCell width={200}>Table 6</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.hour}
            </TableCell>
            {row.tables.map(table => (
              <TableCell key={table.id}>{renderActions(table.status)}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>

  </Paper>

);

export default Tables;
