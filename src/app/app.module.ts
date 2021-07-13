import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './components/footer/footer.component';
import { ToDatePipe } from './pipes/to-date.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './components/login/login.component';
import { MatTableModule } from '@angular/material/table';
import { UsersComponent } from './components/users/users.component';
import { AngularMaterialModule } from './angular.material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserInterceptor } from './Interceptor/user.interceptor';
import { AddUserComponent } from './components/add-user/add-user.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToDatePipe,
    CapitalizePipe,
    MainComponent,
    NotFoundComponent,
    LoginComponent,
    UsersComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
