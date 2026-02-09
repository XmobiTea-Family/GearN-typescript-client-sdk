/**
 * GearNExample.ts - Example Cocos Creator 3.x Component using GearN SDK
 * 
 * This component demonstrates how to integrate the GearN SDK
 * with a Cocos Creator 3.x project.
 * 
 * Installation:
 * 1. npm install @xmobitea/gn-typescript-client
 * 2. Copy this file to your Cocos Creator project's scripts folder
 * 3. Attach to a Node in your scene
 */

import { _decorator, Component, log, warn, error } from 'cc';

// Import GearN SDK
import {
    GNNetwork,
    GNServerSettings,
    GNServerSettingsOptions,
    LogType,
    MessageType
} from '@xmobitea/gn-typescript-client';

const { ccclass, property } = _decorator;

@ccclass('GearNExample')
export class GearNExample extends Component {

    @property({ tooltip: "GearN Server HTTP URL" })
    httpUrl: string = "http://localhost:8080";

    @property({ tooltip: "GearN Server Socket URL" })
    socketUrl: string = "ws://localhost:8080";

    @property({ tooltip: "Your Game/App Secret Key" })
    secretKey: string = "";

    @property({ tooltip: "Enable debug logging" })
    enableDebugLog: boolean = true;

    start() {
        this.initializeGearN();
    }

    /**
     * Initialize GearN SDK
     */
    private initializeGearN(): void {
        try {
            // Create server settings
            const settings: GNServerSettingsOptions = {
                httpUrl: this.httpUrl,
                socketUrl: this.socketUrl,
                secretKey: this.secretKey,
                useSocket: true,
                useHttp: true,
                logType: this.enableDebugLog ? LogType.All : LogType.None,
                sendRate: 30,
                messageType: MessageType.MsgPack,
                socketReconnectDelay: 1000,
                socketPingInterval: 3000,
                socketPingTimeout: 5000,
                httpRequestTimeout: 10,
            };

            const gnServerSettings = new GNServerSettings(settings);

            // Initialize GearN
            GNNetwork.init(gnServerSettings);

            log('[GearN] SDK initialized successfully!');
            log('[GearN] Platform:', GNNetwork.getPlatform());

            // Subscribe to connection events
            this.setupConnectionHandlers();

        } catch (err) {
            error('[GearN] Failed to initialize SDK:', err);
        }
    }

    /**
     * Setup socket connection event handlers
     */
    private setupConnectionHandlers(): void {
        GNNetwork.subscriberOnConnectHandler(() => {
            log('[GearN] Socket connected! SID:', GNNetwork.getSocketSId());

            // Authenticate after connection
            this.onSocketConnected();
        });

        GNNetwork.subscriberOnDisconnectHandler(() => {
            warn('[GearN] Socket disconnected!');
        });
    }

    /**
     * Called when socket is connected
     */
    private onSocketConnected(): void {
        // Example: Send auth token if already logged in
        const authStatus = GNNetwork.getAuthenticateStatus();
        if (authStatus.getAuthToken()) {
            GNNetwork.sendRequestAuthSocket();
            log('[GearN] Auth token sent to socket');
        }
    }

    /**
     * Connect to socket server
     */
    public connectSocket(): void {
        log('[GearN] Connecting to socket...');
        GNNetwork.connectSocket(() => {
            log('[GearN] Socket connection initiated');
        });
    }

    /**
     * Disconnect from socket server
     */
    public disconnectSocket(): void {
        log('[GearN] Disconnecting from socket...');
        GNNetwork.disconnectSocket(() => {
            log('[GearN] Socket disconnected');
        });
    }

    /**
     * Example: Login with device ID
     */
    public async loginWithDeviceId(deviceId: string): Promise<void> {
        try {
            log('[GearN] Logging in with device ID:', deviceId);

            const response = await GNNetwork.authenticate.loginDeviceIdAsync({
                deviceId: deviceId,
                createAccount: true,
            });

            if (response.hasError()) {
                error('[GearN] Login failed:', response.getDebugMessage());
                return;
            }

            log('[GearN] Login successful!');
            log('[GearN] User ID:', GNNetwork.getAuthenticateStatus().getUserId());

            // Connect socket after successful login
            this.connectSocket();

        } catch (err) {
            error('[GearN] Login error:', err);
        }
    }

    /**
     * Example: Get server health status
     */
    public async checkServerHealth(): Promise<void> {
        try {
            const response = await GNNetwork.healthCheckAsync();
            log('[GearN] Server health:', response);
        } catch (err) {
            error('[GearN] Health check failed:', err);
        }
    }

    onDestroy() {
        // Cleanup: disconnect socket when component is destroyed
        if (GNNetwork.isSocketConnected()) {
            GNNetwork.disconnectSocket();
        }
    }
}
