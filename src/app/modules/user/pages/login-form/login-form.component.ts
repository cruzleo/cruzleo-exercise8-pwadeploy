import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit = () => {
    let hasUsernameError = this.loginForm.get('username')?.errors;
    let hasPasswordError = this.loginForm.get('password')?.errors;

    if (hasPasswordError || hasUsernameError) {
      console.log('invalid login');
    } else {
      let user: User = this.loginForm.getRawValue();
      this.authService.login().subscribe((data: any) => {
        data.forEach((element: any) => {
          if (
            element.username === user.username &&
            element.password === user.password
          ) {
            this.authService.createSession(user);
            this.router.navigate(['']);
          }
        });
      });
    }
  };

  get username() {
    return this.loginForm.get('username') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  redirectSignin() {
    this.router.navigate(['signup']);
  }
}
