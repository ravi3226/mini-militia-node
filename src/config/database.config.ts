import dotenv from 'dotenv'

dotenv.config();

export interface Db_config {
    host: string,
    protocol: string,
    port: number,
    name: string
}

const environment = {
    development: {
        host: process.env.MONGO_DEV_HOST,
        protocol: process.env.MONGO_DEV_PROTOCOL,
        port: process.env.MONGO_DEV_PORT,
        name: process.env.MONGO_DEV_NAME
    },
    production: {
        host: process.env.MONGO_PROD_HOST,
        protocol: process.env.MONGO_PROD_PROTOCOL,
        port: process.env.MONGO_PROD_PORT,
        name: process.env.MONGO_PROD_NAME
    },
    test: {
        host: process.env.MONGO_HOST,
        protocol: process.env.MONGO_PROTOCOL,
        port: process.env.MONGO_PORT,
        name: process.env.MONGO_NAME
    }
}

export const db_config: Db_config = environment[process.env.NODE_ENV] ? environment[process.env.NODE_ENV] : environment.test;