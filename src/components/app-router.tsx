// import { Route, Switch } from 'react-router-dom';
// import { routes } from '../routes';

// export function AppRouter() {
//   return (
//     <Switch>
//       {routes.map(({ path, Component, exact = false }) => (
//         <Route exact={exact} path={path} component={Component} key={path} />
//       ))}
//     </Switch>
//   );
// }

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from '../routes';
import { Layout } from './layout';

export function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map(({ path, Component, exact = false }) => (
            <Route path={path} element={<Component />} key={path} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}
