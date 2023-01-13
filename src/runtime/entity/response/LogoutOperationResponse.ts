import { GNNetwork } from "./../../GNNetwork";
import { GNDebug } from "./../../logger/GNDebug";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

export class LogoutOperationResponse extends CustomOperationResponse {

    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError()) {
            GNNetwork.setAuthToken("");
            GNNetwork.setUserId("");

            GNDebug.log("[GN] Logout success.");
        }
        else {
            GNDebug.logError("[GN] You need login before logout.");
        }
    }
}
