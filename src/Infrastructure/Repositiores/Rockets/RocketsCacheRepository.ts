import { Injectable } from "@decorators/di";
import { RocketPayloadInterface } from "../../../Application/Rest/Payloads/RocketPayloadInterface";
import { RocketsCachedRemoteRepositoryInterface } from "../../Interfaces/RocketsCachedRemoteRepositoryInterface";

@Injectable()
export class RocketsCacheRepository implements RocketsCachedRemoteRepositoryInterface {
    private rockets: RocketPayloadInterface[] = [];

    setRockets(rockets: RocketPayloadInterface[]): void {
       this.rockets = rockets;
    }

    async getRockets(): Promise<RocketPayloadInterface[]> {
        return this.rockets;
    }    
}