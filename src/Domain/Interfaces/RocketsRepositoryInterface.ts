import { RocketInfrastructureEntity } from "../../Infrastructure/Entities/RocketInfrastructure";

export interface RocketsRepositoryInterface {
    getRockets(): Promise<RocketInfrastructureEntity[]>;
}