import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import Login from 'pages/authentication/Login';


// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { useState } from 'react';
import { lazy } from 'react';
import DashboardDefault from 'pages/dashboard/index';
import SamplePage from 'pages/extra-pages/SamplePage';
import Typography from 'pages/components-overview/Typography';
import Color from 'pages/components-overview/Color';
import Shadow from 'pages/components-overview/Shadow';
import AntIcons from 'pages/components-overview/AntIcons';


// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const [isAuthenticated, setAuth] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks, no-constant-condition
  if(!isAuthenticated) {
    return <Login setAuth={setAuth}/>;
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useRoutes([{
      path: '/',
      element: <MainLayout setAuth={setAuth} />,
      children: [
        {
          path: '/',
          element: <DashboardDefault />
        },
        {
          path: 'color',
          element: <Color />
        },
        {
          path: 'dashboard',
          children: [
            {
              path: 'default',
              element: <DashboardDefault />
            }
          ]
        },
        {
          path: 'sample-page',
          element: <SamplePage />
        },
        {
          path: 'shadow',
          element: <Shadow />
        },
        {
          path: 'typography',
          element: <Typography />
        },
        {
          path: 'icons/ant',
          element: <AntIcons />
        }
      ]
    }]);
  }
}
