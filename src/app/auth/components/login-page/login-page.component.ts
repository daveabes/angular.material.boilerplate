import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Authenticate } from '@app/auth/models/user';
import * as fromAuth from '@app/auth/reducers';
import * as Auth from '@app/auth/actions/auth.actions';

import { routerTransition } from '@app/core';
import { environment as env } from '@env/environment';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: [],
	animations: [routerTransition]
})
export class LoginPageComponent implements OnInit {
	version = env.versions.app;
	pending$ = this.store.select(fromAuth.getLoginPagePending);
	error$ = this.store.select(fromAuth.getLoginPageError);

	constructor(private store: Store<fromAuth.State>) {}

	ngOnInit() {}

	onSubmit($event: Authenticate) {
		this.store.dispatch(new Auth.Login($event));
	}
}
