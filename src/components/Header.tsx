import { h, FunctionComponent } from 'preact';
import { Link } from 'preact-router/match';

const Header: FunctionComponent = () => (
  <header>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/report">Report</Link>
    </nav>
  </header>
);

export default Header;
