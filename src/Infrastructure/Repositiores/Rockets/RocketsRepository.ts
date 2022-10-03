import { Inject, Injectable } from "@decorators/di";
import { RocketsCachedRemoteRepositoryInterface } from "../../Interfaces/RocketsCachedRemoteRepositoryInterface";
import { RocketsCacheRepository } from "./RocketsCacheRepository";
import { RocketsRemoteRepositoryInterface } from "../../Interfaces/RocketsRemoteRepositoryInterface";
import { SpaceXRemoteRepository } from "./Remote/SpaceXRemoteRepository";
import { RocketInfrastructureEntity } from "../../Entities/RocketInfrastructure";
import { RocketsRepositoryInterface } from "../../../Domain/Interfaces/RocketsRepositoryInterface";

@Injectable()
export class RocketsRepository implements RocketsRepositoryInterface {

    constructor(
        @Inject(RocketsCacheRepository) private readonly cacheRocketsRepository: RocketsCachedRemoteRepositoryInterface,
        @Inject(SpaceXRemoteRepository) private readonly remoteRocketsRepository: RocketsRemoteRepositoryInterface) {
    }

    async getRockets(): Promise<RocketInfrastructureEntity[]> {
        let rockets = await this.cacheRocketsRepository.getRockets();
        if(rockets.length === 0) {
            rockets = await this.remoteRocketsRepository.getRockets()
            this.cacheRocketsRepository.setRockets(rockets);
        }

        return rockets.map(rocket => RocketInfrastructureEntity.fromPayload(rocket));
    }

}