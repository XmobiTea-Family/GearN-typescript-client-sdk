import { NetworkingPeer } from "./../networking/NetworkingPeer";

/**
 * Fixed-rate driver loop that ticks the shared {@link NetworkingPeer}.
 *
 * The SDK has no event loop of its own — every transport relies on
 * a periodic `service()` call to drain queued requests, sweep
 * timeouts, and decode buffered inbound packets. This class wires a
 * `setInterval` to that `service()` method so the work happens
 * automatically on the host runtime's timer.
 *
 * Lifecycle:
 * - {@link GNNetwork.initGNSocketObject} constructs one instance,
 *   binds {@link peer}, and calls {@link run}.
 * - The interval fires every 50 ms (20 Hz). The cadence is
 *   intentionally faster than the configured `sendRate` so the
 *   queue stays responsive when the rate cap allows multiple
 *   sends per second.
 * - {@link stop} can be used in tests to halt the loop without
 *   tearing down the peer; production code never calls it.
 */
export class ServiceUpdate {
    /**
     * Active interval handle. `null` when the loop is stopped.
     */
    private intervalId: ReturnType<typeof setInterval> = null;

    /**
     * Bound peer to service on every tick. Set by the caller before
     * {@link run} is invoked.
     */
    peer: NetworkingPeer;

    /**
     * Starts the 50 ms service loop. Idempotent — calling `run`
     * while a loop is already active is a no-op so the SDK
     * bootstrap path can be defensive without leaking timers.
     */
    run() {
        if (this.intervalId !== null) return;

        this.intervalId = setInterval(() => {
            this.update();
        }, 50);
    }

    /**
     * Stops the service loop and clears the interval handle.
     *
     * Mainly useful in test setups that want to control SDK
     * timing manually. The SDK itself does not call this — the
     * loop is intended to run for the lifetime of the JS realm.
     */
    stop() {
        if (this.intervalId === null) return;

        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    /**
     * Per-tick callback. Defers everything to
     * {@link NetworkingPeer.service}, which in turn ticks both
     * transports.
     *
     * Skips silently when {@link peer} is unbound so a partially
     * constructed `ServiceUpdate` cannot crash the timer.
     */
    private update(): void {
        if (this.peer != null) this.peer.service();
    }

}
