import { NetworkingPeer } from "./../networking/NetworkingPeer";

export class ServiceUpdate {
	peer: NetworkingPeer;

	run() {
		let thiz = this;
		setInterval(() => {
			thiz.update();
		}, 50);
	}

	private update(): void {
		if (this.peer != null) this.peer.service();
	}

}
