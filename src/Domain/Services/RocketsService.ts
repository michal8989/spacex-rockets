import { Inject, Injectable } from '@decorators/di';
import { ROCKETS_API } from "../../Container";
import { RocketsRepository } from '../../Infrastructure/Repositiores/Rockets/RocketsRepository';
import { RocketsRepositoryInterface } from '../Interfaces/RocketsRepositoryInterface';
import { Rocket } from '../Enitities/Rocket';
import { RocketNotFoundException } from '../Exceptions/RocketNotFoundException';

@Injectable()
export default class RocketsService {

    constructor(@Inject(RocketsRepository) private readonly rocketsRepository: RocketsRepositoryInterface) {}
      
      public async getRockets(): Promise<Rocket[]> {
        return (await this.rocketsRepository.getRockets())
        .map(rocket => rocket.toDomain());
      }

      public async getRocketById(id: string): Promise<Rocket> {
        // should get only one item form repo :) 
        const foundRocket = (await this.getRockets()).find(rocket => rocket.id === id);

        if(!foundRocket) {
          throw new RocketNotFoundException(id);
        }

        return foundRocket;
      }
}