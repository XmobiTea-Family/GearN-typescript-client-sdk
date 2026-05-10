/**
 * Mobile platform discriminator for push-notification registrations.
 *
 * Used when a player registers a device token with the GearN
 * backend so the server can later route a push through the right
 * platform service (FCM for Android, APNS for iOS).
 *
 * Surfaced on
 * `MasterPlayerModels.PushNotificationRegistration.platformType`.
 */
export enum PushPlatformType {
    /**
     * Android — the registered token is an FCM token consumed by
     * the backend's Firebase integration.
     */
    Android = 1,

    /**
     * iOS — the registered token is an APNS token consumed by the
     * backend's Apple push integration.
     */
    iOS = 2,

}
