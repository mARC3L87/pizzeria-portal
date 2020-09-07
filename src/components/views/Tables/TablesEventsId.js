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

const days = [
  {id: 'Monday'},
  {id: 'Tuesday'},
  {id: 'Wednesday'},
  {id: 'Thursday'},
  {id: 'Friday'},
  {id: 'Saturady'},
  {id: 'Sunday'},
];

const TablesEventsId = () => {
  const [value, setValue] = React.useState({
    table: '',
    person: '',
    days: '',
  });
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Paper className={styles.component}>
      <Typography variant="h5">NEW EVENT</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Choose table</TableCell>
            <TableCell>Amount of people</TableCell>
            <TableCell>Pick day</TableCell>
            <TableCell>Pick hour</TableCell>
            <TableCell>Name of event</TableCell>
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
              <TextField
                id='standard-select-day'
                select
                value={value.day}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {days.map(day => (
                  <option key={day.id} value={day.id}>{day.id}</option>
                ))}
              </TextField>
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
              <TextField label="Event" variant="outlined" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className={styles.reservation}>
        <TextField multiline={true} rows={4} label="Notes for details" variant="outlined" />
        <Button>NEW EVENT</Button>
      </div>
    </Paper>
  );
};

export default TablesEventsId;
