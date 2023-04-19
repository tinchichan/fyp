import React, { Component }  from 'react';
// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'diagrams tutorials',
    path: '/dashboard/tutorial',
    icon: icon('diagram-svgrepo-com'),
  },
  {
    title: 'playground',
    path: '/dashboard/playground',
    icon: icon('playground-park-play-city-garden-svgrepo-com'),
  },
  {
    title: 'game',
    path: '/dashboard/blog',
    icon: icon('game-svgrepo-com'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Logout',
    path: '/login',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
