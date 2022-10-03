import { Rocket } from "../Enitities/Rocket";

export class RocketDestroyedException extends Error {

    constructor(rocket: Rocket) {
        super(`BOOM! ${rocket.id} was destroyed!`);
    }
}