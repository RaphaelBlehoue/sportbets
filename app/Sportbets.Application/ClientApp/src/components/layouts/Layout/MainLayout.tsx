import {Outlet} from 'react-router';
import { AppLayout } from './AppLayout';

const MainLayout = () => {
  return (
    <AppLayout>
      <Outlet/>
    </AppLayout>
  );
};
export { MainLayout };