import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './modules/user/pages/login-form/login-form.component';
import { SignupComponent } from './modules/user/pages/signup/signup.component';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full',
  },
  {
    path: 'book',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./modules/book/book.module').then((m) => m.BookModule),
  },
  {
    path: 'blog',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./modules/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'profile',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
