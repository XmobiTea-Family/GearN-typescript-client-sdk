import { GNHashtable } from "./../../common/GNData";
import { LoginType } from "./../../constant/enumType/LoginType";
import { OperationCode } from "./../../constant/OperationCode";
import { LoginParameterCode } from "./../../constant/parameterCode/LoginParameterCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class LoginOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.Login;

    protected override operationEncrypted: boolean = true;

    constructor(timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);
    }

}

export class AccountLoginOperationRequest extends LoginOperationRequest {

    constructor(username: string, password: string, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(LoginParameterCode.LoginType, <number>LoginType.Account)
            .add(LoginParameterCode.Username, username)
            .add(LoginParameterCode.Password, password)
            .build();
    }

}

export class DeviceLoginOperationRequest extends LoginOperationRequest {

    constructor(deviceInfo: string, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(LoginParameterCode.LoginType, <number>LoginType.Device)
            .add(LoginParameterCode.DeviceInfo, deviceInfo)
            .build();
    }

}

export class FacebookLoginOperationRequest extends LoginOperationRequest {

    constructor(facebookToken: string, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(LoginParameterCode.LoginType, <number>LoginType.Facebook)
            .add(LoginParameterCode.FacebookToken, facebookToken)
            .build();
    }

}

export class GoogleLoginOperationRequest extends LoginOperationRequest {

    constructor(googleToken: string, googleLoginType: number, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(LoginParameterCode.LoginType, <number>LoginType.Google)
            .add(LoginParameterCode.GoogleToken, googleToken)
            .add(LoginParameterCode.GoogleLoginType, googleLoginType)
            .build();
    }

}

export class AppleLoginOperationRequest extends LoginOperationRequest {

    constructor(appleToken: string, displayName: string, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(LoginParameterCode.LoginType, <number>LoginType.Apple)
            .add(LoginParameterCode.AppleToken, appleToken)
            .add(LoginParameterCode.DisplayName, displayName)
            .build();
    }

}

export class UserIdLoginOperationRequest extends LoginOperationRequest {

    constructor(userId: string, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(LoginParameterCode.LoginType, <number>LoginType.UserId)
            .add(LoginParameterCode.UserId, userId)
            .build();
    }

}

export class PublicAddressLoginOperationRequest extends LoginOperationRequest {

    constructor(signature: string, publicAddress: string, message: string, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(LoginParameterCode.LoginType, <number>LoginType.PublicAddress)
            .add(LoginParameterCode.Signature, signature)
            .add(LoginParameterCode.PublicAddress, publicAddress)
            .add(LoginParameterCode.Message, message)
            .build();
    }

}

export class PublicAddressGetRandomMessageOperationRequest extends LoginOperationRequest {

    constructor(timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(LoginParameterCode.LoginType, <number>LoginType.PublicAddress)
            .build();
    }

}

export class CustomIdLoginOperationRequest extends LoginOperationRequest {

    constructor(customId: string, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(LoginParameterCode.LoginType, <number>LoginType.CustomId)
            .add(LoginParameterCode.CustomId, customId)
            .build();
    }

}
