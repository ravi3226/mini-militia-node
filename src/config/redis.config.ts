import dotenv from 'dotenv'

dotenv.config();
export interface Redis {
    port: string,
    host: string,
    protocol: string
}

const environment = {
    development: {
        port: process.env.REDIS_DEV_PORT,
        host: process.env.REDIS_DEV_HOST,
        protocol: process.env.REDIS_DEV_PROTOCOL
    },
    production: {
        port: process.env.REDIS_PROD_PORT,
        host: process.env.REDIS_PROD_HOST,
        protocol: process.env.REDIS_PROD_PROTOCOL
    },
    test: {
        port: process.env.REDIS_PORT,
        host: process.env.REDIS_HOST,
        protocol: process.env.REDIS_PROTOCOL
    }
}

export const redisConfig: Redis = environment[process.env.NODE_ENV] ? environment[process.env.NODE_ENV] : environment.test;

export interface setRedis {
    success: boolean,
    message?: string,
    stored?: any
}

export interface getRedis {
    success: boolean,
    message?: string,
    value?: any
}