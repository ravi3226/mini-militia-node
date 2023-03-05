import { connectToDatabase } from "./services/database.service.js";
import { connectToRedis } from "./services/redis.service.js";
import * as PinoLogger from 'pino';
import { initializeServer } from "./services/server.service.js";
import pinoms from 'pino-multi-stream';

import fs from 'fs';
import {dirname, join} from 'path'
import { fileURLToPath } from 'url';
import { initSocketConnection } from "./services/socket.service.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


/**
 * register logger for development env...
 */
const streams = [
    { stream: process.stdout },
    { stream: fs.createWriteStream(join(__dirname, './logs/info.log'), { flags: 'a' }) },
]
  

const logger = PinoLogger.pino({
    level: process.env.PINO_LOG_LEVEL || 'info',
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    }
}, pinoms.multistream(streams));

PinoLogger.destination(join(__dirname, './logs/info.log'))
global.logger = logger;


// establish all connections and services to execute the program properly
connectToDatabase().then(() => {

    connectToRedis().then(() => {

        initializeServer().then(() => {

            initSocketConnection().then(() => {

                logger.info(`checked: Database, Redis, HttpServer, Socket connection ✔`);
                logger.info(`__---__---__---__---__---__---__---__---__---__---__---__---__---__---__---__---__---__---__---__---__---__`)

            }).catch((e: Error) => {
                logger.error(`Server initialization failed : ${e.message}`);

            })
        }).catch((e) => {
            logger.error(`Server initialization failed : ${e.message}`);

        })
    }).catch((e) => {
        logger.error(`Redis connection failed : ${e.message}`);

    })
}).catch((e) => {
    logger.error(`Database connection failed : ${e.message}`)
    
})

// * Error Handle ....
process
    .on('unhandledRejection', (response, p) => {
        logger.error(response);
        logger.error(p);

    })
    .on('uncaughtException', (err) => {
        logger.error(err);
    });