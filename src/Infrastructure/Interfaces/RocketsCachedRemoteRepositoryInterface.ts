import { RocketPayloadInterface } from "../../Application/Rest/Payloads/RocketPayloadInterface";
import { RocketsRemoteRepositoryInterface } from "./RocketsRemoteRepositoryInterface";

export interface RocketsCachedRemoteRepositoryInterface extends RocketsRemoteRepositoryInterface {
    setRockets(rockets: RocketPayloadInterface[]): void;
}