
export class RocketNotFoundException extends Error {

    constructor(id: string) {
        super(`Rocket with id ${id} not found`);
    }
}