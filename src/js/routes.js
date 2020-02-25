/* eslint-disable react/display-name */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import asyncComponent from 'Components/utils/AsyncComponent/AsyncComponent.jsx';
import PrivateRoute from 'Components/routing/PrivateRoute/PrivateRoute.jsx';
import UnauthenticatedRoute from 'Components/routing/UnauthenticatedRoute/UnauthenticatedRoute.jsx';

const LazyChat = asyncComponent(() => import('./containers/Chat/Chat.jsx'), 300);
const LazyLogin = asyncComponent(() => import('./containers/Login/Login.jsx'), 300);
const Lazy404 = asyncComponent(() => import('./containers/404/404.jsx'), 300);

export default [
  // private routes
  {
    path: '/chat',
    exact: true,
    RouteComponent: PrivateRoute,
    Component: LazyChat
  }, {
    path: '/',
    exact: true,
    RouteComponent: PrivateRoute,
    Component: () => <Redirect to={{ pathname: '/chat' }} />
  },
  // unauthenticated route
  {
    path: '/login',
    RouteComponent: UnauthenticatedRoute,
    Component: LazyLogin
  },
  // public routes
  {
    path: '*',
    Component: Lazy404,
    RouteComponent: Route
  }
];
