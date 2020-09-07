//external
import React from 'react';
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

const tables = [
  {id: '1'},
  {id: '2'},
  {id: '3'},
  {id: '4'},
  {id: '5'},
  {id: '6'},
];

const persons = [
  {id: '1'},
  {id: '2'},
  {id: '3'},
  {id: '4'},
  {id: '5'},
];

const TablesBookingId = () => {
  const [value, setValue] = React.useState({
    table: '',
    person: '',
  });
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Paper className={styles.component}>
      <Typography variant="h5">NEW RESERVATION</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Choose table</TableCell>
            <TableCell>Amount of people</TableCell>
            <TableCell>Pick date</TableCell>
            <TableCell>Pick hour</TableCell>
            <TableCell>Contact number</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
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
                id='standard-select-person'
                select
                value={value.person}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {persons.map(person => (
                  <option key={person.id} value={person.id}>{person.id}</option>
                ))}
              </TextField>
            </TableCell>
            <TableCell>
              <form noValidate>
                <TextField
                  id="date"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </TableCell>
            <TableCell>
              <form noValidate>
                <TextField
                  id="time"
                  type="time"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </TableCell>
            <TableCell>
              <TextField label="contact" variant="outlined" />
            </TableCell>
            <TableCell>
              <TextField label="name" variant="outlined" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className={styles.reservation}>
        <TextField multiline={true} rows={4} label="Notes for details" variant="outlined" />
        <Button>NEW RESERVATION</Button>
      </div>
    </Paper>
  );
};

export default TablesBookingId;
