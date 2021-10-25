import React from 'react';
import * as PagePaths from './pagePaths';
import NotFound from '../pages/shared/notfound';
import GuestHomePage from '../pages/public/index';
import Dashboard from '../pages/protected/dashboard';
import Search from '../pages/protected/search';
import { HeaderInfo } from './headerConfig';
import ContentWrapper from '../components/ContentWrapper';
import { IRoute } from '../core/interfaces';

const SharedRoutes: IRoute[] = [
  {
    path: `${PagePaths.NotFound}`,
    exact: true,
    wrapper: ContentWrapper,
    wrapperProps: {},
    component: NotFound,
    headerProps: HeaderInfo.NotFound,
  },
];

const PublicRoutes: IRoute[] = [
  {
    path: `${PagePaths.GuestHomePage}`,
    exact: true,
    wrapper: ContentWrapper,
    wrapperProps: {},
    component: GuestHomePage,
    headerProps: HeaderInfo.GuestHomePage,
  },
];

const ProtectedRoutes: IRoute[] = [
  {
    path: `${PagePaths.Dashboard}`,
    exact: true,
    wrapper: ContentWrapper,
    wrapperProps: {},
    component: Dashboard,
    headerProps: HeaderInfo.Dashboard,
  },
  {
    path: `${PagePaths.Search}`,
    exact: true,
    wrapper: ContentWrapper,
    wrapperProps: {},
    component: Search,
    headerProps: HeaderInfo.Search,
  },
];

export { SharedRoutes, PublicRoutes, ProtectedRoutes };
