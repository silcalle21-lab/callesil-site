import { Suspense } from 'react';
import { Outlet, createHashRouter, type RouteObject } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import RootLayout from './layouts/RootLayout';
import Spinner from './components/Spinner';
import { routes } from './routes';

const SpinnerFallback = () => (
  <div className="flex justify-center py-8 h-screen items-center">
    <Spinner />
  </div>
);

const rootElement = (
  <Suspense fallback={<SpinnerFallback />}>
    <RootLayout>
      <Outlet />
    </RootLayout>
  </Suspense>
);

const routeTree: RouteObject[] = [
  {
    element: rootElement,
    children: routes,
  },
];

const router = createHashRouter(routeTree);

export default function App() {
  return <RouterProvider router={router} />;
}
