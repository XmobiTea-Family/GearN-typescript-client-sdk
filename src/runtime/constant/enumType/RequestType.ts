/**
 * Logical request domain used to route an operation to the right
 * backend handler.
 *
 * Every request frame carries a {@link RequestType} plus an
 * {@link OperationCode}; together they uniquely identify the
 * operation. The SDK uses {@link CodeHelper.getRequestTypeName} to
 * convert the numeric value to the lowercase-first-letter string
 * the backend expects on the wire (e.g. `RequestType.Authenticate`
 * → `"authenticate"` in the URL or socket frame).
 *
 * The numeric ordinals are part of the stable wire contract
 * because they are used by every generated `*OperationRequest`
 * subclass. Do not reorder.
 */
export enum RequestType {
    /**
     * Custom application-defined operations — reserved for code
     * that ships its own ad-hoc handlers on the backend. The
     * SDK's typed wrappers do not use this value directly.
     */
    Custom = 0,

    /**
     * Authentication, registration, refresh-token and identity
     * link/unlink operations. Routed through
     * `GNNetwork.authenticate`.
     */
    Authenticate = 1,

    /**
     * Per-character profile, friend, group and notification
     * operations. Routed through `GNNetwork.characterPlayer`.
     */
    CharacterPlayer = 2,

    /**
     * Content / file metadata, upload-token and download-token
     * operations. Routed through `GNNetwork.content`.
     */
    Content = 3,

    /**
     * Account-level player operations (master-player profile,
     * link state, friends, groups, notifications). Routed through
     * `GNNetwork.gamePlayer`.
     */
    GamePlayer = 4,

    /**
     * Group / guild metadata, member roles, message wall, group
     * currencies, group statistics. Routed through
     * `GNNetwork.group`.
     */
    Group = 5,

    /**
     * Inventory item metadata, ownership ledger, statistics, audit
     * log. Routed through `GNNetwork.inventory`.
     */
    Inventory = 6,

    /**
     * Master-player account / identity / profile operations
     * (one master player per GearN account). Routed through
     * `GNNetwork.masterPlayer`.
     */
    MasterPlayer = 7,

    /**
     * Store catalog, purchase, gift, receipt validation and audit
     * operations. Routed through `GNNetwork.storeInventory`.
     */
    StoreInventory = 8,

    /**
     * Dashboard / admin operations. Routed through
     * `GNNetwork.dashboard`. The backend evaluates admin
     * privileges from the auth token, so this domain is not
     * limited to {@link RequestRole.Admin}.
     */
    Dashboard = 9,

    /**
     * Matchmaking ticket lifecycle and match-history operations.
     * Routed through `GNNetwork.multiplayer`.
     */
    Multiplayer = 10,

    /**
     * CloudScript execute, publish and version-management
     * operations. Routed through `GNNetwork.cloudScript`.
     */
    CloudScript = 11,

}
