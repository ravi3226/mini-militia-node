export const CONSTANTS = {
    SOCKET: {
        EVENTS: {
            CORE: {
                DISCONNECT: 'disconnect',
                CONNECT: 'connection'
            },
            CUSTOM: {
                TEST: 'TEST',
                SIGN_UP: 'SIGN_UP',
                SELECT_TABLE: 'SELECT_TABLE',
                GAME_START: 'GAME_START',
                COLLECT_ENTRYFEE: 'COLLECT_ENTRYFEE',
                NO_PLAYER: 'NO_PLAYER',
                RETRY: 'RETRY',
                TURN_INFO: 'TURN_INFO',
                PLAYER_INFO: 'PLAYER_INFO',
                SEND_MESSAGE: 'SEND_MESSAGE',
                LEAVE_TABLE: 'LEAVE_TABLE',
                MOVE : 'MOVE'
            }
        }
    },
    ERROR: {
        MESSAGES: {
            TEST_SUCCESS: 'successfully tested',
            DUMMY_EVENT: 'Event doest not exist on server'
        }
    },
    PLAYER: 'PLAYER'
}