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
    OperationRequest,
    DashboardModels,
    GNErrorCode,
} = require("./dist/index");

const encode = require("@msgpack/msgpack").encode;
const decode = require("@msgpack/msgpack").decode;
var axios = require("axios");

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

let loginByAdminAccountRequestData = new DashboardModels.LoginByAdminAccountRequestData();
loginByAdminAccountRequestData.username = "gnadmin";
loginByAdminAccountRequestData.password = "123456";

GNNetwork.dashboard.loginByAdminAccount(loginByAdminAccountRequestData, response => {
    console.log(response.errorCode);

    if (response.errorCode == GNErrorCode.Ok) {
        let changePasswordAdminAccountRequestData = new DashboardModels.ChangePasswordAdminAccountRequestData();
        changePasswordAdminAccountRequestData.currentPassword = "123456";
        changePasswordAdminAccountRequestData.password = "gnadmin";
    
        GNNetwork.dashboard.changePasswordAdminAccount(changePasswordAdminAccountRequestData, response => {
            console.log(response.errorCode);
        });
    }
});

// GNNetwork.connectSocket(() => {
//     console.log("connect success");
// });

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

// process.on("uncaughtException", (uncaughtException) => {
//     GNDebug.log("Uncaught Exception at: %s - message: %s", uncaughtException.stack, uncaughtException.message);
// });

// process.on("uncaughtError", (uncaughtException) => {
//     GNDebug.log("Uncaught Error at: %s - message: %s", uncaughtException.stack, uncaughtException.message);
// });

// process.on("unhandledRejection", (reason) => {
//     GNDebug.log("Unhandled Rejection at: %s - message: %s", reason.stack, reason.message);
// });


// console.log(manager);
