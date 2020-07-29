import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import theme from '../../theme';
import NavigationBar from '../../navigation-bar';
import Home from '../../home';
import Lab from '../../lab';
import { NotFound, Page } from '../../common';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Page>
          <NavigationBar>
            <Link to="/" component={NavigationBar.Item}>
              Home
            </Link>
            <Link to="/lab" component={NavigationBar.Item}>
              Lab
            </Link>
          </NavigationBar>
          <Switch>
            <Route path="/lab">
              <Lab />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Page>
      </Router>
    </ThemeProvider>
  );
}

export default App;
