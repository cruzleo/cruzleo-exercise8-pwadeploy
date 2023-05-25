import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) {
    this.signupForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit = () => {
    let hasEmailError = this.signupForm.get('email')?.errors;
    let hasNameError = this.signupForm.get('name')?.errors;
    let hasUsernameError = this.signupForm.get('username')?.errors;
    let hasPasswordError = this.signupForm.get('password')?.errors;

    if (hasEmailError || hasNameError || hasUsernameError || hasPasswordError) {
      console.log('error with inputs');
    } else {
      const user: User = this.signupForm.getRawValue();
      this.authService.addUser(user).subscribe();
      this.router.navigate(['login']);
    }
  };

  get email() {
    return this.signupForm.get('email') as FormControl;
  }

  get name() {
    return this.signupForm.get('name') as FormControl;
  }

  get username() {
    return this.signupForm.get('username') as FormControl;
  }

  get password() {
    return this.signupForm.get('password') as FormControl;
  }

  redirectLogin = () => {
    this.router.navigate(['login']);
  };
}
