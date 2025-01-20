import { RouteObject } from 'react-router';
import { PrivateRoutes } from './PrivateRoutes';
/**
 * Add all groupe by role or authorize
 */
export const configRoutes: RouteObject[] = [
  ...PrivateRoutes
];