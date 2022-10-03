export interface RocketPayloadInterface {
        readonly id: string,
        readonly name: string,
        readonly mass: MetricMassInterface,
        readonly landing_legs: LandingLegsInterface,
        readonly stages: number,
        readonly cost_per_launch: number,
        readonly active: boolean,
        readonly first_flight: Date,
        readonly height: MetricLenghtInterface
}

export interface MetricMassInterface {
    readonly kg: number;
    readonly lb: number;
}

export interface MetricLenghtInterface {
    readonly meters: number;
    readonly feet: number;
}

export interface LandingLegsInterface {
    readonly number: number,
    readonly material: string
}