import { FunctionComponent } from 'preact';
import { Router } from 'preact-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import About from '../pages/About';

const HomeRouter: FunctionComponent = () => (
  <HomeLayout>
    <Router>
      <Home path="/" />
      <About path="/about" />
    </Router>
  </HomeLayout>
);

export default HomeRouter;