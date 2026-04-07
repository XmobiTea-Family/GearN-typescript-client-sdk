import { NetworkingPeer } from "./../networking/NetworkingPeer";

/**
 * Runs the lightweight service loop that drives pending network work.
 */
export class ServiceUpdate {
	private intervalId: ReturnType<typeof setInterval> = null;

	peer: NetworkingPeer;

	/**
	 * Starts the fixed update loop once and ignores duplicate start calls.
	 */
	run() {
		if (this.intervalId !== null) return;

		this.intervalId = setInterval(() => {
			this.update();
		}, 50);
	}

	/**
	 * Stops the update loop and clears the active timer handle.
	 */
	stop() {
		if (this.intervalId === null) return;

		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	/**
	 * Services the shared peer so queued HTTP and socket work can progress.
	 */
	private update(): void {
		if (this.peer != null) this.peer.service();
	}

}
