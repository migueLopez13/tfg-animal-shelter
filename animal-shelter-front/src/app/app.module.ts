import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NavbarOptionsComponent } from './shared/components/navbar/components/navbar-options/navbar-options.component';
import { StateModule } from './state/state.module';
import { HttpClientModule } from '@angular/common/http';
import { UserAvatarComponent } from './shared/components/user-avatar/user-avatar.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { DropdownItemComponent } from './shared/components/dropdown/dropdown-item/dropdown-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarOptionsComponent,
    UserAvatarComponent,
    DropdownComponent,
    DropdownItemComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    StateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
