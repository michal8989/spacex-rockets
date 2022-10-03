
export class Rocket {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly mass: number,
        readonly landingLegs: number,
        readonly stages: number,
        readonly costPerLaunch: number,
        readonly active: boolean,
        readonly firstFlight: Date,
        readonly height: number
    ) {
    }
}