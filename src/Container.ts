
import { Container, InjectionToken } from '@decorators/di';
import * as dotenv from 'dotenv'
require('dotenv').config();

export const ROCKETS_API = new InjectionToken('API_URL');

Container.provide([
    { provide: ROCKETS_API, useValue: process.env.spacex_api_url },
  ]);