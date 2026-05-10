/**
 * Per-instance status block returned by the GearN health-check
 * endpoint.
 *
 * The backend runs in clusters where one node is the **primary**
 * (acts as the source of truth for clock / leader election) and
 * the rest are **replicas**. The fields below describe one node's
 * view of the cluster topology at the moment of the health check.
 */
interface InstanceResponse {
    /** Identifier of the node returning this block. */
    instanceId: string;
    /**
     * Whether the node is currently the cluster primary. Only one
     * node should report `true` at any given time; multiple
     * primaries indicate a split-brain situation.
     */
    isPrimary: boolean;
    /** Identifier of the node currently considered primary. */
    currentInstanceIdPrimary: string;
    /** Primary clock value at the time of the check (ms since epoch). */
    currentTsPrimary: number;
    /** Same as `currentTsPrimary` formatted as a human-readable date. */
    currentTsPrimaryToDate: string;
    /** Last primary timestamp this node observed (ms since epoch). */
    tsPrimary: number;
    /** Same as `tsPrimary` formatted as a human-readable date. */
    tsPrimaryToDate: string;
}

/**
 * Per-replica view returned alongside the primary block.
 *
 * Extends {@link InstanceResponse} with the additional `lostPing`
 * counter so operators can spot replicas that have fallen behind on
 * the primary's heartbeat.
 */
interface OtherInstanceResponse extends InstanceResponse {
    /**
     * Number of consecutive missed heartbeats the primary
     * observed for this replica. A non-zero value typically
     * indicates the replica is degraded.
     */
    lostPing: number;
}

/**
 * Decoded shape of the `healthcheck` HTTP endpoint payload.
 *
 * Populated only when the endpoint returned a `200` response with a
 * non-error envelope.
 */
interface HealthCheckDataResponse {
    /** Status block of the node that handled the request. */
    thisInstance: InstanceResponse;
    /** Status of every other node the primary tracks. */
    otherInstances: OtherInstanceResponse[];
}

/**
 * Top-level wrapper returned by
 * {@link GNNetwork.healthCheck} / `healthCheckAsync`.
 *
 * The wrapper always carries either an `error` string or a `data`
 * payload, never both. Useful for warm-up probes or readiness
 * dashboards — the endpoint does not require an auth token.
 */
export class HealthCheckResponse {
    /**
     * Transport-level error message, or `null` when the call
     * succeeded.
     */
    public error: string;
    /**
     * Decoded health-check payload. Defined only when
     * {@link error} is `null`.
     */
    public data?: HealthCheckDataResponse;

}
