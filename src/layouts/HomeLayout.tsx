import { FunctionComponent } from 'preact';
import Header from '../components/Header';

interface LayoutProps {
  children: preact.ComponentChildren;
}

const HomeLayout: FunctionComponent<LayoutProps> = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
);

export default HomeLayout;