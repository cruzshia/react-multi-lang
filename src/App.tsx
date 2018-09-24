import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Provider } from 'react-redux';

import { LangRegex } from './constants/LangConfig';
import store from './store';
import Header from './components/Header';
import Prices from './components/Prices';
import ComingSoon from './components/Common/ComingSoon';
import LangControl from './components/LangControl';

import i18n from './config/i18n';
import { I18nextProvider } from 'react-i18next';

import './css/reset.css';
import './css/common.css';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <LangControl>
              <Header />
              <Switch>
                <Route exact path='/' component={Prices} />
                <Route exact path={`/:lng(${LangRegex})/prices`} component={Prices} />
                <Route exact path={`/:lng(${LangRegex})/wallet`} component={ComingSoon} />
                <Route exact path={`/:lng(${LangRegex})/account`} component={ComingSoon} />
                <Route component={() => <Redirect to='/' />} />
              </Switch>
            </LangControl>
          </I18nextProvider>
        </Provider>
      </Router>
    );
  }
}

export default App;
