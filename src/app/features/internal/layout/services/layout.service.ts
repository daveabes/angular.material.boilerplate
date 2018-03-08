import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LayoutService {
	private preloaderStateSource = new Subject<string>();

	preloaderState$ = this.preloaderStateSource.asObservable();

	private searchOverlaySource = new Subject<string>();

	searchOverlayState$ = this.searchOverlaySource.asObservable();

	private echartsSource = new Subject<boolean>();

	echartsState$ = this.echartsSource.asObservable();

	constructor() {
		// Empty constructor
	}

	updateSearchOverlayState(state: string) {
		this.searchOverlaySource.next(state);
	}

	updatePreloaderState(state: string) {
		this.preloaderStateSource.next(state);
	}

	updateEChartsState(state: boolean) {
		this.echartsSource.next(state);
	}
}
