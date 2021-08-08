import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { HashRouter as Router, Switch, Link, Route } from 'react-router-dom';
import SF from './components/pages/SF';
import ST from './components/pages/ST';
import VC from './components/pages/VC';
import LA from './components/pages/LA';
import SD from './components/pages/SD';
import BS from './components/pages/BS';
import NY from './components/pages/NY';
import PY from './components/pages/PY';
import DC from './components/pages/DC';
import GZ from './components/pages/GZ';
import CQ from './components/pages/CQ';
import CS from './components/pages/CS';
import SH from './components/pages/SH';
import CG from './components/pages/CG';


function App() {
  return (
    <>
      <Router >
        <Switch>
          <Route exact path='/SF' component={SF} />
          <Route exact path='/ST' component={ST} />
          <Route exact path='/VC' component={VC} />
          <Route exact path='/SD' component={SD} />
          <Route exact path='/LA' component={LA} />
          <Route exact path='/BS' component={BS} />
          <Route exact path='/NY' component={NY} />
          <Route exact path='/PY' component={PY} />
          <Route exact path='/DC' component={DC} />
          <Route exact path='/GZ' component={GZ} />
          <Route exact path='/CQ' component={CQ} />
          <Route exact path='/CS' component={CS} />
          <Route exact path='/SH' component={SH} />
          <Route exact path='/CG' component={CG} />
          <Route exact path='/'  component={Home} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
