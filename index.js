const fs = require("fs");

const {
    GNNetwork,
    GNServerSettings,
    OperationCode,
    LogType,
    LoginOperationResponse,
    ReturnCode,
    GNDebug
} = require("./dist/index");

const encode = require("@msgpack/msgpack").encode;
const decode = require("@msgpack/msgpack").decode;
var axios = require("axios");
const FormData = require('form-data');

const optionsPath = __dirname + "/./GNServerSettingsConfig.debug.json";
let optionStr = fs.readFileSync(optionsPath).toString();
let fullOptions = JSON.parse(optionStr);
let options = fullOptions.options;

let gnServerSettings = new GNServerSettings();
gnServerSettings.config(options);

// gnServerSettings.serverAddress = "127.0.0.1";
// gnServerSettings.serverPort = 2202;
// gnServerSettings.useSsl = false;
// gnServerSettings.useSocket = true;
// gnServerSettings.useHttp = true;
// gnServerSettings.sendRate = 20;
// gnServerSettings.reconnectDelay = 5000;
// gnServerSettings.pingInterval = 20000;
// gnServerSettings.pingTimeout = 20000;
// gnServerSettings.codeCanSendNotAuthorized = [OperationCode.Debug, OperationCode.GetAppConfig, OperationCode.Login, OperationCode.RegisterAccount];
// gnServerSettings.logType = LogType.All;

GNNetwork.init(gnServerSettings);
// GNNetwork.connectSocket({
//     invoke: () => {
//         console.log("connect success");
//     }
// });

GNNetwork.deviceLogin({
    invoke: function (loginOperationResponse) {
        console.log(loginOperationResponse.parameters);
    }
});

// var a = new Uint8Array([
//     91,
//     49,
//     44,
//     123,
//     34,
//     69,
//     34,
//     58,
//     49,
//     44,
//     34,
//     65,
//     34,
//     58,
//     34,
//     57,
//     56,
//     54,
//     99,
//     53,
//     51,
//     55,
//     100,
//     55,
//     48,
//     54,
//     53,
//     55,
//     55,
//     97,
//     102,
//     99,
//     98,
//     52,
//     54,
//     49,
//     53,
//     51,
//     100,
//     102,
//     49,
//     51,
//     50,
//     54,
//     97,
//     48,
//     52,
//     34,
//     44,
//     34,
//     85,
//     34,
//     58,
//     34,
//     54,
//     51,
//     98,
//     100,
//     52,
//     99,
//     53,
//     54,
//     98,
//     57,
//     54,
//     50,
//     55,
//     53,
//     54,
//     98,
//     56,
//     48,
//     54,
//     48,
//     97,
//     49,
//     98,
//     97,
//     34,
//     125,
//     93
// ]);
// console.log(utf8ArrayToString(a));;

// function bytesToSring(bytes) {
//     var chars = [];
//     for (var i = 0, n = bytes.length; i < n;) {
//         chars.push(((bytes[i++] & 0xff) << 8) | (bytes[i++] & 0xff));
//     }
//     return String.fromCharCode.apply(null, chars);
// }

// console.log(decodeURIComponent(escape(String.fromCharCode(... a))));
// function utf8ArrayToString(aBytes) {
//     var sView = "";

//     for (var nPart, nLen = aBytes.length, nIdx = 0; nIdx < nLen; nIdx++) {
//         nPart = aBytes[nIdx];

//         sView += String.fromCharCode(nPart > 251 && nPart < 254 && nIdx + 5 < nLen ?
//         /* six bytes */
//         /* (nPart - 252 << 30) may be not so safe in ECMAScript! So...: */
//             (nPart - 252) * 1073741824 + (aBytes[++ nIdx] - 128 << 24) + (aBytes[++ nIdx] - 128 << 18) + (aBytes[++ nIdx] - 128 << 12) + (aBytes[++ nIdx] - 128 << 6) + aBytes[++ nIdx] - 128 : nPart > 247 && nPart < 252 && nIdx + 4 < nLen ? /* five bytes */
//                 (nPart - 248 << 24) + (aBytes[++ nIdx] - 128 << 18) + (aBytes[++ nIdx] - 128 << 12) + (aBytes[++ nIdx] - 128 << 6) + aBytes[++ nIdx] - 128 : nPart > 239 && nPart < 248 && nIdx + 3 < nLen ? /* four bytes */
//                 (nPart - 240 << 18) + (aBytes[++ nIdx] - 128 << 12) + (aBytes[++ nIdx] - 128 << 6) + aBytes[++ nIdx] - 128 : nPart > 223 && nPart < 240 && nIdx + 2 < nLen ? /* three bytes */
//                 (nPart - 224 << 12) + (aBytes[++ nIdx] - 128 << 6) + aBytes[++ nIdx] - 128 : nPart > 191 && nPart < 224 && nIdx + 1 < nLen ? /* two bytes */
//                 (nPart - 192 << 6) + aBytes[++ nIdx] - 128 :
//         /* nPart < 127 ? */
//         /* one byte */
//         nPart);
//     }

//     return sView;
// }

// function Utf8ArrayToStr(array) {
//     var out,
//         i,
//         len,
//         c;
//     var char2,
//         char3;

