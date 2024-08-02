import { h, FunctionComponent } from 'preact';
import { Route, Router } from 'preact-router';

import ReportPage from './pages/ReportPage';
import HomeRouter from './routers/HomeRouter';

const App: FunctionComponent = () => {

  return (
    <Router>
      <Route default component={HomeRouter} />
      <Route path="/report" component={ReportPage} />
  </Router>
  );
};

export default App;