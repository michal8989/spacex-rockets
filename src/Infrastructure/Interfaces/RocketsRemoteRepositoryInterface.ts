import { RocketPayloadInterface } from "../../Application/Rest/Payloads/RocketPayloadInterface";

export interface RocketsRemoteRepositoryInterface {
    getRockets(): Promise<RocketPayloadInterface[]>;
}