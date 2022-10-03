import { RocketPayloadInterface } from "../../Application/Rest/Payloads/RocketPayloadInterface";
import { Rocket } from "../../Domain/Enitities/Rocket";

export class RocketInfrastructureEntity {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly mass: number,
        readonly landing_legs: number,
        readonly stages: number,
        readonly cost_per_launch: number,
        readonly active: boolean,
        readonly first_flight: Date,
        readonly height: number
    ) {
    }

    toDomain() {
        return new Rocket(
                this.id, 
                this.name, 
                this.mass, 
                this.landing_legs,
                this.stages,
                this.cost_per_launch,
                this.active,
                this.first_flight,
                this.height
        );
    } 

    static fromPayload(rocket: RocketPayloadInterface) {
        return new RocketInfrastructureEntity(
            rocket.id,
            rocket.name,
            rocket.mass?.kg,
            rocket.landing_legs?.number,
            rocket.stages,
            rocket.cost_per_launch,
            rocket.active,
            rocket.first_flight,
            rocket.height?.meters
        )
    }
}