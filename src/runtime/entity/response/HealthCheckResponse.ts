/**
 * Describes InstanceResponse.
 */
interface InstanceResponse {
	instanceId: string;
	isPrimary: boolean;
	currentInstanceIdPrimary: string;
	currentTsPrimary: number;
	currentTsPrimaryToDate: string;
	tsPrimary: number;
	tsPrimaryToDate: string;
}

/**
 * Describes OtherInstanceResponse.
 */
interface OtherInstanceResponse extends InstanceResponse {
	lostPing: number;
}

/**
 * Describes HealthCheckDataResponse.
 */
interface HealthCheckDataResponse {
	thisInstance: InstanceResponse;
	otherInstances: OtherInstanceResponse[];
}

/**
 * Represents the HTTP response returned by `GNNetwork.healthCheck()`.
 */
export class HealthCheckResponse {
	public error: string;
	public data?: HealthCheckDataResponse;

}
