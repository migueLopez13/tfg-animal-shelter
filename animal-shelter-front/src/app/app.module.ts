import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NavbarOptionsComponent } from './shared/components/navbar/components/navbar-options/navbar-options.component';
import { StateModule } from './state/state.module';
import { HttpClientModule } from '@angular/common/http';
import { UserAvatarComponent } from './shared/components/user-avatar/user-avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarOptionsComponent,
    UserAvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
