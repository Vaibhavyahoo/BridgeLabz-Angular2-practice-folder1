import {	RouterModule, Routes	}	from	'@angular/router';
// import { SignUpComponent } from './sign-up/sign-up.component';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';



const routes: Routes = [
  // { path: '', redirectTo: 'root', pathMatch: 'full' },
		{ path: 'root', component: AppComponent },
		{ path: 'child', component: ChildComponent },


];
export const routing = RouterModule.forRoot(routes);
