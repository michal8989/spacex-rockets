
import { Container, InjectionToken } from '@decorators/di';
import * as dotenv from 'dotenv'
import RocketsService from './Domain/Services/RocketsService';
require('dotenv').config();

export const ROCKETS_API = new InjectionToken('API_URL');
export const ROCKETS_SERVICE = new InjectionToken('RocketsService');

Container.provide([
    { provide: ROCKETS_API, useValue: process.env.spacex_api_url },
  ]);