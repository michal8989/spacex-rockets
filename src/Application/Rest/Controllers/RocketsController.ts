import { Response, Params, Controller, Get, Delete } from '@decorators/express';
import {Inject, Injectable} from '@decorators/di';
import RocketsService from '../../../Domain/Services/RocketsService';
import { Response as ExpressResponse } from "express";
import { RocketDestroyedException } from '../../../Domain/Exceptions/RocketDestroyedException';

@Controller('/rockets')
@Injectable()
export default class RocketsController {

  constructor(@Inject(RocketsService) private readonly rocketsService: RocketsService) {}
  // TODO should map all entities to ApplicationEntity before returning to the client.

  @Get('')
  async getRockets(@Response() res: ExpressResponse, @Params('id') id: string): Promise<void> {
    res.json(await this.rocketsService.getRockets());
  }

  @Get('/:id')
  async getRocket(@Response() res: ExpressResponse, @Params('id') id: string): Promise<void> {
    res.json(await this.rocketsService.getRocketById(id)); 
  }

  @Delete('/:id')
  async destroyRocket(@Response() res: ExpressResponse, @Params('id') id: string): Promise<void> {
    const rocketToDestroy = await this.rocketsService.getRocketById(id);
    
    throw new RocketDestroyedException(rocketToDestroy);
  }

}