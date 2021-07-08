import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
      <Router  basename={window.location.pathname || ''}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/SF' component={SF} />
          <Route path='/ST' component={ST} />
          <Route path='/VC' component={VC} />
          <Route path='/SD' component={SD} />
          <Route path='/LA' component={LA} />
          <Route path='/BS' component={BS} />
          <Route path='/NY' component={NY} />
          <Route path='/PY' component={PY} />
          <Route path='/DC' component={DC} />
          <Route path='/GZ' component={GZ} />
          <Route path='/CQ' component={CQ} />
          <Route path='/CS' component={CS} />
          <Route path='/SH' component={SH} />
          <Route path='/CG' component={CG} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
