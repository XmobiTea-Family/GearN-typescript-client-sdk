import { NetworkingPeer } from "./../networking/NetworkingPeer";

export class ServiceUpdate {
	private intervalId: NodeJS.Timeout | number | null = null;

	peer: NetworkingPeer;

	run() {
		if (this.intervalId) return;

		this.intervalId = setInterval(() => {
			this.update();
		}, 50);
	}

	stop() {
		if (!this.intervalId) return;

		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	private update(): void {
		if (this.peer != null) this.peer.service();
	}

}
