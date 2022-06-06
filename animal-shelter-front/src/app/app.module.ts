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
import { CardComponent } from './shared/components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { InConstructionComponent } from './shared/components/in-construction/in-construction.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarOptionsComponent,
    UserAvatarComponent,
    DropdownComponent,
    DropdownItemComponent,
    CardComponent,
    InConstructionComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    StateModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
