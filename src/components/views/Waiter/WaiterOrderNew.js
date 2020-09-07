//external
import React from 'react';
//css
import styles from './Waiter.module.scss';
//material-ui
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const tables = [
  {id: '1'},
  {id: '2'},
  {id: '3'},
  {id: '4'},
  {id: '5'},
  {id: '6'},
];
const demoStatus = [
  {status: 'ordered'},
  {status: 'paid'},
];
const demoProducts = [
  {id: 'cake',
    name: 'Zio Stefano\'s Doughnut',
    price: 9,
    options: ['cocoa'],
    optionPrice: 1,
    status: 'ordered',
  },
  {
    id: 'breakfast',
    name: 'Zia Giulia\'s Breakfast',
    price: 9,
    options: ['latte', 'americano'],
    optionPrice: 1,
    status: 'paid',
  },
];

const WaiterOrderNew = () => {
  const [value, setValue] = React.useState({
    table: '',
    menu: [],
  });
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Menu</TableCell>
            <TableCell>Extras</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component='th' scope='row'>
              <TextField
                id='standard-select-table'
                select
                value={value.table}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {tables.map(table => (
                  <option key={table.id} value={table.id}>{table.id}</option>
                ))}
              </TextField>
            </TableCell>
            <TableCell>
              <TextField
                select
                id='standard-select-menu'
                onChange={handleChange}
                value={value.menu}
                SelectProps={{
                  native: true,
                }}
                variant='outlined'
              >
                {demoProducts.map(product => (
                  <option key={product.id} value={product.name}>{product.name} ${product.price}</option>
                ))}
              </TextField>
            </TableCell>
            <TableCell>
              <TextField
                select
                id='standard-select-menu'
                onChange={handleChange}
                value={value.menu}
                SelectProps={{
                  native: true,
                }}
                variant='outlined'
              >
                {demoProducts.map(product => (
                  <option key={product.id}>{product.options[0]} ${product.optionPrice}</option>
                ))}
              </TextField>
            </TableCell>
            <TableCell>
              <TextField
                select
                id='standard-select-status'
                onChange={handleChange}
                value={value.menu}
                SelectProps={{
                  native: true,
                }}
                variant='outlined'
              >
                {demoStatus.map(stat => (
                  <option key={stat.status}>{stat.status}</option>
                ))}
              </TextField>
            </TableCell>
            <TableCell>
              $10
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default WaiterOrderNew;
