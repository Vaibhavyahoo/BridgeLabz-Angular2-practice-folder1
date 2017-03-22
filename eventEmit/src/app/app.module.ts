import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SignInComponent } from './sign-in/sign-in.component'
import {	routing	}	from	'./app.routes';
import { AuthService} from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,routing,RouterModule,SignInComponent ,AuthService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
