/* eslint-disable react/display-name */
import React from 'react';
import { Route } from 'react-router-dom';

const LazyChat = React.lazy(() => import('./containers/Chat/Chat.jsx'));
const LazyLogin = React.lazy(() => import('./containers/Login/Login.jsx'));
const Lazy404 = React.lazy(() => import('./containers/404/404.jsx'));

export default [
  // private routes
  {
    path: '/chat',
    component: props => <LazyChat {...props} />,
    RouteComponent: Route
  },

  // public routes
  {
    path: '/',
    exact: true,
    component: props => <LazyLogin {...props} />,
    RouteComponent: Route
  }, {
    path: '*',
    component: Lazy404,
    RouteComponent: Route
  }
];
