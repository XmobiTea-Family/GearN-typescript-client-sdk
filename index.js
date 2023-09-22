const fs = require("fs");

const {
    GNNetwork,
    GNServerSettings,
    OperationCode,
    LogType,
    LoginOperationResponse,
    ReturnCode,
    GNDebug,
    GNHashtable,
    OperationRequest
} = require("./dist/index");

const encode = require("@msgpack/msgpack").encode;
const decode = require("@msgpack/msgpack").decode;
var axios = require("axios");
const FormData = require('form-data');
const { AuthenticateModels } = require("./dist/runtime/entity/models/AuthenticateModels");

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

GNNetwork.customIdLogin("hihihi", response => {
    console.log(response);
});

GNNetwork.connectSocket(() => {
    console.log("connect success");
});

GNNetwork.authenticate.loginByAccount(new AuthenticateModels.LoginByAccountRequestData(), response => {
    response.responseData.password;
});

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
