import { Socket } from 'socket.io'
import { convertStringtoObject } from '../helpers/common.helper.js'
import { signup } from './authEvent.handler.js'
import { test } from './socketEvent.handler.js'

const handlers = {
    TEST: async (data, acknowledgement, socket) => await test(data, acknowledgement, socket),
    SIGNUP: async (data, acknowledgement, socket) => await signup(data, acknowledgement, socket)
}

export const SocketHandler = async (socket: Socket) : Promise<void> => {
    return new Promise((resolve, reject) => {
        try {
            socket.onAny(async (eventName, value, acknowledgement) => {
                global.logger.info(`recived event : ${eventName} || socketId : ${socket.id}`)
                global.logger.info(value);
    
                // ? check authentication TODO:
    
                if (value) value = convertStringtoObject(value);

                let data: any = value.data;
                const result = handlers[eventName](data, acknowledgement, socket);
                global.logger.info('result ', result)
                resolve();
            })
        } catch(e) {
            global.logger.error(e.message);
            reject(e);
        }
    })
}