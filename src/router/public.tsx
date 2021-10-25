import React from 'react';
import { PublicRoutes, SharedRoutes } from './routes';
import PublicLayout from '../pages/public/layout';
import { Redirect, Switch } from 'react-router-dom';
import * as PagePaths from '../router/pagePaths';
import BaseRouteHandler from '../components/BaseRouteHandler';

const Router = () => {
  const routes = [...SharedRoutes, ...PublicRoutes];

  return (
    <PublicLayout>
      <Switch>
        <Redirect exact from="/" to={PagePaths.GuestHomePage} />
        {BaseRouteHandler(routes)}
        <Redirect to={PagePaths.NotFound} />
      </Switch>
    </PublicLayout>
  );
};

export default Router;
