import { RouteObject } from "react-router";
import { lazy } from 'react';
import HomePage from './pages/index';
import ShopPage from './pages/shop';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import CollectionsPage from './pages/collections';
import ProductPage from './pages/product';
// Eager import so renderToString doesn't hit a Suspense boundary on 404 routes
// and abort to client rendering. The prod 404 page is tiny; the dev-tools
// variant stays lazy because it pulls in dev-only code we don't want in
// production bundles.
import ProdNotFoundPage from './pages/_404';
const NotFoundPage = ProdNotFoundPage;
export const routes: RouteObject[] = [{
  path: '/',
  element: <HomePage />
}, {
  path: '/shop',
  element: <ShopPage />
}, {
  path: '/shop/:slug',
  element: <ProductPage />
}, {
  path: '/about',
  element: <AboutPage />
}, {
  path: '/contact',
  element: <ContactPage />
}, {
  path: '/collections',
  element: <CollectionsPage />
}, {
  path: '*',
  element: <NotFoundPage />
}];

// Types for type-safe navigation
export type Path = '/' | '/shop' | '/about' | '/contact' | '/collections';
export type Params = Record<string, string | undefined>;
