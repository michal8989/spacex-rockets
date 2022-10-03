import { Inject, Injectable } from "@decorators/di";
import { RocketPayloadInterface } from "../../../../Application/Rest/Payloads/RocketPayloadInterface";
import { ROCKETS_API } from "../../../../Container";
import { RocketsRemoteRepositoryInterface } from "../../../Interfaces/RocketsRemoteRepositoryInterface";
const axios = require('axios');

const RocketSchema = `{
    rockets {
      id
      name
      mass {
        kg
      }
      landing_legs {
        number
        material
      }
      stages
      country
      cost_per_launch
      boosters
      active
      first_flight
      height {
        meters
      }
    }
  }`;

@Injectable()
export class SpaceXRemoteRepository implements RocketsRemoteRepositoryInterface {
    
    constructor(@Inject(ROCKETS_API) private readonly url: string) {}

    async getRockets(): Promise<RocketPayloadInterface[]> {
        return axios.post(`${this.url}/graphql/`,{ query : RocketSchema })
        .then(({
            data: {
                data: {
                    rockets
                }
            }
        }) => rockets);
    }    
}