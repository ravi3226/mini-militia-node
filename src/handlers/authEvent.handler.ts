import { Socket } from "socket.io";
import { validateSignupPayload } from "../middlewares/auth.middleware.js";

export const signup = (data, acknowledgement, socket: Socket) : Promise<void> => {
    return new Promise(async (resolve, reject) => {
        try {

            await validateSignupPayload(data);
            resolve();

        } catch(e) {
            reject(e);
        }
    })
}