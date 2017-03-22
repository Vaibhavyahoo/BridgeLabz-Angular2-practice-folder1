import {	RouterModule, Routes	}	from	'@angular/router';
// import { SignUpComponent } from './sign-up/sign-up.component';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SignInComponent } from './sign-in/sign-in.component'


const routes: Routes = [
  // { path: '', redirectTo: 'root', pathMatch: 'full' },

		{ path: 'child', component: ChildComponent },
			{ path: 'signIn', component: SignInComponent },


];
export const routing = RouterModule.forRoot(routes);
