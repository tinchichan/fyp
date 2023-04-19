import React, { Component }  from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/GamePage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import Page404 from './pages/Page404';
import TutorialPage from './pages/TutorialPage';
import DashboardAppPage from './pages/DashboardAppPage';
import PlaygroundPage from './pages/PlaygroundPage';
import ClassDiagram from './pages/ClassDiagram';
import ComponentDiagram from "./pages/ComponentDiagram";
import UseCaseDiagram from "./pages/UseCaseDiagram";
import CommunicationDiagram from "./pages/CommunicationDiagram";
// ----------------------------------------------------------------------


export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'tutorial', element: <TutorialPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'playground', element: <PlaygroundPage /> },
        { path: 'class-diagram',element: <ClassDiagram /> },
        { path: 'component-diagram',element: <ComponentDiagram />},
        { path: 'use-case-diagram',element: <UseCaseDiagram />},
        { path: 'communication-diagram',element: <CommunicationDiagram />}
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'register',
      element: <RegisterPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/login" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '/',
      element: <DashboardLayout />,
    },
    {
      path: '*',
      element: <Navigate to="/login" replace />,
    },
    {
      path: 'test-dashboard',
      element: <test-dashboard />,
    }
  ]);

  return routes;
}