//     out = "";
//     len = array.length;
//     i = 0;
//     while (i < len) {
//         c = array[i++];
//         switch (c >> 4) {
//             case 0:
//             case 1:
//             case 2:
//             case 3:
//             case 4:
//             case 5:
//             case 6:
//             case 7:
//                 // 0xxxxxxx
//                 out += String.fromCharCode(c);
//                 break;
//             case 12:
//             case 13:
//                 // 110x xxxx   10xx xxxx
//                 char2 = array[i++];
//                 out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
//                 break;
//             case 14:
//                 // 1110 xxxx  10xx xxxx  10xx xxxx
//                 char2 = array[i++];
//                 char3 = array[i++];
//                 out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
//                 break;
//         }
//     }

//     return out;
// }

// var data = encode({"1":2,"4":"17_503b123a-e2ba-4305-a517-90bda87692fe"});
// var request3 = async function () {
//     axios.post("http://127.0.0.1:2202/api/1/2", data, {
//         "headers": {
//             "Content-Type": "application/msgpack",
//             "Content-Length": data.length
//         },
//         responseType: "arraybuffer",
//     }).then(x => {
//         console.log(x.data.toString());
//     });

// let formData = new FormData();


// var data = encode({"1": 2, "4": "17_503b123a-e2ba-4305-a517-90bda87692fe"});

// let formData = new FormData();
// formData.append("1", 2);
// formData.append("4", "17_503b123a-e2ba-4305-a517-90bda87692fe");
// console.log(formData.getHeaders());


// var request4 = async function () {
//     axios.post("http://127.0.0.1:2202/api/1/2", encode({"1":2,"4":"17_503b123a-e2ba-4305-a517-90bda87692fe"}), {
//         headers: new axios.AxiosHeaders().set("content-type", "application/msgpack").set("content-length", encode({"1":2,"4":"17_503b123a-e2ba-4305-a517-90bda87692fe"}).length),
//         responseType: "arraybuffer",

//     }).then(x => {
//         console.log(x.data.toString());
//     });
// }
// request4();

// }

// request3();


// let gnServerSettings = new GN.GNServerSettings();

// gnServerSettings.serverAddress = "127.0.0.1";
// gnServerSettings.serverPort = 2202;
// gnServerSettings.useSsl = false;
// gnServerSettings.useSocket = true;
// gnServerSettings.useHttp = true;
// gnServerSettings.sendRate = 20;
// gnServerSettings.reconnectDelay = 5000;
// gnServerSettings.pingInterval = 20000;
// gnServerSettings.pingTimeout = 20000;
// gnServerSettings.codeCanSendNotAuthorized = [GN.OperationCode.Debug, GN.OperationCode.GetAppConfig, GN.OperationCode.Login, GN.OperationCode.RegisterAccount];
// gnServerSettings.logType = GN.LogType.All;

// GN.GNNetwork.init(gnServerSettings);

// // var http = require("http");

// // var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// // let request = new XMLHttpRequest();
// // request.open("POST", "http://127.0.0.1:2202/api/0/2", true);

// // request.setRequestHeader(USER_AGENT, HttpPeer.userAgent);

// // request.timeout = 15 * 1000;


// var request2 = async function () {
//     let result = await axios.post("http://127.0.0.1:2202/api/1/2", data, {
//         "headers": {
//             "Content-Type": "application/msgpack"
//         },
//         responseType: "arraybuffer",
//     });

//     console.log(result.data.toString());

// }


// // request.

// // request.setRequestHeader("content-type", "application/json");

// // let content = [0];
// // let body = JSON.stringify(content);
// // //let body = encode(content);

// // request.responseType = "application/json";

// // request.send(body);

// const { io, Socket, Manager } = require("./src/plugins/socket.io.esm.min.js");

// const manager = new Manager("http://127.0.0.1:2202/socket.io/", {
//     autoConnect: true,
//     transports: ["websocket"],
//     reconnection: true,
//     reconnectionDelay: 300,

// });

// console.log("open");

// manager.open(err => {
//     console.log(err);
// });

// const socket = manager.socket("/");
// socket.connect();

// socket.io.on("error", (error) => {
//     console.log("error " + error);
// });

// socket.io.on("ping", () => {
//     console.log("ping");
// });

// socket.io.on("reconnect", (attempt) => {
//     console.log("reconnect " + attempt);
// });

// socket.io.on("reconnect_attempt", (attempt) => {
//     console.log("reconnect_attempt " + attempt);
// });

// socket.io.on("reconnect_error", (error) => {
//     console.log("reconnect_error " + error);
// });

// socket.io.on("reconnect_failed", () => {
//     console.log("reconnect_failed");
// });

// socket.on("open", l => {
//     console.log("on open");
// });

// socket.on("r", (...l) => {
//     console.log(l[0].length);
//     console.log(decode(l[0]));
// })

// socket.on("connect", (listener) => {
//     console.log("on connect");
//     //socket.emit("r", encode([2]));

//     //socket.disconnect();
// });

// socket.on("disconnect", () => {
//     console.log("on disconnect");

//     //setTimeout(() => socket.connect(), 3000);
// });

// // // manager.open((err) => {
// // //     if (err) { // an error has occurred
// // //     } else { // the connection was successfully established
// // //     }

// // //     console.log("open " + err);


// // // });

process.on("uncaughtException", (uncaughtException) => {
	GNDebug.log("Uncaught Exception at: %s - message: %s", uncaughtException.stack, uncaughtException.message);
});

process.on("uncaughtError", (uncaughtException) => {
	GNDebug.log("Uncaught Error at: %s - message: %s", uncaughtException.stack, uncaughtException.message);
});

process.on("unhandledRejection", (reason) => {
	GNDebug.log("Unhandled Rejection at: %s - message: %s", reason.stack, reason.message);
});



// console.log(manager);
