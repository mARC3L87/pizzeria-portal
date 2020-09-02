//external
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//js
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Homepage from '../src/components/views/Homepage/Homepage';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Tables';
import TablesBookingId from '../src/components/views/Tables/TablesBookingId';
import TablesBookingNew from '../src/components/views/Tables/TablesBookingNew';
import TablesEventsId from '../src/components/views/Tables/TablesEventsId';
import TablesEventsNew from '../src/components/views/Tables/TablesEventsNew';
import Waiter from '../src/components/views/Waiter/Waiter';
import WaiterOrderId from '../src/components/views/Waiter/WaiterOrderId';
import WaiterOrderNew from '../src/components/views/Waiter/WaiterOrderNew';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
//material-ui
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    //secondary: { main: '#11cb5f' },
  },
});

function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
              <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={TablesBookingId} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={TablesBookingNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={TablesEventsId} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={TablesEventsNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={WaiterOrderId} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={WaiterOrderNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
