import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
      },
      {
        path: 'dashboard',
        component: MainComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'add-user',
        component: AddUserComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
