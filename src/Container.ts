import { Container, InjectionToken } from '@decorators/di';
require('dotenv').config();
export const ROCKETS_API = new InjectionToken('API_URL');
Container.provide([
    { provide: ROCKETS_API, useValue: process.env.SPACEX_API_URL},
  ]);