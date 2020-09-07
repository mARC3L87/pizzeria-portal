//external
import React from 'react';
import { Link } from 'react-router-dom';
//css
import styles from './Kitchen.module.scss';
//material-ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const demoContent = [
  {id: '5', order: '15', status: 'prepared', task: 'prawns tagliatelle', amount:'2', table: 3},
  {id: '4', order: '14', status: 'preparing', task: 'zio stefano\'s breakfast', amount:'2', table: 4},
  {id: '3', order: '13', status: 'preparing', task: 'pizza salami bacon', amount:'1', table: 2},
  {id: '2', order: '12', status: 'done', task: 'nonno alberto\'s salad', amount:'1', table: 1},
  {id: '1', order: '11', status: 'done', task: 'nonna alba\'s pizza', amount:'1', table: 6},
];

const renderActions = status => {
  switch (status) {
    case 'done':
      return null;
    case 'preparing':
      return (
        <Button>done</Button>
      );
    case 'ordered':
      return (
        <Button>preparing</Button>
      );
    default:
      return null;
  }
};

const Kitchen = () => (
  <Paper className={styles.component}>
    <Typography variant="h5">KITCHEN</Typography>
    <Table className={styles.table}>
      <TableHead>
        <TableRow>
          <TableCell>Queue</TableCell>
          <TableCell>Order ID</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>To do</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Table</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.order && (
                <Button variant="contained" component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                  {row.order}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {row.task}
            </TableCell>
            <TableCell>
              {row.amount}
            </TableCell>
            <TableCell>
              {row.table}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;
