import React from 'react';
import { ProtectedRoutes, SharedRoutes } from './routes';
import ProtectedLayout from '../pages/protected/layout';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as PagePaths from '../router/pagePaths';
import BaseRouteHandler from '../components/BaseRouteHandler';

const Router = () => {
  const routes = [...SharedRoutes, ...ProtectedRoutes];

  return (
    <ProtectedLayout>
      <Switch>
        {BaseRouteHandler(routes)}
        <Redirect to={PagePaths.NotFound} />
      </Switch>
    </ProtectedLayout>
  );
};

export default Router;
