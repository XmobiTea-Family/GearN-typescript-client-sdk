
export class GNSupport {
    private static _isBrowser: boolean;

    static init(): void {
        this._isBrowser = (typeof window !== 'undefined');

        if (!this._isBrowser) {
            if (!globalThis.exports) globalThis.exports = {};

            let LocalStorage = require('node-localstorage').LocalStorage;
            globalThis.exports.localStorage = new LocalStorage(__dirname + '/../../../.././scratch');

            let crypto = require("crypto");
            globalThis.exports.crypto = crypto;

            globalThis.exports.axios = require("axios");

            let socket = require("socket.io-client");
            globalThis.exports.Manager = socket.Manager;
            globalThis.exports.Socket = socket.Socket;

            let msgpack = require("@msgpack/msgpack");
            globalThis.exports.decode = msgpack.decode;
            globalThis.exports.encode = msgpack.encode;
        }
        else {
            if (globalThis.exports == null) globalThis.exports = {};

            globalThis.exports.localStorage = window.localStorage;
            globalThis.exports.crypto = window.crypto;

            // globalThis.exports.axios = require("./../../plugins/axios.min.js");
            globalThis.exports.axios = (window as any).axios;

            // let io = require("./../../plugins/socket.io.min.js");
            let io = (window as any).io;
            globalThis.exports.Manager = io.Manager;
            globalThis.exports.Socket = io.Socket;

            // let msgpack = require("./../../plugins/msgpack.min.js");
            let msgpack = (window as any).msgpack;
            globalThis.exports.decode = msgpack.decode;
            globalThis.exports.encode = msgpack.encode;
        }
    }

    public static isBrowser(): boolean {
        return this._isBrowser;
    }

}
