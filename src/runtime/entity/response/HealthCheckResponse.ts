interface InstanceResponse {
	instanceId: string;
	isPrimary: boolean;
	currentInstanceIdPrimary: string;
	currentTsPrimary: number;
	currentTsPrimaryToDate: string;
	tsPrimary: number;
	tsPrimaryToDate: string;
}

interface OtherInstanceResponse extends InstanceResponse {
	lostPing: number;
}

interface HealthCheckDataResponse {
	thisInstance: InstanceResponse;
	otherInstances: OtherInstanceResponse[];
}

export class HealthCheckResponse {
	public error: string;
	public data?: HealthCheckDataResponse;

}
